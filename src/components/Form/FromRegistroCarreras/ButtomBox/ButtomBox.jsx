import {Button} from '../Buttom/Buttom'
import './buttombox.css'
export const ButtomBox = ({valor1,valor2}) =>{

	return (
		<div className="ButtomBox" >
			<Button type="button" valor={valor1} clas="botonCarreras botonCarreras1 " />
			<Button type="button" valor={valor2} clas="botonCarreras botonCarreras2" />
		</div>
	);
}