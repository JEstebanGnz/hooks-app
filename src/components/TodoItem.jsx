import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo}) => {
    return (
        <li>
            <span onDoubleClick={() => onToggleTodo (todo.id)} style={{'textDecoration': `${todo.done ? 'line-through' : ''}`}}> {todo.description} </span>
            <button onClick={() => onDeleteTodo (todo.id)}> Borrar </button>
        </li>
    )
}
