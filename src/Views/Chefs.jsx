import '../index.css'
import React from 'react';
import { Link } from "react-router-dom"
import Logo from "../media/Logo.png";
import chef from '../media/traje-de-chef.png'

const chefs =() => {
  return (
    <header>
      <img src={Logo} alt="Pizza planet" className="miniLogo" />
      <nav className="navWaiter">
        <Link to="/" className="chef">
          <img src={chef} className="iconChef" alt="Mesero" />
          Inicio
        </Link>
      </nav>
      
    </header>
  );
}
export default chefs;