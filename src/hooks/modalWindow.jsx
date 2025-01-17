import React, { useState } from 'react';
import Modal from 'react-modal';

import styles from './styles/modalWindow.module.css';

//iconos awesome font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

export const useModal = () => {
 
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent,setModalContent] = useState(null);
  

  const openModal = (isOpen,content) => {
    if(!modalIsOpen){
    setModalIsOpen(isOpen);
    setModalContent(content);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };
  const closeWindowIcon = ()=>{
    setModalIsOpen(!modalIsOpen);
  }
 

  const VentanaModal = () => (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Notification Modal"
      className="modalContent" // Aplica la clase CSS
      overlayClassName="modalOverlay" // Aplica la clase CSS
       style={{
                overlay:{
                    backgroundColor: 'red', // Color de fondo oscuro con opacidad
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff', // Color de fondo del modal
                    borderRadius: '10px',
                    padding:'2rem',
                },
            }}
    >
    <div className={styles.containerClose}>
      <FontAwesomeIcon onClick={closeWindowIcon} className={styles.iconClose} icon={faWindowClose }/>
    </div>
     {modalContent}
    </Modal>
  );
  
  return {openModal, VentanaModal};
};
