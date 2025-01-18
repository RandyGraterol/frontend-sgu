import {Button} from '../Buttom/Button'
import './buttombox.css'
export const ButtomBox = ({valor1,valor2}) =>{

	return (
		<div className="ButtomBox" >
			<Button type="button" valor={valor1} clas="botonLogin1 botonLogin" />
			<Button type="button" valor={valor2} clas="botonlogin2 botonlogin" />
		</div>
	);
}