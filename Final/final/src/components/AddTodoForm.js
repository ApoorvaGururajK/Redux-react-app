import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';

const AddTodoForm = ({showForm,enable, currentTodo, toggleForm}) => {
	const [todo, setTodo] = useState(currentTodo);
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (todo) {
			dispatch(
				addTodoAsync({
					title: todo.title
				})
			);
		}
		toggleForm();

	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setTodo(values => ({...values, [name]: value}))
	  }

	return (
		<form onSubmit={onSubmit} className='mt-3 mb-3'>
			<fieldset disabled={!enable}>
			
			<div className="form-group">
				<label className='sr-only'>Title</label>
				<input
					type='text'
					name = 'title'
					className='form-control mb-2 mr-sm-2'
					placeholder='Add Title...'
					value={todo.title}
					required
					// onChange={(event) => setTodo(event.target.value)}
					onChange={handleChange}
				></input>
			</div>
			
			<div className="form-group">
				<label className='sr-only'>Description</label>
				<textarea
					type='text'
					name = 'description'
					className='form-control mb-2 mr-sm-2'
					placeholder='Add Description...'
					value={todo.description}
					required
					// onChange={(event) => setTodo(event.target.value)}
					onChange={handleChange}
				></textarea>
			</div>
			
			<div className="form-group">
				<label className='sr-only'>Date</label>
				<input
					type='date'
					name = 'date'
					className='form-control mb-2 mr-sm-2'
					placeholder='Add Date...'
					value={todo.date}
					min = "2022-11-18"
					required
					// onChange={(event) => setTodo(event.target.value)}
					onChange={handleChange}
				></input>
			</div>
			
			<div className="form-group">
				<label className='sr-only'>Time</label>
				<input
					type='time'
					name = 'time'
					className='form-control mb-2 mr-sm-2'
					// placeholder='Add Date...'
					value={todo.time}
					required
					// onChange={(event) => setTodo(event.target.value)}
					onChange={handleChange}
				></input>
			</div>
			
			<div className="form-group">
				<button type='submit' className='btn btn-primary mb-2'>
					Submit
				</button>
			</div>
			{  showForm && <button className='btn btn-danger'>
					Delete
				</button>}
			</fieldset>
		</form>
	);
};

export default AddTodoForm;
