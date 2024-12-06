import {Button} from './particulas/Button'
import '../../style/buttombox.css'
export const ButtomBox = ({valor1,valor2}) =>{

	return (
		<di className="ButtomBox" >
			<Button type="button" valor={valor1} clas="boton1" />
			<Button type="button" valor={valor2} clas="boton2" />
		</di>
	);
}