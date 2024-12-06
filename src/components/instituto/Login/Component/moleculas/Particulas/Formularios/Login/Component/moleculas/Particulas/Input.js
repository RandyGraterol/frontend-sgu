import '../../../style/input.css'
export const Input = ({type,placeholderr}) =>{
	return (
		<input type={type} placeholder={placeholderr} required/>
	);
}