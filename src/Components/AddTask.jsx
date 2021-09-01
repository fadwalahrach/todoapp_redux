import { addTodo } from "../redux/actions/index";
import {useDispatch} from 'react-redux'

const AddTask = () => {
    const dispatch = useDispatch()

    const handleSubmit= (e) =>{
      e.preventDefault();
      dispatch(addTodo(e.target.description.value));
    }
    
    return(
  <form onSubmit={(e)=>handleSubmit(e)}>
    <input type="text" name="description"	placeholder='Add todo...'/>
    <button className='btn btn-primary mb-2'>Submit</button>
  </form>
    );
  }
  
  export default AddTask;