import "./tab.css";
import { React, useState } from "react";
import MenuItems from './ItemMenu.jsx';

function TabMenu() {
  const [filter, setFilter]= useState("")
  return (
    <div className="tabContainer">
      <div className="lblTab" >
        <label for="Desayuno">Desayuno</label>
        <label for="Comidas">Comidas</label>
        <label for="Bebidas">Bebidas</label>
        <label for="Adiciones">Adiciones</label>
      </div>
      <div className="content">
        <input type="radio" name="radio" value="Desayuno" onChange={()=> setFilter("Desayuno")} id="Desayuno"></input>
        <div className="tab1">
          <MenuItems foodType={filter}/>
        </div>
        <input type="radio" name="radio" value="Comidas" onChange={()=> setFilter("Comidas")} id="Comidas"></input>
        <div className="tab2">
          <MenuItems foodType={filter}/>  
        </div>
        <input type="radio" name="radio" value="Bebidas" onChange={()=> setFilter("Bebidas")} id="Bebidas"></input>
        <div  className="tab3">
          <MenuItems foodType={filter}/>
        </div>
        <input type="radio" name="radio" value="Adiciones" onChange={()=> setFilter("Adiciones")} id="Adiciones"></input>
        <div  className="tab4">
          <MenuItems foodType={filter}/>
        </div>
      </div>
      
    </div>
  );
}

export default TabMenu;
