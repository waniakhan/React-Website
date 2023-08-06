import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,} from "react-router-dom";
import './App.css'
import CartContextProvider from './Users/context/addtoCart/context.jsx';
import ContextProvider from './context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
<BrowserRouter>
  <React.StrictMode>
   <ContextProvider>
   <App />
   </ContextProvider>
  </React.StrictMode>
  </BrowserRouter>
  </CartContextProvider>,
)
