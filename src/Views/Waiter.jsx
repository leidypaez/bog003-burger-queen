// import Logo from '../media/Logo.png';
import "../router/App.css";
import React from "react";
import { Link } from "react-router-dom"
import Logo from "../media/Logo.png";
import camareros from "../media/camareros.png";
import dataJson from '../data-menu/menu.json';

const menu = dataJson.menu;

const waiter = () => {
  return (
  <>
    <header>
      <img src={Logo} alt="Pizza planet" className="miniLogo" />
      <nav className="navWaiter">
        <Link to="Waiter/*" className="waiter">
          Nuevo pedido
        </Link>
        <Link to="Orders/*" className="waiter">
          Pedidos
        </Link>
        <Link to="/" className="waiter">
          <img src={camareros} className="iconWaiter" alt="Mesero" />
          Inicio
        </Link>
      </nav>
    </header>
   </>
  );

};

export default waiter;
