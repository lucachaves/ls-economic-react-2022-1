import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { UserAuthContextProvider } from './contexts/UserAuthContext';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserAuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserAuthContextProvider>
  </BrowserRouter>
);
