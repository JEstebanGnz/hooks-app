import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../helpers/todoReducer'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add TODO',
            payload: todo
        }
        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Delete TODO',
            payload: id
        }
        dispatchTodo(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle TODO',
            payload: id
        }
        dispatchTodo(action);
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount: todos.filter(todo => todo.done === false).length,
        todosCount: todos.length
    }
}
