import Logo from '../media/Logo.png';
import '../router/App.css';
import '../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import camareros from "../media/camareros.png"

const home = () => {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <button className="waiterButton"><img src={camareros} className="waiterIcon" alt="Mesero"/> <Link to='/Waiter'className="link-color"  >Mesero</Link> </button>
          <Link to='/Chefs' className="chefButton">Cocina</Link>
        </header>
      </div>
    </body>
  );
}
export default home;