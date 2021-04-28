import React, { useContext } from 'react'
import {Context} from '../App'
import '../App.css'

const Todo = function({ item, id }) {
	const [todo, setTodo, todos, setTodos, status, setStatus, filteredTodos, setFilteredTodos, fadeClass, setFadeClass] = useContext(Context);

	const setCompleted = function(e) {
		setTodos(todos.map((item, id) => {
			if(item.id == e.target.id) item.completed = !item.completed;
			return item
		}))
	}

	const addFade = function() {
		console.log('do some stuff')
	}

	const removeTodo = function(e) {
		setTodos(todos.filter((item, id) => item.id != e.target.id))
	}

	return (
    	    <li className="todo">
				<div className={`todo_title ${item.completed ? "todo_completed" : ""}`}>{item.inputText}</div>
				<button id={id} onClick={setCompleted} className="todo_btn_completed">✔️</button>
				<button id={id} onClick={removeTodo} className="todo_btn_trash"></button>
			</li>
	);
}

export default Todo;
