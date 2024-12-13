import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './router/routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='principal'>
    <BrowserRouter>
     <Routes />
    </BrowserRouter>
    </div>
  </StrictMode>
)
