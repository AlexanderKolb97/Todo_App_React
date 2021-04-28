import React, { useContext, useRef, useEffect } from 'react'
import {Context} from '../App'
import '../App.css'

const Form = function() {
    const [todo, setTodo, todos, setTodos, status, setStatus, filteredTodos, setFilteredTodos] = useContext(Context);
    const inputValue = useRef();

    const addTodo = function(event) {
        event.preventDefault();
        setTodo(inputValue.current.value);
        inputValue.current.value = '';
    }

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        if(todo) {
            setTodos([
                ...todos, {inputText: todo, completed: false, id: Math.random(10) * 100}
            ])
        }

    }, [todo])

    useEffect(() => {
        statusHandler()
        saveLocalTodos()

    }, [todos, status])

    const statusHandler = function() {
        switch(status) {
            case "Completed":
                setFilteredTodos(todos.filter(item => item.completed === true))
                break;
            case "Uncompleted":
                setFilteredTodos(todos.filter(item => item.completed === false))
                break;  
            default:
                setFilteredTodos(todos)  
                break;
        }
    }

    const checkStatus = function(e) {
        setStatus(e.target.value);
    }

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            console.log('nichego')
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            console.log('vse')
            let todosLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todosLocal)
        }
    }

	return (
        <>
    	<form>
            <input ref={inputValue} name="todo_input" type="text" placeholder="Type a todo here..."></input>
            <button onClick={addTodo} className="btn_add">+</button>

            <select onChange={checkStatus} size="1" name="todos">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </form>
        
        </>
	);
}

export default Form;
