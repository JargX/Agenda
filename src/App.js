import React, { useState, useEffect } from 'react';
import './App.css';
import { FormularioTareas } from './componentes/FormularioTareas';
import { Header } from './componentes/Header';
import { ListaTareas } from './componentes/ListaTareas';

function App() {
  const [tareas, cambiarTareas] = useState(
    JSON.parse(localStorage.getItem('tareas')) || []
  );
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas} />
    </div>
  );
}

export default App;
