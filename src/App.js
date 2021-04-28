import React, {useState} from 'react'
import Form from './components/Form'
import List from './components/List'

export const Context = React.createContext();

const App = function() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('');
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [fadeClass, setFadeClass] = useState(false);

	return (
		<Context.Provider value={[todo, setTodo, todos, setTodos, status, setStatus, filteredTodos, setFilteredTodos, fadeClass, setFadeClass]}>
			<div className="app">
				<h1 className="header">Todo List</h1>
				<Form />
				<List />
			</div>
		</Context.Provider>
	);
}

export default App;
