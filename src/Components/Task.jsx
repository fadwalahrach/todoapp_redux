import { editTodo, isDone } from "../redux/actions/index";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import './Task.css';

const Task = ({ id, description, completed }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleUpdateClick = () => { 
      setToggle(prevState => !prevState )
  }

	const handleCheckboxClick = () => {
		dispatch(isDone(id));
	};

  const handleEditClick = (e) => {
		e.preventDefault();
    dispatch(editTodo(id, e.target.editing.value));
    handleUpdateClick()
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='taskDiv'>
				<span className='taskSpan'>
					<input type='checkbox' className='mr-3' checked={completed}
						onClick={handleCheckboxClick}
					></input>
					{description}
				</span>
				<button onClick={handleUpdateClick} className='btn btn-danger'>Update</button>
			</div>
<form className={toggle ? '':'hide'} onSubmit={(e) => handleEditClick(e)}>
      <input type="text" name='editing'/>
      <button>Edit</button>
</form>

</li>
);
};
  
export default Task;