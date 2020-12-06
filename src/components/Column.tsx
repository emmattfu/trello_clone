import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/actionsCreators";
import { AppState } from "../redux/contracts/state";
import { ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";
import Card from "./Card";

interface ColumnProps {
  text: string
  index: number,
  id: string
}
  

const Column: React.FC<ColumnProps> = ({text, index, id}: ColumnProps) => {
  const lists = useSelector((state: AppState) => state.lists)
  const dispatch = useDispatch()

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {lists[index].tasks.map(task => <Card key={task.id} text={task.text}/>)}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
