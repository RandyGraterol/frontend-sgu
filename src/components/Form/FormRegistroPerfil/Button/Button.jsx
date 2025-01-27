import './button.css'
export const Button = ({type,valor,clas})=>{
	return (
		<button className={clas} type= {type} > {valor} </button>
	);
}