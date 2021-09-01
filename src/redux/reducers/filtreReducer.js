import { FILTERTODO } from "../constants/index"

const initialState = { 
   filterTodo: 'all'
}

function filtreReducer(state = initialState, action) {
    if (action.type === FILTERTODO){
        return {
            filterTodo: action.data
        }
    }
    return state
}

export default filtreReducer;