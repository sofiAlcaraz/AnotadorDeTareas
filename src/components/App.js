
import './App.css';

import React, { useState } from 'react';

import Formulario from './Formulario';

import Tabla from './Tabla';



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


  //no pasar setter en etiqueta
  //minuscula atributos y mayuscula componentes 
  return (
    <div className='App'>
      <h1>Organizador de Tareas</h1>
      <div className='App-bodyy'>
        <div className='App-body'>

          <Formulario onNuevaTarea={onNuevaTarea} />

          <Tabla onBorrarDatos={onBorrarDatos} columnas={columnas} setColumnas={setColumnas} />

        </div>
      </div>
    </div>
  );
}

export default App;
