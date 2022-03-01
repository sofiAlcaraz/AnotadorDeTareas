
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
  const onMoverTarea = (tarea, index) => {
    const nuevasColumnas = [...columnas];
    nuevasColumnas[index + 1].tasks.push(tarea);
    onBorrarDatos(tarea, index);
  }
  const reorder = (list ,elem1,elem2,colum)=>{
    
    const result=[...list];
    const[borrar]=result[colum].tasks.splice(elem1,1);
    result[colum].tasks.splice(elem2,0,borrar);
    return result;
  }

  const onBeforeCapture = useCallback(() => {//l arrastre está a punto de comenzar y las dimensiones no se han recopilado del DOM
    /*...*/ 
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {//n arrastre está a punto de comenzar y las dimensiones se han capturado del DOM
    /*...*/ 
  }, []);
  const onDragStart = useCallback(() => {//se esta arrastrando
    /*...*/ 
  }, []);
  const onDragUpdate = useCallback(() => {//ealgo cambio
   
    /*...*/
  }, []);//parseInt
  const onDragEnd = useCallback((e) => {
   
    const{source,destination}=e;//tiene que tener los mismos nombres?
    if(!destination){
      return;
    }if(source.index===destination.index && source.droppableId===destination.droppableId){
      return;
    }
    setColumnas(modColum =>reorder(modColum,source.index,destination.index,destination.droppableId));
    // the only one that is required
  }, []);
  //no pasar setter en etiqueta
  //minuscula atributos y mayuscula componentes 
  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}>
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
