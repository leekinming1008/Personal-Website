import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMessage } from './contexts/MessageContext';
import Layout from './components/Layout';
import Index from './pages/Index';
import './App.css';

function App() {
  const { message, setMessage } = useMessage();

  useEffect(() => {
    let timeoutId;
    if (message) {
      timeoutId = setTimeout(() => {
        setMessage(null);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <Layout>
      {message && (
        <span
          className={`${
            message.error ? 'bg-red-500' : 'bg-green-500'
          } text-primary fixed left-1/2 top-8 z-50 w-fit -translate-x-1/2 p-4`}
        >
          {message.text}
        </span>
      )}
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </Layout>
  );
}

export default App;
