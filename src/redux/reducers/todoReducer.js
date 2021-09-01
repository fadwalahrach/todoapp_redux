import * as actions from '../constants/index'

const initialState = {
    todos:[{
        id:1,
        description:'Breakfast',
        isDone:true
    }]
}

function todoReducer(state = initialState,action) {
    if(action.type === actions.ADDTODO ){
        return {
            todos: [...state.todos, {
                id:Math.random(),
                description: action.data,
                isDone:false
            }]
        }
    }

    if(action.type === actions.ISDONE){
        const mappedList = state.todos.map((item) => item.id === action.id ? {...item, isDone:!item.isDone} : item );
        return {
            todos: mappedList
        }
    }

    if(action.type === actions.EDITTODO){
        const mappedList = state.todos.map((item) => item.id === action.id ? {...item, description:action.description} : item );
        return {
            todos: mappedList
        }
    }
    return state
}
export default todoReducer;