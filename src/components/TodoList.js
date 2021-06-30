

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import APIHelper from '../APIHelper';




function TodoList(props) {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  
   
  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos()
      setTodos(todos)
    }
    fetchTodoAndSetTodos()
  }, [])

  const addTodo = async e => {
    e.preventDefault()
    if (!todo) {
      alert("please enter something")
      return
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`)
      return
    }
    const newTodo = await APIHelper.createTodo(todo)
    setTodos([...todos, newTodo])
  }

  const updateTodo = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !todos.find(todo => todo._id === id).completed,
    }
    const updatedTodo = await APIHelper.updateTodo(id, payload)
    setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)))
  }

  const removeTodo = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteTodo(id)
      setTodos(todos.filter(({ _id: i }) => id !== i))
    } catch (err) {}
  }
 
   
 /* const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }; */


     
      return (
        <>
         
          {props.edit ? (
        <>
        <div>
            <input 

             id="todo-edit"
            type="text"
            value={todo}
            onChange={({ target }) => setTodo(target.value)}
        />
            <button type="button" onClick={addTodo}>
             Update todo
            </button>
        </div>
        </>
      ) : (
        <>
          <div >
            
            <input  classname='todoiputzeile'

             id="todo-input"
             type="text"
             value={todo}
             onChange={({ target }) => setTodo(target.value)}
           />
          
               
                  <button  type="button" onClick={addTodo}>
                      Add todo
                </button>
          
          </div>
        </>
      )}
          
          <div classname = 'todo-row'>
          
          {todos.length ? todos.map(({ _id, task, edit, completed }, i) => (
          <h3>
          <div
            key={i}
            onClick={e => updateTodo(e, _id)}
            className={completed ? "completed" : ""} 
          >
           
            <div>
            {task} <span onClick={e => removeTodo(e, _id)}><RiCloseCircleLine className='delete-icon'/></span>
            {edit} <span onClick={e => updateTodo(e, _id), edit = true}><TiEdit className='edit-icon'/></span>
            
           </div>
           
          </div>
          </h3 >
        )):<p>No Todos Yet :(</p>}
      </div>

        </>
      );
    }

export default TodoList 

//<TodoForm Click={addTodo} />
/*<Todo
            todos={todos}
            //completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
           */