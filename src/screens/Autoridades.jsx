import React from 'react';
import AutForm from '../components/registroAut/autForm';

const Autoridades = ({onhandleAddType, onhandleGetAutList}) => {
    return (
        <>
            <AutForm onhandleAddType={onhandleAddType} onhandleGetAutList={onhandleGetAutList}/>
        </>
    );
};

export default Autoridades;