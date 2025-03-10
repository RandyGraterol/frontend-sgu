// helpers/studentHelper.js
import axios from 'axios';

 const fetchStudentData = async (token) => {
  const query = `query MyQuery {
    usuario {
      userId
      numIdentificacion
      username
      parroquia
      direccion
      genero
      fechaNacimiento
      etnia
      primerNombre
      primerApellido
      segundoNombre
      segundoApellido
      telf
      email
      tipodoc
    }
  }`;

  try {
    const response = await axios.post(`https://sgu.casacam.net/graphql`, {
      query,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Devuelve los datos del estudiante
  } catch (error) {
    console.error('Error al obtener los datos del estudiante:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};

export default fetchStudentData;