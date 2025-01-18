import {Button} from '../Buttom/Button'
import './buttombox.css'
export const ButtomBox = ({valor1,valor2}) =>{

	return (
		<div className="ButtomBox" >
			<Button type="button" valor={valor1} clas="botonAreas1 botonAreas" />
			<Button type="button" valor={valor2} clas="botonAreas2 botonAreas" />
		</div>
	);
}