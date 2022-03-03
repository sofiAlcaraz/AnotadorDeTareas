
import Tarea from "./Tarea";
import { Droppable } from "react-beautiful-dnd";

/*p{
    word-break: break-word;
    
}*/
//siempre que hago un map le pongo su key

const Tabla = ({ columnas, onBorrarDatos, onMoverTarea, ...props }) => {

    return (
        <div className='App-tabla' class="pt-4 flex justify-between gap-4 flex-wrap justify-center ">

            {columnas.map((c, index) =>
                <Droppable droppableId={index.toString()} key={index}>
                    {(droppableProvided) => (
                        <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='App-col' class=" border-dotted rounded-lg ... border-2 border-gray-900 min-w-[15rem] ">

                            <p className='App-col-titulo' class=" font-semibold text-base m-4 bg-slate-300 rounded-lg ... ">{c.title}</p>

                            {c.tasks.length ? "" : "No tasks"}

                            {c.tasks.map((tarea, index2) =>
                                
                                <Tarea key={tarea.id} columnas={columnas} tarea={tarea} indexTarea={index2} indexCOlum={index} onBorrarDatos={onBorrarDatos}
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
