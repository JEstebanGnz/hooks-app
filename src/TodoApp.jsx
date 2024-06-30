import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './helpers/todoReducer'
import { TodoList } from './components/TodoList'
import { AddTodoForm } from './components/AddTodoForm'
import { useTodos } from './hooks/useTodos'


export const TodoApp = () => {  
   
    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, pendingTodosCount, todosCount} = useTodos();

    return (
        <>
        <h2> Gestor de tareas: </h2>
        <h3> Total: {todosCount} ----- Pendientes: {pendingTodosCount}</h3>
        <TodoList todos={todos} 
        onDeleteTodo = {(id) => handleDeleteTodo (id)}
        onToggleTodo = {(id) => handleToggleTodo (id)}> </TodoList>
        <AddTodoForm onNewTodo = { (todo) => handleNewTodo (todo)}> </AddTodoForm>
        </>
    )
}
