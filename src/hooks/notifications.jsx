import React, { useState } from 'react';
import Modal from 'react-modal';
import './stylesNotification.css'; // Importa el archivo CSS
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

export const useNotificationModal = () => {
  let iconSrc;
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [statusValue,setStatusValue]=useState('');

  const openModal = (message,status) => {
    setModalMessage(message);
    setModalIsOpen(true);
    setStatusValue(status);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage('');
    if(modalMessage.includes('exitoso')){
      navigate('/home');
    }
  };
  
  if(statusValue == 'aprobado'){
  iconSrc='./check.png';
  }else if(statusValue == 'error'){
   iconSrc='./cross.png';
  }else{
   iconSrc='./bell.png'; 
  }

  const NotificationModal = () => (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Notification Modal"
      className="modalContent" // Aplica la clase CSS
      overlayClassName="modalOverlay" // Aplica la clase CSS
    >
      <img src={iconSrc} className='iconoNotifications' />
      <p className='messageModal'>{modalMessage}</p>
      <button className={`buttonCerrar ${statusValue === 'aprobado' ? 'blue' : 'red'}`} onClick={closeModal}>Cerrar</button>
      
    </Modal>
  );

  return { openModal, NotificationModal };
};
