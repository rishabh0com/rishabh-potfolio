import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DisplayProvider } from './context/display.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DisplayProvider><App /></DisplayProvider>
)
