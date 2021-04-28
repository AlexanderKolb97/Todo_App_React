import React, { useContext } from 'react'
import Todo from './Todo'
import {Context} from '../App'
import '../App.css'

const List = function() {
	const [todo, setTodo, todos, setTodos, status, setStatus, filteredTodos, setFilteredTodos] = useContext(Context);

	return (
    	<ul className="todos">
			{filteredTodos.map((item, index) => {
				return (
					<Todo key={index} item={item} id={item.id}/>
				)
			})}
		</ul>
	);
}

export default List;
