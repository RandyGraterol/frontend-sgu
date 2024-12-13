import {Label} from '../Label/Label'
import {Input} from '../Imput/Input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './inputbox.css'

export const InputBox = ({type,clase,infoLabel})=>{
    return (
        <div className="InputBox">
            <Input type= {type} />
            <Label label={infoLabel} />
            <FontAwesomeIcon icon={clase} />
        </div>
    );
}