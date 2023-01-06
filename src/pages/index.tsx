import {
  CustomerTable,
  HomeContainer,
  Pagination,
  SearchActions,
  SearchBar,
  SearchSection,
} from '../styles/pages/home'
import { UserPlus, PencilLine } from 'phosphor-react'

export default function Home() {
  return (
    <HomeContainer>
      <SearchSection>
        <SearchBar>
          <input placeholder="Pesquise por nome..." />
          <button>
            Cadastrar
            <UserPlus size={24} weight="bold" />
          </button>
        </SearchBar>
        <SearchActions>
          <div className="filter">
            <span>Filtrar</span>
            <div className="options">
              <button>STATUS</button>
              <button>SEXO</button>
            </div>
          </div>
          <div className="sort">
            <span>Ordenar</span>
            <div className="options">
              <button>MAIS RECENTE</button>
            </div>
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
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td title="Avenida José Dutra do Pardal, 32 - Bela Vista, Poa - RS">
              Avenida José Dutra do Pardal, 32 - Bela Vista, Poa - RS
            </td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
          </tr>
          <tr>
            <td>Calos Barbosa</td>
            <td>25/07/2001</td>
            <td>945.882.398-32</td>
            <td>Masculino</td>
            <td>Avenida José Dutra, 32</td>
            <td>Ativo</td>
            <td>
              <PencilLine size={32} />
            </td>
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
