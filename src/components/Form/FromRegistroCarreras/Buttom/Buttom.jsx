import './buttom.css'
export const Button = ({type,valor,clas})=>{
	return (
		<button className={clas} type= {type} > {valor} </button>
	);
}