import { combineReducers } from "redux";
import  filterReducer  from "./filtreReducer";
import  todoReducer  from "./todoReducer";

export const allReducers = combineReducers({
    filterReducer: filterReducer,
    todoReducer: todoReducer
})