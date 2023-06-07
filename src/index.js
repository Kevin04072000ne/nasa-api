import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Photos from './components/Photos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route index path='/' element={<App/>} />
        <Route  path='/:id' element={<Photos/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

