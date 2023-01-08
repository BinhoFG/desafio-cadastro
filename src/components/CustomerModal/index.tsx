import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X, UserCirclePlus, PencilLine } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Customer, CustomerContext } from '../../contexts/CustomerContext'

import {
  CloseButton,
  Content,
  CustomerGenderOption,
  CustomerGenderContainer,
  DialogTitle,
  NewCustomerForm,
  Overlay,
  StatusSection,
} from './styles'

interface CustomerModalProps {
  type: 'add' | 'edit'
  customer?: Customer
  id?: string
  status?: 'active' | 'inactive'
}

const newCustomerSchema = z.object({
  name: z
    .string()
    .min(8, { message: 'Mínimo de 8 caracteres.' })
    .max(50, { message: 'Máximo de 50 caracteres.' }),
  birthDate: z
    .string()
    .regex(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/, {
      message: 'Utilize o formato DD/MM/AAAA',
    }),
  identity: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'Utilize o formato 000.000.000-00',
  }),
  address: z
    .string()
    .max(50, { message: 'Máximo de 50 caracteres.' })
    .optional(),
  gender: z.enum(['male', 'female']),
  status: z.enum(['active', 'inactive']).optional(),
})

type NewCustomerSchemaType = z.infer<typeof newCustomerSchema>

export function CustomerModal({ type, customer, id }: CustomerModalProps) {
  const { registerCustomer, updateCustomer } = useContext(CustomerContext)

  const defaultValuesOnRegisterCustomer = { gender: 'male' }
  const customerValues = customer
    ? {
        name: customer.name,
        birthDate: customer.birthDate,
        identity: customer.identity,
        address: customer.address,
        gender: customer.gender,
        status: customer.status,
      }
    : defaultValuesOnRegisterCustomer

  const {
    register,
    handleSubmit,
    control,
    reset,
    resetField,
    formState: { errors },
  } = useForm<NewCustomerSchemaType>({
    resolver: zodResolver(newCustomerSchema),
    defaultValues: customerValues as any,
  })

  function handleRegisterNewCustomer(customer: NewCustomerSchemaType, e: any) {
    e.preventDefault()

    const newCustomerObj = {
      name: customer.name,
      birthDate: customer.birthDate,
      identity: customer.identity,
      address: customer.address,
      gender: customer.gender,
    }

    const identityAlreadyExists = registerCustomer(newCustomerObj)
    resetField('identity')
    if (!identityAlreadyExists) {
      reset()
    }
  }

  function handleUpdateCustomer(customer: NewCustomerSchemaType, e: any) {
    e.preventDefault()

    const updatedCostumerObj = {
      id: id as string,
      name: customer.name,
      birthDate: customer.birthDate,
      identity: customer.identity,
      address: customer.address,
      gender: customer.gender,
      status: customer.status as 'active' | 'inactive',
    }
    console.log(updatedCostumerObj)

    updateCustomer(updatedCostumerObj)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content type={type}>
        <CloseButton asChild>
          <button>
            <X size={24} weight="bold" />
          </button>
        </CloseButton>
        <DialogTitle>
          {type === 'add' ? (
            <UserCirclePlus size={32} />
          ) : (
            <PencilLine size={32} />
          )}
          {type === 'add' ? 'Cadastrar' : 'Editar'} Paciente
        </DialogTitle>

        {type === 'edit' && (
          <span>Após editar as informações, salve as alterações.</span>
        )}

        <NewCustomerForm
          onSubmit={
            type === 'add'
              ? handleSubmit(handleRegisterNewCustomer)
              : handleSubmit(handleUpdateCustomer)
          }
          id="newCustomer"
        >
          <div>
            <input
              {...register('name')}
              type="text"
              placeholder="Nome..."
              name="name"
            />
            {errors.name && (
              <p className="errorMessage">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register('birthDate')}
              type="text"
              placeholder="Nascimento..."
              name="birthDate"
            />
            {errors.birthDate && (
              <p className="errorMessage">{errors.birthDate.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('identity')}
              type="text"
              placeholder="CPF..."
              name="identity"
            />
            {errors.identity && (
              <p className="errorMessage">{errors.identity.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('address')}
              type="text"
              placeholder="Endereço (opcional)..."
              name="address"
            />
            {errors.address && (
              <p className="errorMessage">{errors.address.message}</p>
            )}
          </div>

          <Controller
            name="gender"
            control={control}
            render={({ field }) => {
              return (
                <CustomerGenderContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <CustomerGenderOption value="male">
                    Masculino
                  </CustomerGenderOption>
                  <CustomerGenderOption value="female">
                    Feminino
                  </CustomerGenderOption>
                </CustomerGenderContainer>
              )
            }}
          />

          {type === 'edit' && (
            <Controller
              name="status"
              control={control}
              render={({ field }) => {
                return (
                  <StatusSection
                    defaultValue={
                      customer!.status === 'active' ? 'active' : 'inactive'
                    }
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <RadioGroup.Item
                      className="statusRadioGroupItem active"
                      value="active"
                    >
                      Ativo
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      className="statusRadioGroupItem inactive"
                      value="inactive"
                    >
                      Inativo
                    </RadioGroup.Item>
                  </StatusSection>
                )
              }}
            />
          )}

          <button>{type === 'add' ? 'Cadastrar' : 'Salvar'}</button>
        </NewCustomerForm>
      </Content>
    </Dialog.Portal>
  )
}
