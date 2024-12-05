//importamos la biblioteca de react
import React from 'react';
//importamos los modulos de react-router-dom
import {Routes,Route} from 'react-router-dom';
//importamos los componentes a renderizar
import Home from '../screens/Home.jsx';
import ControlAcceso from '../screens/controlA.jsx';
import Precios from '../screens/Precios.jsx';
import Salir from '../screens/Salir.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const AppRoutes = ()=>{
	return(
		<>
         <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/controlAcceso' element={<ControlAcceso icono={faEllipsisH} name='Control de Acceso' info=''/>} />
         <Route path='/precios' element={<Precios/>} />
         <Route path='/salir' element={<Salir/>} />
         </Routes>
        </>
		)
}
export default AppRoutes;