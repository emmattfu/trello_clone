export const ADD_LIST = "ADD_LIST"
export const ADD_TASK = "ADD_TASK"

export type Action = |{
    type: 'ADD_LIST'
    payload: string
}
| {
    type: 'ADD_TASK'
    payload: {text: string, listId: string}
}

interface AddListAction {
    type: typeof ADD_LIST
    payload: string
}

interface AddTaskAction {
    type: typeof ADD_TASK
    payload: {text: string, listId: string}
}

export type ActionTypes = AddListAction | AddTaskAction 