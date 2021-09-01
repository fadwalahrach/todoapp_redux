import {useSelector, useDispatch} from 'react-redux';
import { visibilityFilter } from '../redux/actions';
import Task from './Task';

const ListTask = () => {
  const todos = useSelector(state => state.todoReducer.todos)
  const filterTodo = useSelector((state) => state.filterReducer.filterTodo) 
  const dispatch = useDispatch() 

  const visibilityTodo = (arr,n) => {
    switch(n){
      case 'done': return todos.filter(item => item.isDone);
      case 'undone': return todos.filter(item => !item.isDone);
      default: return todos; 
    }
  }

  const visibleTodos = visibilityTodo(todos,filterTodo)
  return(
    <>
    <div>
      <select onChange={(e)=>dispatch(visibilityFilter(e.target.value))}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>
    </div>
  <br/>
  <ul className='list-group'>
			{visibleTodos.map((todo) => (
				<Task id={todo.id} description={todo.description} completed={todo.isDone} />
			))}
		</ul>
  </>
    );
  }
  
  export default ListTask;