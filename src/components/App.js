
import './App.css';

import React, { useState, useCallback } from 'react';

import Formulario from './Formulario';

import Tabla from './Tabla';

import { DragDropContext } from "react-beautiful-dnd";
//mas necesecito, descargas,issues/problemas, ultimos cambios, estrellas en git

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
  const onMoverTarea = (tarea, origen,destino) => {
    const nuevasColumnas = [...columnas];
    nuevasColumnas[destino].tasks.push(tarea);
    onBorrarDatos(tarea, origen);
  }
  const onReordenar = (pos1, pos2, column) => {
    const nuevasColumnas = [...columnas];
    const [removed] = nuevasColumnas[column].tasks.splice(pos1, 1);
    nuevasColumnas[column].tasks.splice(pos2, 0, removed);
    setColumnas(nuevasColumnas);
  }

  const onDragEnd = useCallback((e) => {
    console.log(e);
    const { source, destination } = e;//tiene que tener los mismos nombres?
    if (!destination || (source.index === destination.index) && parseInt(source.droppableId) === parseInt(destination.droppableId)) {
      return;
    }
    const tarea = columnas[parseInt(source.droppableId)].tasks.find(t => t.id === parseInt(e.draggableId));
    if (parseInt(source.droppableId) !== parseInt(destination.droppableId)) {
      onMoverTarea(tarea, parseInt(source.droppableId), parseInt(destination.droppableId));
      return;
    } else {
      onReordenar(source.index, destination.index, parseInt(source.droppableId));
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
