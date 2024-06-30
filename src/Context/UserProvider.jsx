import React from 'react'
import { UserContext } from './UserContext'


const user ={
    name:'Esteban',
    email:'jest.gmor@gmail.com',
    number: 3114427533
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value= {{user:user}}>
        {children}
    </UserContext.Provider>
  )
}
