import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item'
import { ListItem } from './components/ListItem/index'

const App = () => {

  const [list, setList] = useState<Item[]>([

    { id: 1, name: 'Comprar Pão', done: false },
    { id: 2, name: 'Comprar bolo na doceria', done: false},

  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index) =>(
          <ListItem/>
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App