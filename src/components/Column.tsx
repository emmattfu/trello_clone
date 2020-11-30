import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/contracts/state";
import { ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";
import Card from "./Card";

interface ColumnProps {
  text: string
  index: number
}
  

const Column: React.FC<ColumnProps> = ({text, index}: ColumnProps) => {
  const lists = useSelector((state: AppState) => state.lists)

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {lists[index].tasks.map(task => <Card key={task.id} text={task.text}/>)}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
