import { Draggable } from 'react-beautiful-dnd';
import Fab from '@mui/material';
import Button from './Button';

const Tarea = ({ columnas, onBorrarDatos, onMoverTarea, tarea, indexCOlum, ...props }) => {//mostrarSiguiente(booleana) para mostrar otro boton
    //tarea.title
    return (

        <Draggable key={indexCOlum} draggableId={tarea.id.toString()} index={props.indexTarea}>
            {(dp) =>
                <div{...dp.draggableProps} ref={dp.innerRef} {...dp.dragHandleProps} key={props.key} className="rounded-lg ... m-2 break-words ... bg-slate-300 border-solid  border-2 border-gray-900 max-w-xs ">

                    <p className="m-1 font-semibold">{tarea.title.length ? tarea.title : "No title"}</p>

                    <p className="m-1">{tarea.description.length ? tarea.description : "No description"}</p>

                    <Button onClick={() => onBorrarDatos(tarea, indexCOlum)}>Borrar</Button>

                </div>
            }
        </Draggable>

    );
}
/*
{inde === (columnas.length) - 1 ? "" :
                <button onClick={() => onMoverTarea(tarea, inde)}>Siguiente</button>}

*/

export default Tarea;