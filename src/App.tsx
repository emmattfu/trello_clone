import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNewItem from './components/AddNewItem';
import Column from './components/Column';
import { addList } from './redux/actionsCreators';
import { AppState } from './redux/contracts/state';

import {AppContainer} from './styles'

function App() {
  const lists = useSelector((state: AppState) => state.lists)
  const dispatch = useDispatch()

  return (
    <AppContainer>
      {lists.map((column, index) => {
        return (
          <Column key={column.id} text={column.text} index={index} id={column.id}/>
        )
      })}
      
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))}/>
    </AppContainer>
  );
}

export default App;
