import React from 'react';
import './menu.css';
import dataMenu from '../data-menu/menu.json';

const menu = dataMenu.menu;

const ItemMenuChart = ({itemImg, itemName, itemPrice}) => {
    
    return (
        <section className="itemMenu">
            <img className="itemImg" src={itemImg} alt={itemName} />
            <p> {itemName} </p>
            <p> {itemPrice} </p>
        </section>
    );
}

const MenuItems = (props) => {
    console.log(props)
    return (
        <section className="menuItems">
            
            { menu.filter (item => item.type === props.foodType)
            .map(item => (

                <ItemMenuChart 
                key={item.id}
                itemImg= {item.img}
                itemName={item.name}
                itemPrice={item.price}
                />
            ))}

        </section>
    );
}

export default MenuItems;