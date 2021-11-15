import "../CSS/tab.css";
import React from "react";

function TabMenu() {
  return (
    <div className="tabContainer">
      <div className="lblTab" >
        <label for="Desayuno">Desayuno</label>
        <label for="Comidas">Comidas</label>
        <label for="Bebidas">Bebidas</label>
        <label for="Adiciones">Adiciones</label>
      </div>
      <div className="content">
        <input type="radio" name="radio" id="Desayuno"></input>
        <div className="tab1">
          <p>Aqui va el menu</p>
        </div>
        <input type="radio" name="radio" id="Comidas"></input>
        <div className="tab2">
          <p>Aqui va el menu</p>
        </div>
        <input type="radio" name="radio" id="Bebidas"></input>
        <div  className="tab3">
          <p>Aqui va el menu</p>
        </div>
        <input type="radio" name="radio" id="Adiciones"></input>
        <div  className="tab4">
          <p>Aqui va el menu</p>
        </div>
      </div>
      
    </div>
  );
}

export default TabMenu;
