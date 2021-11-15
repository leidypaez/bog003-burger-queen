import React from 'react';
import '../router/App.css';
import MenuItems from '../components/ItemMenu';
import { Link } from 'react-router-dom';
import Logo from '../media/Logo.png';
import camareros from '../media/camareros.png';
import MenuListSummary from '../components/SummaryMenu';
import '../index.css'
import Header from "../components/header";
import TabMenu from '../components/tabMenu';


const waiter = () => {

  return (
  <>
    <header className='headerWaiter'>
      <img src={Logo} alt='Pizza planet' className='miniLogo' />
      <nav className='navWaiter'>
        <Link to='Waiter/*' className='waiter'>
          Nuevo pedido
        </Link>
        <Link to='Orders/*' className='waiter'>
          Pedidos
        </Link>
        <Link to='/' className='waiter'>
          <img src={camareros} className='iconWaiter' alt='Mesero' />
          Inicio
        </Link>
      </nav>
    </header>

    <section className='menuSection'>
      
    <MenuItems />
    <MenuListSummary />

    </section>
      <Header/>
      <input type="text" placeholder="Nombre del cliente" className="inputName" ></input>
      <input type="text" placeholder="N° de mesa" className="inputTables"></input>
      <TabMenu/>
      
    </>
  );

};

export default waiter;
