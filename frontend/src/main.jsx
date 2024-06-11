import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
  
  <App />

</Router>
  </StrictMode>,
)
