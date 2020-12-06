import { ADD_LIST, ADD_TASK } from "./types"


export const addList = (text: string) => {
  return {type: ADD_LIST, payload: text}
}

export const addTask = (text:string, id: string) => {
    return {type: ADD_TASK, payload: {text, listId: id}}
}