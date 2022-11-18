import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';
import AddTodoForm from './AddTodoForm';

const TodoItem = ({ id, payload, completed }) => {
	console.log(payload, "Payload is");
	const dispatch = useDispatch();
	const [showForm, setVisible] = useState(false);

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	const toggleForm = () => {
		setVisible(showForm => (!showForm))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`} onClick = {toggleForm}> 
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						name = 'title'
						className='mr-3'
						checked={completed}
						onClick={handleCheckboxClick}
					/>
					{payload.title}
				</span>
				{showForm && <AddTodoForm showForm={showForm} enable = {false} currentTodo = {payload} toggleForm = {toggleForm.bind(this)}/>}
				
			</div>
		</li>
	);
};

export default TodoItem;
