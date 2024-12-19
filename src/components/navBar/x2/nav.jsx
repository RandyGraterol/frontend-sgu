import React from 'react';
import './navStyle.css';
import { Link } from 'react-router-dom';

const Nav = () =>{
return(
	<>
	
	<nav className='menu'>
    <div className='containerLogo'>
	<img src='./icon/logo.png' className='logo' />
    </div>

     <ul className='listaDesordenada'>
     	<li>
     	   <Link className='enlace' to='/superAdmin'>SuperAdmin</Link>
     	</li>
     	<li>
     	  <Link className='enlace' to='/admin'>Admin</Link>
     	</li>
     	<li>
     	  <Link className='enlace' to='/operador'>Operador</Link>
     	</li>
     	<li>
     	 <Link className='enlace' to='/estudiante'>Estudiante</Link>
     	</li>
     	<li>
     	 <Link className='enlace' to='/pensum'>Pensum</Link>
     	</li>
     	<li>
     	 <Link className='enlace' to='/ofertaA'>Ofreta A</Link>
     	</li>
     </ul>


	</nav>
	</>
	)
}
export default Nav;