import React from 'react';
import MenuItems from '../components/ItemMenu';
import MenuListSummary from '../components/SummaryMenu';
import TabMenu from '../components/tabMenu';
import WaiterNav from '../components/WaiterNav';
import '../index.css';




const waiter = () => {

  return (
    <>
      <section className='menuSection'>

        <MenuItems />
        <MenuListSummary />

      </section>
      <WaiterNav />

      <input type="text" placeholder="Nombre del cliente" className="inputName" ></input>
      <input type="text" placeholder="N° de mesa" className="inputTables"></input>

      <TabMenu />
    </>
  );

};

export default waiter;
