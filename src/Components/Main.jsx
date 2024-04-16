import React,{useState} from 'react'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import { IoMdPerson } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import rice from '../assets/rice.jpg'
import oil from '../assets/oil.jpg'
import sugar from '../assets/sugar.jpg'
import salt from '../assets/salt.jpg'
import soap from '../assets/soap.jpg'
import shampoo from '../assets/shampoo.jpg'
import toothpaste from '../assets/toothpaste.jpg'
import toothbrush from '../assets/toothbrush.jpg'
import pen from '../assets/pen.jpg'
import pencil from '../assets/pencil.jpeg'
import eraser from '../assets/eraser.png'
import sharpner from '../assets/sharpner.jpg'
import note from '../assets/note.png'
import scale from '../assets/scale.jpeg'

import apple from "../assets/apple.avif";
import strawberry from '../assets/strawberry.png'
import orange from '../assets/orange.jpg'
import melon from '../assets/melon.png'
import kiwi from '../assets/kiwi.avif'
import grapes from '../assets/grapes.png'
import amla from '../assets/amla.webp'
import mango from '../assets/mango.jpg'

import pumpkin from '../assets/pumpkin.png'
import carrot from '../assets/carrot.jpg'
import onion from '../assets/onion.webp'
import cabbage from '../assets/cabbage.webp'
import potato from '../assets/potato.jpg'
import tomato from '../assets/tomato.jpeg'
import corn from '../assets/corn.jpg'
import brinjal from '../assets/brinjal.jpeg'
import bittergourd from '../assets/bittergourd.jpg'
import ladiesfinger from '../assets//ladiesfinger.jpg'

const Main = () => {
    let Products = [
        {
            img: rice,
            title: 'Rice',
            price: 50
        },
        {
            img: oil,
            title: 'Oil',
            price: 110
        },
        {
            img: sugar,
            title: 'White Sugar',
            price: 35
        },
        {
            img: salt,
            title: 'Salt',
            price: 30
        },
        {
            img: soap,
            title: 'Soap',
            price: 45
        },
        {
            img: shampoo,
            title: 'Shampoo',
            price: 92
        },{
            img: toothpaste,
            title: 'ToothPaste',
            price: 50
        },
        {
            img: toothbrush,
            title: 'ToothBrush',
            price: 20
        },
        {
            img: pen,
            title: 'Pen',
            price: 35
        },
        {
            img:pencil ,
            title: 'Pencil',
            price:15
        },{
            img: eraser,
            title: 'Eraser',
            price:20
        },
        {
            img: scale,
            title: 'Scale',
            price:25
        },
        {
            img: sharpner,
            title: 'Sharpner',
            price:5
        },
        {
            img: note,
            title: 'Note',
            price:50
        },
        {
            img: apple,
            title: 'Apple',
            price:150
        },
        {
            img: strawberry,
            title: 'Strawberry',
            price:90
        },
        {
            img: melon,
            title: 'Melon',
            price:30
        },
        {
            img: mango,
            title: 'Mango',
            price:25
        },
        {
            img: kiwi,
            title: 'Kiwi',
            price:95
        },
        {
            img: grapes,
            title: 'Grapes',
            price:40
        },
        {
            img: orange,
            title: 'Orange',
            price:60
        },
        {
            img: amla,
            title: 'Amla',
            price:20
        },
        {
            img: pumpkin,
            title: 'Pumpkin',
            price:20
        },
        {
            img: carrot,
            title: 'Carrot',
            price:30
        },
        {
            img: onion,
            title: 'Onion',
            price:50
        },
        {
            img: cabbage,
            title: 'Cabbage',
            price:15
        },
        {
            img: potato,
            title: 'Potato',
            price:35
        },
        {
            img: tomato,
            title: 'Tomato',
            price:50
        },
        {
            img: corn,
            title: 'Corn',
            price:30
        },
        {
            img: brinjal,
            title: 'Brinjal',
            price:12
        },
        {
            img: bittergourd,
            title: 'Bitter Groud',
            price:10
        },
        {
            img: ladiesfinger,
            title: 'Ladies Finger',
            price:10
        }
        
    ]
    const [filteredProducts,setFilteredProducts]=useState(Products)
    const serachHandler = (e) => {
        const filteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        if(filteredArray.length != 0){
            setFilteredProducts(filteredArray);
        }
    }
  return (
    <div className='w-full relative'>
        <div className='sticky top-0 z-10'>
            <div className='header flex justify-between items-center p-4 bg-white'>
                <h1 className='text-3xl font-bold'>Shopping Cart</h1>
                <div className="search flex justify-between items-center px-5py-2 bg-gray">
                    <input type="text" placeholder='Search product' className='b-transparent outline-0' onChange={serachHandler}/>
                    <button onClick={()=>serachHandler}><CiSearch/></button>
                    <div className='px-4'>
                        <NavLink to='/login'>
                        <button className='bg-white px-2 py-2 rounded-full drop-shadow-xl'>
                            <IoMdPerson size={'1.5rem'}/>
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="categories bg-white w-full flex justify-between space-x-8 px-2 py-10">
                <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
                    <button>Grocery</button>
                </div>

                <div className='bg-white px-5 hover:bg-black hover:text-white py-2 rounded-full drop-shadow-xl'>
                    <button>Fruits</button>
                </div>
                
                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>Vegetables</button>
                </div>
                
                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>Stationary</button>
                </div>
                
                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>Household</button>
                </div>
                
                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>BakeryItems</button>
                </div>
                
                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>Sweets&Snacks</button>
                </div>
                
                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>Kids</button>
                </div>

                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>Sports</button>
                </div>

                <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                    <button>Books</button>
                </div> 
            </div>
        </div>
        <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
            {filteredProducts && filteredProducts.map((product,idx)=>{
                return(
                    <div key={idx}className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
                    <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2'/>
                    <div className='m-2 bg-gray-100 p-2'>
                        <h1 className='text-xl font-semibold'>{product.title}</h1>
                        <p className='text-sm'>{product.description}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-bold'>${product.price}.00</p>
                            <button><CiShoppingCart size={'1.4rem'}/></button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Main