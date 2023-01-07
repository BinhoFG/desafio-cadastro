import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import { UserPlus, PencilLine, CaretDown } from 'phosphor-react'
import { CustomerModal } from '../components/CustomerModal'
import { SelectModal } from '../components/SelectModal'

import {
  CustomerTable,
  HomeContainer,
  Pagination,
  SearchActions,
  SearchBar,
  SearchSection,
  SelectTrigger,
} from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <SearchSection>
        <SearchBar>
          <input placeholder="Pesquise por nome..." />
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

        <SearchActions>
          <div className="filter">
            <span>Filtrar</span>
            <Select.Root>
              <SelectTrigger aria-label="status">
                <Select.Value placeholder="STATUS" />
                <Select.Icon>
                  <CaretDown size={16} />
                </Select.Icon>
              </SelectTrigger>
              <SelectModal options={['Ativo', 'Inativo']} />
            </Select.Root>
            <Select.Root>
              <SelectTrigger aria-label="gender">
                <Select.Value placeholder="SEXO" />
                <Select.Icon>
                  <CaretDown size={16} />
                </Select.Icon>
              </SelectTrigger>
              <SelectModal options={['Masc', 'Fem']} />
            </Select.Root>
          </div>

          <div className="sort">
            <span>Ordenar</span>
            <Select.Root>
              <SelectTrigger aria-label="registrationDate">
                <Select.Value placeholder="DATA DE CADASTRO" />
                <Select.Icon>
                  <CaretDown size={16} />
                </Select.Icon>
              </SelectTrigger>
              <SelectModal options={['Mais Recente', 'Mais Antigo']} />
            </Select.Root>
          </div>
        </SearchActions>
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
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra do Pardal, 32 - Bela Vista, Poa - RS">
              Avenida José Dutra do Pardal, 32 - Bela Vista, Poa - RS
            </td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
          <tr>
            <td>Eduardo Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra, 32">Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <td>
                  <PencilLine size={32} />
                </td>
              </Dialog.Trigger>
              <CustomerModal type="edit" />
            </Dialog.Root>
          </tr>
        </tbody>
      </CustomerTable>

      <Pagination>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Pagination>
    </HomeContainer>
  )
}
