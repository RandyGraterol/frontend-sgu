import './input.css'
export const Input = ({type,placeholderr}) =>{
	return (
		<input className="InputCarreras" type={type} placeholder={placeholderr} required/>
	);
}