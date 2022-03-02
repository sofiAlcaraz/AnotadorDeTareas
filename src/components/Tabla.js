
import Tarea from "./Tarea";
import { Droppable } from "react-beautiful-dnd";


//siempre que hago un map le pongo su key

const Tabla = ({ columnas, onBorrarDatos, onMoverTarea, ...props }) => {

    return (
        <div className='App-tabla'>

            {columnas.map((c, index) =>
                <Droppable droppableId={index.toString()} key={index}>
                    {(droppableProvided) => (
                        <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='App-col'>

                            <p className='App-col-titulo'>{c.title}</p>

                            {c.tasks.length ? "" : "No tasks"}

                            {c.tasks.map((tarea, index2) =>
                                <Tarea key={tarea.id} columnas={columnas} tarea={tarea} indexTarea={index2} inde={index} onBorrarDatos={onBorrarDatos}
                                    onMoverTarea={onMoverTarea} />
                            )}
                            {droppableProvided.placeholder}
                        </div>
                    )}
                </Droppable>
            )}
        </div>
    );
}
export default Tabla;
//ctrl+shift+h para remplazar en todos lados
//ctrl+h remplazar en el archivo
