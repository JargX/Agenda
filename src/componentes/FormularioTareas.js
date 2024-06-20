import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, setInputTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTarea.trim() !== '') {
      cambiarTareas([
        ...tareas,
        {
          id: Math.random(),
          texto: inputTarea,
          completada: false,
        },
      ]);
      setInputTarea('');
    }
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Introduce una tarea"
        value={inputTarea}
        onChange={(e) => setInputTarea(e.target.value)}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn" />
      </button>
    </form>
  );
};
