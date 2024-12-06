import '../../style/inputbox.css'
import {Input} from './particulas/Input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const InputBox = ({type,clase,placeholderr})=>{
    return (
        <div className="InputBox">
            <Input type= {type} placeholderr={placeholderr} />
            <FontAwesomeIcon icon={clase} />
        </div>
    );
}