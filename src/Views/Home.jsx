import Logo from '../media/Logo.png';
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
          <button className="waiterButton"><Link to='/Waiter'className="link-color"><img src={camareros} className="icon" alt="Mesero"/> Mesero</Link> </button>
          <button className="chefButton"><Link to='/Chefs' className="link-color"><img src={chef} className="icon" alt="Mesero"/>Cocina</Link></button>
          </div>
        </header>
      </div>
    </body>
  );
}
export default home;