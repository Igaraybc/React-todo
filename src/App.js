import './App.css';

import {useState, useEffect} from 'react';
import Form from './components/form/form';
import load from './assets/load.gif';
import List from './components/list/list';

const API = 'http://localhost:5000';

function App() {
  
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async() => {
      setLoading(true)
      const res = await fetch(API+"/todos")
      .then((res) =>  res.json())
      .then((data) => data)
      .catch(err => console.log(err));
      
      setLoading(false);
      setTodos(res);
    }

    loadData();

  }, [])

  async function createTask(title, time){
    const todo ={
      id: Math.random(),
      title,
      time,
      done:false
    };

    await fetch(API+"/todos", {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    })

    setTodos((prevState) => [...prevState, todo])
  }

  const handleDelete = async (id) => {
    await fetch(API+"/todos/"+id, {
      method: 'DELETE'
    })
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  const handleEdit = async (todo) => {
    
    todo.done = !todo.done

    const data = await fetch(API+"/todos/"+todo.id, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    setTodos((prevState) => prevState.map((todo) => (todo.id === data.id ? (todo = data) : todo)))
  }


  if(loading){
    return(<img className='loading-gif' src={load} alt="loading..." width={60} height={60}></img>)
  }

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <h2>Fill out your next task:</h2>
        <Form submit={createTask}/>
      </div>
      <div className="list-todo">
        <h2>Task list</h2>
        <List todos={todos} Delete={handleDelete} Edit={handleEdit}/>
      </div>
    </div>
  );
}

export default App;
