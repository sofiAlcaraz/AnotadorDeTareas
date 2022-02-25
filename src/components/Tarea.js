
const Tarea = ({ columnas, onBorrarDatos, onMoverTarea, tarea, index,...props }) => {//mostrarSiguiente(booleana) para mostrar otro boton
//tarea.title
    return (
       
        <div className="App-cuadrado-de-tarea" key={props.key}>

            <p>{tarea.title.length ? tarea.title : "No title"}</p>

            <p>{tarea.description.length ? tarea.description : "No description"}</p>

            <button onClick={() => onBorrarDatos(tarea, index)}>Borrar</button>

            {index === (columnas.length) - 1 ? "" :
                <button onClick={() => onMoverTarea(tarea, index)}>Siguiente</button>}

        </div>
       
    );
}


export default Tarea;