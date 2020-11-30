import React from 'react';
import { useSelector } from 'react-redux';
import AddNewItem from './components/AddNewItem';
import Card from './components/Card';
import Column from './components/Column';
import { AppState } from './redux/contracts/state';

import {AppContainer} from './styles'

function App() {
  const lists = useSelector((state: AppState) => state.lists)

  return (
    <AppContainer>
      {lists.map((column, index) => {
        return (
          <Column key={column.id} text={column.text} index={index} />
        )
      })}
      
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log}/>
    </AppContainer>
  );
}

export default App;
