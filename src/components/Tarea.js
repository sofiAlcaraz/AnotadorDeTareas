
const Tarea = ({ columnas, onBorrarDatos, onMoverTarea, tarea, index }) => {//mostrarSiguiente(booleana) para mostrar otro boton

    return (
        <div className="App-cuadrado-de-tarea" key={tarea.title}>
            
            <button onClick={() => onBorrarDatos(tarea, index)}>Borrar</button>

            {index === (columnas.length) - 1 ? "" :
                <button onClick={() => onMoverTarea(tarea, index)}>Siguiente</button>}

        </div>

    );
}


export default Tarea;