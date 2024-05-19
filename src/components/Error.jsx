import React from 'react';
import { Link } from 'react-router-dom';

export default function Error(props) {
  return (
    <div className="error">
      <h1 className="error-title">{props.code ? 'props.code' : '404'}</h1>
      <h2 className="error-subtitle">
        {props.message ? 'props.message' : 'Oups! La page que vous demandez n\'existe pas.'}
      </h2>
      <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
    </div>
  );
}
