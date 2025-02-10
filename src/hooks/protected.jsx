// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const token = localStorage.getItem('access_token'); // Verifica si el token existe

    // Si el token existe, renderiza el componente; de lo contrario, redirige a /login
    return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;