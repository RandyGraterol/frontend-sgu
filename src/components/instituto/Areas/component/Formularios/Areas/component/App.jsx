import {Form} from './Form'
import {TablaCarrerasAgg} from './moleculas/TablaCarrerasAgg'
import {useState} from 'react'
export const App = () =>{
    const [boton, setBoton] = useState(false)
    function botton(){
        setBoton(prev => !boton)

        return boton;
    }    
    return (
        <>
            <Form onBotton={botton}  action="#" method="POST" />
            <TablaCarrerasAgg onBotton={botton} boton={boton} />
        </>
    );
}