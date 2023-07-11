import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Pages';
import { CartContextProvider } from './Context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
);
