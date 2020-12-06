import { AppState } from './contracts/state'
import { nanoid } from "nanoid"
import { ActionTypes, ADD_LIST, ADD_TASK } from './types'
import { findItemIndexById, overrideItemAtIndex } from '../utils/arrayUtils'


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

export const rootReducer = (state: AppState = initialState, action: ActionTypes) =>{
    if (action.type === ADD_LIST) {
        return {...state, lists:[...state.lists, {id: nanoid(), text:action.payload, tasks: []}]}
    } else if (action.type === ADD_TASK) {
        const listIndex = findItemIndexById(state.lists, action.payload.listId)

        const targetList = state.lists[listIndex]
      
        const updatedTargetList = {
            ...targetList,
            tasks: [
                ...targetList.tasks,
                {id: nanoid(), text: action.payload.text}
            ]
      
        }

        return {...state, lists: overrideItemAtIndex(state.lists, updatedTargetList, listIndex)}
        
    }
    

    return state
}