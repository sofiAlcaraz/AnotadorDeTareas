import { Draggable } from "react-beautiful-dnd";


const Tarea = ({ columnas, onBorrarDatos, onMoverTarea, tarea, inde,...props }) => {//mostrarSiguiente(booleana) para mostrar otro boton
//tarea.title
    return (
      
       <Draggable key={inde} draggableId={tarea.id.toString()} index={props.i}>
           {(dp)=>
        <div{...dp.draggableProps} ref={dp.innerRef} {...dp.dragHandleProps} className="App-cuadrado-de-tarea" key={props.key}>

            <p>{tarea.title.length ? tarea.title : "No title"}</p>

            <p>{tarea.description.length ? tarea.description : "No description"}</p>

            <button onClick={() => onBorrarDatos(tarea, inde)}>Borrar</button>

            {inde === (columnas.length) - 1 ? "" :
                <button onClick={() => onMoverTarea(tarea, inde)}>Siguiente</button>}

        </div>
        }   
         
        </Draggable>
       
    );
}


export default Tarea;