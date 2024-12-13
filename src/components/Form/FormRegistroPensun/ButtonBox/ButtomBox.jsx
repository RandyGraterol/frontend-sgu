import {Button} from '../Button/Button'
import './buttombox.css'
export const ButtomBox = ({valor1,valor2}) =>{

	return (
		<div className="ButtomBox" >
			<Button type="button" valor={valor1} clas="botonPensum botonPensum1" />
			<Button type="button" valor={valor2} clas="botonPensum botonPensum2" />
		</div>
	);
}