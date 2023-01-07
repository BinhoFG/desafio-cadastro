import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X, UserCirclePlus, PencilLine } from 'phosphor-react'

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
}

export function CustomerModal({ type }: CustomerModalProps) {
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

        <NewCustomerForm id="newCustomer">
          <input type="text" placeholder="Nome..." name="name" />
          <input type="date" placeholder="Nascimento..." name="birthDate" />
          <input type="text" placeholder="CPF..." name="id" />
          <input type="text" placeholder="Endereço..." name="address" />

          <CustomerGenderContainer>
            <CustomerGenderOption value="male">Masculino</CustomerGenderOption>
            <CustomerGenderOption value="female">Feminino</CustomerGenderOption>
          </CustomerGenderContainer>

          {type === 'edit' && (
            <StatusSection>
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
          )}

          <button>{type === 'add' ? 'Cadastrar' : 'Salvar'}</button>
        </NewCustomerForm>
      </Content>
    </Dialog.Portal>
  )
}
