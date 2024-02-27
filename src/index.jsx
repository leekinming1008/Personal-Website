import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MessageProvider } from './contexts/MessageContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MessageProvider>
        <App />
      </MessageProvider>
    </Router>
  </React.StrictMode>,
);
