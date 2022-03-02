import { Draggable } from "react-beautiful-dnd";


const Tarea = ({ columnas, onBorrarDatos, onMoverTarea, tarea, indexCOlum,...props }) => {//mostrarSiguiente(booleana) para mostrar otro boton
//tarea.title
    return (
      
       <Draggable key={indexCOlum} draggableId={tarea.id.toString()} index={props.indexTarea}>
           {(dp)=>
        <div{...dp.draggableProps} ref={dp.innerRef} {...dp.dragHandleProps} className="App-cuadrado-de-tarea" key={props.key}>

            <p>{tarea.title.length ? tarea.title : "No title"}</p>

            <p>{tarea.description.length ? tarea.description : "No description"}</p>

            <button onClick={() => onBorrarDatos(tarea, indexCOlum)}>Borrar</button>

            
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