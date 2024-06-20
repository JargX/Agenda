import React from 'react';
import { Tareas } from './Tareas';

export const ListaTareas = ({ tareas, cambiarTareas }) => {
  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => (
          <Tareas
            key={tarea.id}
            tarea={tarea}
            cambiarTareas={cambiarTareas}
            tareas={tareas}
          />
        ))
      ) : (
        <div className="lista-tareas__mensaje">No existen tareas</div>
      )}
    </ul>
  );
};
