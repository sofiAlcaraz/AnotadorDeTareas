
import Tarea from "./Tarea";

function Tabla({onBorrarDatos,columnas,...props}) {

    return (
        <div className='App-tabla'>

            {columnas.map((c, index) =>

                <div className='App-col' key={index}>

                    <p className='App-col-titulo'>{c.title}</p>

                    {c.tasks.length ? "" : "No tasks"}

                    {c.tasks.map(tarea =>
                        <Tarea onBorrarDatos={onBorrarDatos} tarea={tarea} index={index} columnas={columnas}
                          setColumnas={props.setColumnas} />
                    )}
                </div>
            )}
        </div>
    );
}
export default Tabla;