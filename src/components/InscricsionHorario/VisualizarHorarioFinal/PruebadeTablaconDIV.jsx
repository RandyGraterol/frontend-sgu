import './pruebadeTablaconDIV.css';
export const PruebadeTablaconDIV = () =>{
	const semanaDia = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
	const horasSemana = [["7:45AM ","8:30AM"],["9:15AM","10:00AM"],["10:45AM","11:305AM"],["12:15PM","1:00PM"],["1:45PM","2:30PM"],["3:15PM","4:00PM"],["4:45PM","5:25PM"]];
	
	
	return (
		<div className="ContenedorHorario">
			<div className="horario-container">
		        <div className="hora">Hora</div>
		        {semanaDia.map((element,index) =>(
			        <div className={`dia ${element} `} key={index} >{element}</div>
		        ))}
		    </div>
			<div className="tbody">
				{horasSemana.map((elemento,indice) =>(
					<div className={`semana`} key={indice}>
						<div className={`hora`}>{elemento[0]} {elemento[1]}</div>
				        {semanaDia.map((element,index) =>(
				        	<div className={`celda ${element} H-${elemento[0]} H-${elemento[1]}`} key={index}></div>
				        ))}
					</div>
				))}
			</div>
		</div>
	);
}