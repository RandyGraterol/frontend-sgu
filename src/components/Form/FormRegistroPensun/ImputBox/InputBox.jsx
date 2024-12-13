import './inputbox.css'
import {Input} from '../Imput/Input'
import {Label} from '../Label/Label'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const InputBox = ({type,clase,infoLabel})=>{
    return (
        <div className="InputBox">
            <Input type= {type} />
            <Label label={infoLabel} />
            <FontAwesomeIcon icon={clase} />
        </div>
    );
}