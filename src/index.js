import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProvider from './provider/AppProvider';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

if(process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App/>} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);