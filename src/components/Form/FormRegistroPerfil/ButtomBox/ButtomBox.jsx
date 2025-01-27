import {Button} from '../Button/Button'
import './buttombox.css'
export const ButtomBox = ({valor1,valor2}) =>{

	return (
		<div className="ButtomBox" >
			<Button type="button" valor={valor1} clas="botonInstituto botonInstituto1" />
			<Button type="button" valor={valor2} clas="botonInstituto botonInstituto2" />
		</div>
	);
}