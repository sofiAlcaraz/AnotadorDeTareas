
import './App.css';

import React, { useState, useCallback } from 'react';

import Formulario from './Formulario';

import Tabla from './Tabla';

import { DragDropContext } from "react-beautiful-dnd";
//mas necesito, descargas,issues/problemas, ultimos cambios, estrellas en git

function App() {//hook
  const [columnas, setColumnas] = useState([
    {
      title: "Pendiente",
      tasks: []
    },
    {
      title: "En Progreso",
      tasks: []
    },
    {
      title: "Hecho",
      tasks: []
    }
  ]);
  const onNuevaTarea = (tarea) => {
    const nuevasColumnas = [...columnas];
    nuevasColumnas[0].tasks.push(tarea);
    setColumnas(nuevasColumnas);
  }
  const onBorrarDatos = (tarea, index) => {
    const nuevasColumnas = [...columnas];
    nuevasColumnas[index].tasks = nuevasColumnas[index].tasks.filter(item => item.id !== tarea.id);
    setColumnas(nuevasColumnas);
  };
  const onMoverTarea = (tarea, origen, destino) => {
    const nuevasColumnas = [...columnas];
    nuevasColumnas[destino].tasks.push(tarea);
    onBorrarDatos(tarea, origen);
   //nuevasColumnas[origen].tasks = nuevasColumnas[origen].tasks.filter(item => item.id !== tarea.id);
    return nuevasColumnas;
  }
  const onReordenar = (pos1, pos2, column,columns) => {
    console.log(columns[column].tasks);
    const nuevasColumnas = [...columns];
    const [removed] = nuevasColumnas[column].tasks.splice(pos1, 1);
    nuevasColumnas[column].tasks.splice(pos2, 0, removed);
   return nuevasColumnas;
  }

  const onDragEnd = useCallback((e) => {
    const { source, destination } = e;
    const columnaOrigen=parseInt(source.droppableId);
    const columnaDestino=parseInt(destination.droppableId);
    const indexOrigen=source.index;
    const  indexDestino=destination.index;
    
    if (!destination || (indexOrigen === indexDestino && columnaOrigen === columnaDestino)) {
      return;
    }
    const tarea = columnas[columnaOrigen].tasks.find(t => t.id === parseInt(e.draggableId));

    if (columnaOrigen !== columnaDestino) {
      const nuevasColumnas=onMoverTarea(tarea, columnaOrigen, columnaDestino);
     setColumnas(onReordenar(columnas[columnaDestino].tasks.length-1, indexDestino, columnaDestino,nuevasColumnas));
    } else{
      setColumnas(onReordenar(indexOrigen, indexDestino, columnaOrigen,columnas));
    }
  }, []);
  //no pasar setter en etiqueta
  //minuscula atributos y mayuscula componentes 
  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <div className='App'>
        <h1>Organizador de Tareas</h1>

        <div className='App-bodyy'>
          <div className='App-body'>

            <Formulario onNuevaTarea={onNuevaTarea} />

            <Tabla columnas={columnas} onBorrarDatos={onBorrarDatos} onMoverTarea={onMoverTarea} />

          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
