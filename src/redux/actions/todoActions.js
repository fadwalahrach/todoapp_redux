import * as actions from '../constants/index'

export function addTodo(data){
    return{ 
        type: actions.ADDTODO,
        data
    }
}

export function isDone(id){
    return{
        type: actions.ISDONE,
        id
    }
}

export function editTodo(id, description){
    return{
        type: actions.EDITTODO,
        id,
        description
    }
}