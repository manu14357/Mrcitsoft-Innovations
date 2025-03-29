import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Change this
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
    <App />
  </HashRouter>
);
