import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Logo from '../media/Logo.png';
import camareros from '../media/camareros.png';


const WaiterNav = () => {
  return (
    <header className="nav-waiter">
    
      <img src={Logo} alt='Pizza-planet' className='miniLogo' />
      <nav>
        <Link to='/Waiter/' className='waiter'>
          Nuevo pedido
        </Link>
        <Link to='/Orders/' className='waiter'>
          Pedidos
        </Link>
        <Link to='/' className='waiter'>
          <img src={camareros} className="iconWaiter" alt="Mesero" />
          Inicio
        </Link>
      </nav>

    </header>
  );
};
export default WaiterNav;