import { FiPlus} from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" $isactive/></li>
        <li><ButtonText title="Frontend"/></li>
        <li><ButtonText title="Node"/></li>
        <li><ButtonText title="React"/></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: 'React',
            tags: [
              {id: '1', name: 'React'},
              {id: '2', name: 'RocketSeat'},
            ]
          }}/>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Adicionar Nota
      </NewNote>
    </Container>
  )
}