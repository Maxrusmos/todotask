import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div>
        <span className='number'>{todos.indexOf(todo) + 1}</span>
        <input type="checkbox" onChange={() => completeTodo(todo.id)} key={todo.id}></input>
      </div>
      <div className="todo-text">{todo.text}</div>
      <div>
        <DeleteOutlinedIcon 
        onClick={() => removeTodo(todo.id)}
        className='delete-icon'
      />
    </div>
    </div>
  ));
};

export default Todo;