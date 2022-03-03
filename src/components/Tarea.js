import { Draggable } from "react-beautiful-dnd";


const Tarea = ({ columnas, onBorrarDatos, onMoverTarea, tarea, indexCOlum,...props }) => {//mostrarSiguiente(booleana) para mostrar otro boton
//tarea.title
    return (
      
       <Draggable key={indexCOlum} draggableId={tarea.id.toString()} index={props.indexTarea}>
           {(dp)=>
        <div{...dp.draggableProps} ref={dp.innerRef} {...dp.dragHandleProps} className="App-cuadrado-de-tarea" key={props.key} class="rounded-lg ... m-2 break-words ... bg-slate-300 border-solid  border-2 border-gray-900 max-w-xs ">

            <p class="m-1 font-semibold">{tarea.title.length ? tarea.title : "No title"}</p>

            <p class="m-1">{tarea.description.length ? tarea.description : "No description"}</p>
            
            <button class="m-1 pr-4 border-2 font-semibold border-doublex p-1 bg-white border-gray-500 opacity-75 rounded-lg " onClick={() => onBorrarDatos(tarea, indexCOlum)}>Borrar</button>
           
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