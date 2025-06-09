import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { SearchProvider } from "./context/SearchContext";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </HashRouter>
  </StrictMode>
);