import '../index.css'
import React from "react";
import { Link } from "react-router-dom"
import Header from "../components/header";
import TabMenu from '../components/tabMenu';


const waiter = () => {

  return (
    <>
      <Header/>
      <input type="text" placeholder="Nombre del cliente" className="inputName" ></input>
      <input type="text" placeholder="N° de mesa" className="inputTables"></input>
      <TabMenu/>
      
    </>
  );

};

export default waiter;
