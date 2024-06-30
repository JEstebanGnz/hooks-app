import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TodoApp } from '../TodoApp'
import { About } from './About'
import { User } from './User'
import { UserContext } from '../Context/UserContext'
import { UserProvider } from '../Context/UserProvider'

export const RootComponent = () => {
  return (
<>
<UserProvider> 

    <h2> Welcome! </h2>
    <hr/>

    <Routes>

      <Route path='/' element={<TodoApp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user' element={<User/>}/>

    </Routes>
</UserProvider>
</>  
  )
}
