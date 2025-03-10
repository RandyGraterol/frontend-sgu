// hooks/useAuthToken.js
import { useEffect, useState } from 'react';

const useAuthToken = () => {
  const [token, setToken] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    
    const handleToken = () => {
      const accessToken = localStorage.getItem('access_token');
      setToken(accessToken);
    };

    // Llama a la función para establecer el token inicial
    handleToken();

    // Escuchar el evento personalizado
    window.addEventListener('storageChange', handleToken);

    // Limpieza del listener al desmontar
    return () => {
      window.removeEventListener('storageChange', handleToken);
    };
  }, []); // Solo se ejecuta al montar

  return token; // Devuelve el token
};

export default useAuthToken;