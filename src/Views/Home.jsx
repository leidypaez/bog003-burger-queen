import Logo from '../media/Logo.png';
import '../router/App.css';
import '../index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import camareros from "../media/camareros.png";
import chef from "../media/traje-de-chef.png"

const home = () => {
  return (
  
      <header className="App-header">
        <div className="App">
          <img src={Logo} className="App-logo" alt="logo" />
          <div>
            <button className="waiterButton">
              <Link to='/Waiter' className="link-color">
                <img src={camareros} className="icon" alt="Mesero" />
                Mesero
              </Link>
            </button>
            <button className="chefButton">
              <Link to='/Chefs' className="link-color">
                <img src={chef} className="icon" alt="Mesero" />
                Cocina
              </Link>
            </button>
          </div>
        </div>
      </header>

  );
}
export default home;