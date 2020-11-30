import { Action } from './actionsCreators'
import { AppState } from './contracts/state'
import { nanoid } from "nanoid"


const initialState: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
    
} 

export const rootReducer = (state: AppState = initialState, action: Action) =>{
    if (action.type === "ADD_LIST") {
        return {...state, lists:[...state.lists, {id: nanoid(), text:action.payload, tasks: []}]}
    }

    return state
}