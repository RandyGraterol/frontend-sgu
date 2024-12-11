import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Input} from '../Imput/Input'
import './inputbox.css'
export const InputBox = ({type,clase,placeholderr})=>{
    return (
        <div className="InputBox">
            <Input type= {type} placeholderr={placeholderr} />
            <FontAwesomeIcon icon={clase} />

        </div>
    );
}