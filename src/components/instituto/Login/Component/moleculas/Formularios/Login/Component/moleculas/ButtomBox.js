import {Button} from './Particulas/Button'
import '../../style/buttombox.css'
export const ButtomBox = ({valor1,valor2}) =>{

	return (
		<div className="ButtomBox" >
			<Button type="button" valor={valor1} clas="boton1" />
			<Button type="button" valor={valor2} clas="boton2" />
		</div>
	);
}