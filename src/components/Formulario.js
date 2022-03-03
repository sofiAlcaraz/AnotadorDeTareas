import {getRandom} from './../utils';
import Button from './Button';


//import {v4 as uuidv4} from "uuid";

//js :const(no se puede "reasignar" si operar con la variable/lista/objeto)
//     let puedo reasignar
//(evitar)var en js significa que tieene alcance glob
//deconstruyo props, en ...props queda el resto
const Formulario = ({ onNuevaTarea }) => {//props(llamo props.cosa) o {cosa,...props} o {cosa}

    const nuevaTarea = (event) => {
        event.preventDefault();

        const newOb = {
            title: event.target.titulo.value,
            id:getRandom(1, 40000),//uuidv4()
            description: event.target.descripcion.value,
            disable: "false"
        };
        onNuevaTarea(newOb);//en el largo-1
    }
    return (
        <div  className="bg-zinc-400 p-4 max-h-48 border-solid border-stone-500 rounded-lg" >
            <form onSubmit={nuevaTarea}>
                <label htmlFor="inputTitulo" className='App-form-label'>Agregar Tarea</label>
                <input type="text" className='form-control' name="titulo"></input>

                <label htmlFor="inputDescripcion" className='App-form-label'>Descripcion</label>
                <input type="text" className='form-control' name="descripcion"></input>
                
                <Button>Agregar</Button>
            </form>
        </div>
    );
}
//<Button>Agregar</Button> --> agregar es el children
export default Formulario;
