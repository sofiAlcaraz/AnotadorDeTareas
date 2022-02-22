
import Tarea from "./Tarea";


//siempre que hago un map le pongo su key

const Tabla = ({ columnas, onBorrarDatos, onMoverTarea, ...props }) => {

    return (
        <div className='App-tabla'>

            {columnas.map((c, index) =>

                <div className='App-col' key={index}>

                    <p className='App-col-titulo'>{c.title}</p>

                    {c.tasks.length ? "" : "No tasks"}

                    {c.tasks.map(tarea =>
                        <Tarea key={tarea.id} columnas={columnas} tarea={tarea} index={index} onBorrarDatos={onBorrarDatos}
                            onMoverTarea={onMoverTarea} />
                    )}
                </div>
            )}
        </div>
    );
}
export default Tabla;
//ctrl+shift+h para remplazar en todos lados
//ctrl+h remplazar en el archivo
