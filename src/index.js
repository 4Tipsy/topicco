import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import './common-styles.css'
import './font-kit.css'




window.SERVER_ADDRESS = 'http://localhost:3060' // used in fetch requests (change to site's domen in production [with no "/" at the end])








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);