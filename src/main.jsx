import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/styles.css'
import { HooksApp } from './HooksApp.jsx'
import { CounterWithCustomHooks } from './CounterWithCustomHooks.jsx'
import { SimpleFormUseEffect } from './SimpleFormUseEffect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleFormUseEffect/>
  </React.StrictMode>,  
)
