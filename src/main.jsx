// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {BrowseRouter} from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   <BrowseRouter>
//   <App />
//   </BrowseRouter>
    
//   // </StrictMode>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
