import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,} from "react-router-dom";
import './App.css'
import CartContextProvider from './context/addtoCart/context.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
     <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </CartContextProvider>,
)
