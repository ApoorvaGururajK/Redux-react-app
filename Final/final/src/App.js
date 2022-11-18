import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	const [showForm, setVisible] = useState(false);

	const toggleForm = () => {
		setVisible(showForm => (!showForm))
	}

	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<TodoList/>
			<button onClick = {toggleForm}>Add Todo item</button>
			{showForm && <AddTodoForm enable = {true} currentTodo = {{}} toggleForm = {toggleForm.bind(this)}/>}
			<TotalCompleteItems />
		</div>
	);
};

export default App;
