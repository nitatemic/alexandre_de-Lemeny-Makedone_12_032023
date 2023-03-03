import React from 'react';
import SportSeeLogo from '../assets/img/SportSee-logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar-logo" href="/">
        <img className="navbar-logo-img" alt="Logo de SportSee" src={SportSeeLogo} />
      </a>
      <a className="navbar-link" href="/">Accueil</a>
      <a className="navbar-link" href="/profil">Profil</a>
      <a className="navbar-link" href="/settings">Réglage</a>
      <a className="navbar-link" href="/community">Communauté</a>
    </div>
  );
}
