import React from 'react';
import '../index.css';
import dataMenu from '../data-menu/menu.json';

const menu = dataMenu.menu;

const ItemMenuChart = ({itemImg, itemName, itemPrice, itemType}) => {
    
    return (
        <div className="itemMenu">
            <img className="itemImg" src={itemImg} alt={itemName} />
            <p> {itemName} </p>
            <p> {itemPrice} </p>
            <p className="itemMenuType"> {itemType}</p>
        </div>
    );
}

const MenuItems = () => {
    return (
        <section className="menuItems">
            
            { menu.filter (item => item.type === 'Desayuno')
            .map(item => (

                <ItemMenuChart 
                key={item.name}
                itemImg= {item.img}
                itemName={item.name}
                itemPrice={item.price}
                itemType={item.type}
                />
            ))}

        </section>
    );
}

export default MenuItems;