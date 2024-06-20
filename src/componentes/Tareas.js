import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Tareas = ({ tarea, cambiarTareas, tareas, mostrarCompletadas }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

  const handleToggleCompletada = () => {
    cambiarTareas(
      tareas.map((t) =>
        t.id === tarea.id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const handleEliminarTarea = () => {
    cambiarTareas(tareas.filter((t) => t.id !== tarea.id));
  };

  const handleGuardarEdicion = () => {
    cambiarTareas(
      tareas.map((t) =>
        t.id === tarea.id ? { ...t, texto: nuevoTexto } : t
      )
    );
    setEditando(false);
  };

  if (!mostrarCompletadas && tarea.completada) {
    return null;
  }

  return (
    <div className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      {editando ? (
        <input
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
        />
      ) : (
        <span className="tarea__texto">{tarea.texto}</span>
      )}
      <div className="tarea__acciones">
        <FontAwesomeIcon
          icon={faCheck}
          className="tarea__icono"
          onClick={handleToggleCompletada}
        />
        <FontAwesomeIcon
          icon={faEdit}
          className="tarea__icono"
          onClick={() => setEditando(!editando)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="tarea__icono"
          onClick={handleEliminarTarea}
        />
        {editando && (
          <FontAwesomeIcon
            icon={faCheck}
            className="tarea__icono"
            onClick={handleGuardarEdicion}
          />
        )}
      </div>
    </div>
  );
};
