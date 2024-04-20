import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/userContext.jsx'
import { CarritoContextProvider } from './contexts/carritoContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <CarritoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarritoContextProvider>
  </UserContextProvider>,

)