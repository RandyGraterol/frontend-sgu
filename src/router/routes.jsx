import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
//IMPORTAR LOGIN
import Login from '../components/login/login.jsx';
//IMPORTAR NOTFOUND
import NotFound from '../components/notFound/notFound.jsx';
//IMPORTAR COMPONENTE PRINCIPAL
import App from '../App.jsx';

import ProtectedRoute from '../hooks/protected.jsx';

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace/>} />
      <Route path='/login' element={<Login />} />
      <Route path="/home" element={<ProtectedRoute element={App} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Rutas;

