import {Select} from '../Select/Select'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './inputselect.css'

export const InputSelect = ({clase, names,campo}) =>{
    return (
        <div className="InputSelect">
            <Select campo={campo} namess={names} placeholder="Selecione Un campo" />
            <FontAwesomeIcon icon={clase} />
        </div>
        
    );
}