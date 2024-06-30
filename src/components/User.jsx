import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

export const User = () => {


  const {user} = useContext(UserContext);


  return (

    <pre>
    <div>{JSON.stringify(user, null, 3)}</div>
    </pre>


  )
}
