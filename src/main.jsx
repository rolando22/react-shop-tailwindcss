import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Pages';
import { CartContextProvider } from './Context';
import { UserContextProvider } from './Context/User';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
