import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Label } from '../Label/Label';
import './inputcarrera.css'

export const InputCarreras = ({onBotton,clase,fort})=>{
    return (
        <div className={fort}>
            <Label label="Caja de Carreras" />
            <FontAwesomeIcon onClick={onBotton} className='bottona' icon={clase} />
        </div>
    );
}

