import { useRef, useState } from "react";

function Tarea({onBorrarDatos,columnas,tarea,index}) {//mostrarSiguiente(booleana) para mostrar otro boton
    
    const moverAsiguienteColumna = (tarea, index) => {
        const nuevasColumnas = [...columnas];
        nuevasColumnas[index + 1].tasks.push(tarea);
        onBorrarDatos(tarea, index);
    }
    return (
        <div className="App-cuadrado-de-tarea" key={tarea.title}>
            
            <p>{tarea.title.length ? tarea.title : "No title"}</p>

            <button onClick={() => onBorrarDatos(tarea, index)}>Borrar</button>

            {index === (columnas.length) - 1 ? "" :
                <button onClick={() => moverAsiguienteColumna(tarea, index)}>Siguiente</button>}

        </div>

    );
}


export default Tarea;