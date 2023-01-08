import { v4 as uuidv4 } from 'uuid'
import voca from 'voca'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { createContext, ReactNode, useEffect, useState } from 'react'

export interface Customer {
  id: string
  name: string
  birthDate: string
  identity: string
  address?: string
  gender: 'male' | 'female'
  status: 'active' | 'inactive'
}

interface RegisterCustomerProps {
  name: string
  birthDate: string
  identity: string
  address?: string
  gender: 'male' | 'female'
}

interface CustomerContextType {
  customers: Customer[]
  registerCustomer: (
    customer: RegisterCustomerProps,
  ) => void | { error: string }
  updateCustomer: (customer: Customer) => void | { error: string }
  searchCustomersByName: (customerName: string) => void
  searchedCustomers: Customer[]
}

export const CustomerContext = createContext({} as CustomerContextType)

interface CustomerContextProviderProps {
  children: ReactNode
}

const initialCustomers = [
  {
    id: '2fsh89sfhj3f8',
    name: 'Fernando Alberto',
    birthDate: '27/12/1987',
    identity: '518.294.235-56',
    address: 'Rua Mario Borges, 55 - Porto Alegre',
    gender: 'male',
    status: 'active',
  },
  {
    id: 'dk35hf923kf89',
    name: 'Maria Gomes',
    birthDate: '12/02/1993',
    identity: '294.683.294-34',
    address: '',
    gender: 'female',
    status: 'inactive',
  },
  {
    id: 'scs8f9h4348fds',
    name: 'Carolina Borges',
    birthDate: '05/11/2002',
    identity: '438.428.674-93',
    address: 'Rua Lucas de Oliveira, 22 - Porto Alegre',
    gender: 'female',
    status: 'active',
  },
] as Customer[]

const capitalizeString = (name: string): string => {
  const namesArray = voca.split(name, ' ')
  const capitalizedNamesArray = namesArray.map((name) => {
    return voca.capitalize(name)
  }) as unknown as string[]
  return capitalizedNamesArray.join(' ')
}

const checkIfIdentityAlreadyExists = (
  identity: string,
  customer: Customer[],
) => {
  const identityExists = customer.find((customer) => {
    return customer.identity === identity
  })
  if (identityExists) {
    toast.error('CPF Já está em uso.', {
      position: 'top-center',
      autoClose: 2000,
    })
  }
  return identityExists
}

const getStoredCustomers = () => {
  const storedCustomers = localStorage.getItem(
    '@desafio-cadastro:customers-list-1.0.0',
  ) as string
  if (storedCustomers) return JSON.parse(storedCustomers)
  return false
}

const setStoredCustomers = (customers: Customer[]) => {
  localStorage.setItem(
    '@desafio-cadastro:customers-list-1.0.0',
    JSON.stringify([...customers]),
  )
}

export function CustomerContextProvider({
  children,
}: CustomerContextProviderProps) {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers)
  const [searchedCustomers, setSearchedCustomers] =
    useState<Customer[]>(initialCustomers)

  useEffect(() => {
    setSearchedCustomers(customers)
  }, [customers])

  useEffect(() => {
    const storedCustomers = getStoredCustomers()
    if (storedCustomers) setCustomers(storedCustomers)
    if (!storedCustomers) setStoredCustomers(customers)
  }, [])

  function registerCustomer(customer: RegisterCustomerProps) {
    const identityExists = checkIfIdentityAlreadyExists(
      customer.identity,
      customers,
    )
    if (identityExists) {
      return { error: 'identityAlreadyExists' }
    }

    const newCustomerObj = {
      id: uuidv4(),
      name: capitalizeString(customer.name),
      birthDate: customer.birthDate,
      identity: customer.identity,
      address: customer.address ? capitalizeString(customer.address) : '',
      gender: customer.gender,
      status: 'active' as Customer['status'],
    }

    localStorage.setItem(
      '@desafio-cadastro:customers-list-1.0.0',
      JSON.stringify([...customers, newCustomerObj]),
    )

    toast.success('Paciente cadastrado!', {
      position: 'top-center',
      autoClose: 2000,
    })

    return setCustomers([...customers, newCustomerObj])
  }

  function updateCustomer(customer: Customer) {
    const targetCustomer = customers.find((c) => {
      return c.id === customer.id
    })
    console.log('target --------------------------------')
    console.log(targetCustomer)
    console.log('customer -------------------------------')
    console.log(customer)

    if (!targetCustomer) {
      toast.error('Paciente não encontrado!', {
        position: 'top-center',
        autoClose: 2000,
      })
      return { error: 'Paciente não encontrado.' }
    }

    if (targetCustomer.identity !== customer.identity) {
      const identityExists = checkIfIdentityAlreadyExists(
        customer.identity,
        customers,
      )
      if (identityExists) {
        return { error: 'identityAlreadyExists' }
      }
    }

    const updatedCustomer = {
      id: customer.id,
      name: capitalizeString(customer.name),
      birthDate: customer.birthDate,
      identity: customer.identity,
      address: customer.address ? capitalizeString(customer.address) : '',
      gender: customer.gender,
      status: customer.status,
    }

    const newCustomersList = (customersList: Customer[]) => {
      return customersList.map((c) => {
        if (c.id === customer.id) {
          return updatedCustomer as Customer
        } else {
          return c as Customer
        }
      })
    }

    localStorage.setItem(
      '@desafio-cadastro:customers-list-1.0.0',
      JSON.stringify(newCustomersList(customers)),
    )

    toast.success('Cadastro atualizado!', {
      position: 'top-center',
      autoClose: 2000,
    })

    setCustomers((customersList) => {
      return newCustomersList(customersList)
    })
  }

  function searchCustomersByName(customerName: string) {
    if (customerName) {
      const customersFiltredByName = customers.filter((customer) => {
        return customer.name.toLowerCase().includes(customerName.toLowerCase())
      })

      setSearchedCustomers(customersFiltredByName)
    } else {
      const storedCustomers = getStoredCustomers()
      setSearchedCustomers(storedCustomers)
    }
  }

  return (
    <CustomerContext.Provider
      value={{
        customers,
        registerCustomer,
        updateCustomer,
        searchCustomersByName,
        searchedCustomers,
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}
