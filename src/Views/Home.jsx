import Logo from '../media/Logo.png';
import '../router/App.css';
import '../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import camareros from "../media/camareros.png";
import chef from "../media/traje-de-chef.png"

const home = () => {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <div>
          <button className="waiterButton"><img src={camareros} className="icon" alt="Mesero"/> <Link to='/Waiter'className="link-color"  >Mesero</Link> </button>
          <button className="chefButton"><img src={chef} className="icon" alt="Mesero"/><Link to='/Chefs' className="link-color">Cocina</Link></button>
          </div>
        </header>
      </div>
    </body>
  );
}
export default home;