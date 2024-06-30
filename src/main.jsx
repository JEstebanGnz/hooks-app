import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/styles.css'
import { HooksApp } from './HooksApp.jsx'
import { CounterWithCustomHooks } from './CounterWithCustomHooks.jsx'
import { SimpleFormUseEffect } from './SimpleFormUseEffect.jsx'
import { TodoApp } from './TodoApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RootComponent } from './components/RootComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
<BrowserRouter> 
    <RootComponent/>
</BrowserRouter>
  // </React.StrictMode>,  
)
