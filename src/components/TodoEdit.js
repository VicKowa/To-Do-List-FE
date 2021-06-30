/*
import React, { useState, useEffect } from 'react';
import APIHelper from '../APIHelper';


export default function TodoEdit() {
    
    const [todos, setTodos] = useState([])
    const  [todo, setTodo] = useState("")

    useEffect(() => {
        const fetchTodoAndSetTodos = async () => {
          const todos = await APIHelper.getAllTodos()
          setTodos(todos)
        }
        fetchTodoAndSetTodos()
      }, [])
    const updateTodo = async (e, id) => {
        e.stopPropagation()
        const payload = {
          completed: !todos.find(todo => todo._id === id).completed,
        }
        const updatedTodo = await APIHelper.updateTodo(id, payload)
        setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)))
      }
    return (
        <div>
             <input 

                id="todo-edit"
                type="text"
                value={todo}
                onChange={({ target }) => updateTodo(target.value)}
            />
            <button type="button" onClick={updateTodo()}>
            Update todo
            </button>
        </div>
    )
}
*/