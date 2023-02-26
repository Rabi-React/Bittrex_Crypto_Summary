import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoinContext from './ContextFolder/CoinContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoinContext>
      <App />
    </CoinContext>
    
  </React.StrictMode>
);