import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Cartitems from '../Components/Cartitems';

const Cart = ({ items,removeFromCart }) => {
    return (
        <div>
            <div>
                <Cartitems items={items} removeFromCart={removeFromCart}/>
            </div>
        </div>
    );
};

export default Cart;
