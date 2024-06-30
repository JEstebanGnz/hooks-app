import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const AddTodoForm = ({ onNewTodo }) => {


    const { description, handleInputValueChange, form, resetForm } = useForm({
        id: new Date().getTime() * 2,
        description: "",
        done: false
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        onNewTodo(form);  
        resetForm();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type='text'
                name='description'
                placeholder='¿Qué vas a hacer hoy?'
                onChange={handleInputValueChange}
                value={description} />
            

            <button type='submit'>
                Agregarrr
            </button>

        </form>
    )
}
