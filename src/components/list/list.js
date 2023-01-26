import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs';
import './list.css';

function List({todos, Delete, Edit}){

    return(<div className='list-todo-items'>
        {todos.length === 0 && <p>There's no tasks yet.</p>}
        {todos.map((todo) => 
            (<div className='todo-item' key={todo.id}>
                <div>
                    <h3 className={todo.done? 'todo-done' : ''}>{todo.title}</h3>
                    <p className={todo.done? 'todo-time-done' : ''}>Duration: {todo.time}</p>
                </div>
                <div className='actions'>
                    <span onClick={() => Edit(todo)}>
                        {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
                    </span>
                    <BsTrash onClick={() => Delete(todo.id)}/>
                </div>
            </div>))}
    </div>)
}

export default List