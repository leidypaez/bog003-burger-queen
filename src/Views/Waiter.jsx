import '../index.css'
import React from "react";
import { Link } from "react-router-dom"
import WaiterNav from "../components/WaiterNav";
import TabMenu from '../components/tabMenu';
import MenuListSummary from '../components/SummaryMenu'


const waiter = () => {

  return (
    <>
      <WaiterNav/>
      <input type="text" placeholder="Nombre del cliente" className="inputName" ></input>
      <input type="text" placeholder="N° de mesa" className="inputTables"></input>
      <TabMenu/>
      <section className='menuSection'>
        <MenuListSummary />
      </section>
      
    </>
  );

};

export default waiter;
