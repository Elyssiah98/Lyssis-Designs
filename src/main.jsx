// Buffer polyfill for gray-matter in browser
import { Buffer } from 'buffer';
window.Buffer = Buffer;

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { SearchProvider } from "./Pages/Header/HeaderComponents/SearchContext";

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