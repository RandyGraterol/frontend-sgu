import './input.css'
export const Input = ({type,placeholderr}) =>{
	return (
		<input className="InputPensum" type={type} placeholder={placeholderr} required/>
	);
}