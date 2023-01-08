import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { UserPlus, PencilLine } from 'phosphor-react'
import { useContext } from 'react'
import { CustomerModal } from '../components/CustomerModal'
import { Customer, CustomerContext } from '../contexts/CustomerContext'

import {
  CustomerTable,
  HomeContainer,
  SearchBar,
  SearchSection,
} from '../styles/pages/home'

interface SearchType {
  customerName: string
}

export default function Home() {
  const { searchCustomersByName, searchedCustomers } =
    useContext(CustomerContext)

  const { register, handleSubmit } = useForm<SearchType>()

  function handleSearchCustomerByName({ customerName }: SearchType, e: any) {
    e.preventDefault()

    searchCustomersByName(customerName)
  }

  return (
    <HomeContainer>
      <SearchSection>
        <SearchBar>
          <form onSubmit={handleSubmit(handleSearchCustomerByName)}>
            <input
              {...register('customerName')}
              placeholder="Pesquise por nome..."
            />
          </form>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                Cadastrar
                <UserPlus size={24} weight="bold" />
              </button>
            </Dialog.Trigger>
            <CustomerModal type="add" />
          </Dialog.Root>
        </SearchBar>
      </SearchSection>

      <CustomerTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nascimento</th>
            <th>CPF</th>
            <th>Sexo</th>
            <th>Endereço</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {searchedCustomers.map((customer: Customer) => {
            return (
              <tr
                key={customer.id}
                className={customer.status === 'inactive' ? 'inactive' : ''}
              >
                <td>{customer.name}</td>
                <td>{customer.birthDate}</td>
                <td>{customer.identity}</td>
                <td>{customer.gender === 'male' ? 'Masculino' : 'Feminino'}</td>
                <td
                  className={!customer.address ? 'noAddress' : ''}
                  title={customer.address}
                >
                  {customer.address || 'Não informado'}
                </td>
                <td>{customer.status === 'active' ? 'Ativo' : 'Inativo'}</td>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <td>
                      <PencilLine size={32} />
                    </td>
                  </Dialog.Trigger>
                  <CustomerModal
                    type="edit"
                    customer={customer}
                    id={customer.id}
                  />
                </Dialog.Root>
              </tr>
            )
          })}
        </tbody>
      </CustomerTable>
    </HomeContainer>
  )
}
