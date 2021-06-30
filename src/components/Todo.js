/*
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos}) => {
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((e, _id) => (
    <div
     
      key={_id}
    >
      <div key={todo.setTodos} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(e)}
          className='delete-icon'
        />
       //hier einfügen
         
      </div>
    </div>
  ));
};

export default Todo;
*/