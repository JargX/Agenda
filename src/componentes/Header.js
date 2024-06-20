import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const Header = ({ mostrarCompletadas, setMostrarCompletadas }) => {
  const handleToggleMostrarCompletadas = () => {
    setMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <header className="header">
      <h1 className="header__titulo">Lista de Tareas</h1>
      <button className="header__boton" onClick={handleToggleMostrarCompletadas}>
        No mostrar tareas completadas
        <FontAwesomeIcon icon={faEyeSlash} className="header__iconoboton" />
      </button>
    </header>
  );
};
