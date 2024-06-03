import rice from '../assets/rice.jpg';
import oil from '../assets/oil.jpg';
import sugar from '../assets/sugar.jpg';
import salt from '../assets/salt.jpg';
import soap from '../assets/soap.jpg';
import shampoo from '../assets/shampoo.jpg';
import toothpaste from '../assets/toothpaste.jpg';
import toothbrush from '../assets/toothbrush.jpg';
import pen from '../assets/pen.jpg';
import pencil from '../assets/pencil.jpeg';
import eraser from '../assets/eraser.png';
import sharpner from '../assets/sharpner.jpg';
import note from '../assets/note.png';
import scale from '../assets/scale.jpeg';

import apple from "../assets/apple.avif";
import strawberry from '../assets/strawberry.png';
import orange from '../assets/orange.jpg';
import melon from '../assets/melon.png';
import kiwi from '../assets/kiwi.avif';
import grapes from '../assets/grapes.png';
import amla from '../assets/amla.webp';
import mango from '../assets/mango.jpg';

import pumpkin from '../assets/pumpkin.png';
import carrot from '../assets/carrot.jpg';
import onion from '../assets/onion.webp';
import cabbage from '../assets/cabbage.webp';
import potato from '../assets/potato.jpg';
import tomato from '../assets/tomato.jpeg';
import corn from '../assets/corn.jpg';
import brinjal from '../assets/brinjal.jpeg';
import bittergourd from '../assets/bittergourd.jpg';
import ladiesfinger from '../assets/ladiesfinger.jpg';

import broom from '../assets/broom.jpg';
import bucket from '../assets/bucket.jpg';
import cooler from '../assets/cooler.webp';
import curtain from '../assets/curtain.webp';
import fan from '../assets/fan.webp';
import hairdryer from '../assets/hairdryer.jpg';
import iron from '../assets/iron.webp';
import jar from '../assets/jar.jpg';
import ladder from '../assets/ladder.webp';
import lamp from '../assets/lamp.jpg';

import bourbon from '../assets/bourbon.jpg';
import bread from '../assets/bread.webp';
import chocofills from '../assets/chocofills.webp';
import chocolate from '../assets/chocolate.jpg';
import chocos from '../assets/chocos.jpg';
import cookies from '../assets/cookies.jpg';
import gems from '../assets/gems.jpg';
import hideandseek from '../assets/hideandseek.jpg';
import jimjam from '../assets/jimjam.webp';
import kisses from '../assets/kisses.avif';
import kitkat from '../assets/kitkat.jpg';
import lays1 from '../assets/lays1.webp';
import lays2 from '../assets/lays2.webp';
import lays3 from '../assets/lays3.jpg';
import milkbikis from '../assets/milkbikis.jpg';
import silkbubbly from '../assets/silkbubbly.jpeg';

import car from '../assets/car.jpg';
import dancingcactus from '../assets/dancingcactus.webp';
import babylotion from '../assets/bodylotion.webp';
import bsoap from '../assets/bsoap.avif';
import bdress from '../assets/bdress.jpg';
import btoys from '../assets/btoys.jpg';
import btowel from '../assets/btowel.webp';

import baseball from '../assets/baseball.webp';
import cricketbat from '../assets/cricketbat.jpg';
import football from '../assets/football.jpg';
import skateshoe from '../assets/skateshoe.jpg';
import tennisbat from '../assets/tennisbat.avif';

import strangebook from '../assets/strangebook.jpg';
import readinglist from '../assets/readinglist.jpg';
import newname from '../assets/newname.jpg';
import harrypotter from '../assets/harrypotter.jpg';

const Data = {
    groceryItems: [
        {
            id: 1,
            img: rice,
            title: 'Rice',
            price: 50,
            description: 'A staple food for many cultures, rich in carbohydrates.',
        },
        {
            id: 2,
            img: oil,
            title: 'Oil',
            price: 110,
            description: 'Pure vegetable oil, ideal for cooking and frying.',
        },
        {
            id: 3,
            img: sugar,
            title: 'White Sugar',
            price: 35,
            description: 'Fine white sugar, perfect for baking and sweetening.',
        },
        {
            id: 4,
            img: salt,
            title: 'Salt',
            price: 30,
            description: 'Table salt, essential for seasoning and preserving food.',
        },
        {
            id: 5,
            img: soap,
            title: 'Soap',
            price: 45,
            description: 'Gentle soap for everyday use, suitable for all skin types.',
        },
        {
            id: 6,
            img: shampoo,
            title: 'Shampoo',
            price: 92,
            description: 'Revitalizing shampoo for clean and healthy hair.',
        },
        {
            id: 7,
            img: toothpaste,
            title: 'ToothPaste',
            price: 50,
            description: 'Fluoride toothpaste for strong teeth and fresh breath.',
        },
        {
            id: 8,
            img: toothbrush,
            title: 'ToothBrush',
            price: 20,
            description: 'Soft-bristle toothbrush for gentle yet effective cleaning.',
        }],
        stationaryItems:[{
            id: 9,
            img: pen,
            title: 'Pen',
            price: 35,
            description: 'Smooth writing ballpoint pen.',
        },
        {
            id: 10,
            img: pencil,
            title: 'Pencil',
            price: 15,
            description: 'High-quality graphite pencil for writing and drawing.',
        },
        {
            id: 11,
            img: eraser,
            title: 'Eraser',
            price: 20,
            description: 'Soft eraser that removes pencil marks cleanly.',
        },
        {
            id: 12,
            img: scale,
            title: 'Scale',
            price: 25,
            description: 'Durable 30cm scale for precise measurements.',
        },
        {
            id: 13,
            img: sharpner,
            title: 'Sharpner',
            price: 5,
            description: 'Compact sharpener for easy pencil sharpening.',
        },
        {
            id: 114,
            img: note,
            title: 'Note',
            price: 50,
            description: 'Notebook with 200 pages for writing and note-taking.',
        }
    ],
    fruitItems: [
        {
            id: 15,
            img: apple,
            title: 'Apple',
            price: 150,
            description: 'Fresh and crispy apples, rich in fiber and vitamins.',
        },
        {
            id: 16,
            img: strawberry,
            title: 'Strawberry',
            price: 90,
            description: 'Sweet and juicy strawberries, perfect for desserts.',
        },
        {
            id: 17,
            img: melon,
            title: 'Melon',
            price: 30,
            description: 'Refreshing melon, great for hydration.',
        },
        {
            id: 18,
            img: mango,
            title: 'Mango',
            price: 25,
            description: 'Ripe and juicy mangoes, rich in vitamins.',
        },
        {
            id: 19,
            img: kiwi,
            title: 'Kiwi',
            price: 95,
            description: 'Tangy and nutritious kiwis, high in Vitamin C.',
        },
        {
            id: 20,
            img: grapes,
            title: 'Grapes',
            price: 40,
            description: 'Sweet and seedless grapes, perfect for snacking.',
        },
        {
            id: 21,
            img: orange,
            title: 'Orange',
            price: 60,
            description: 'Juicy oranges, excellent source of Vitamin C.',
        },
        {
            id: 22,
            img: amla,
            title: 'Amla',
            price: 20,
            description: 'Indian gooseberry, known for its high Vitamin C content.',
        }
    ],
    vegetableItems: [
        {
            id: 23,
            img: pumpkin,
            title: 'Pumpkin',
            price: 20,
            description: 'Fresh pumpkin, ideal for soups and pies.',
        },
        {
            id: 24,
            img: carrot,
            title: 'Carrot',
            price: 30,
            description: 'Crunchy carrots, great for salads and snacking.',
        },
        {
            id: 25,
            img: onion,
            title: 'Onion',
            price: 50,
            description: 'Versatile onions, essential for many dishes.',
        },
        {
            id: 26,
            img: cabbage,
            title: 'Cabbage',
            price: 15,
            description: 'Fresh cabbage, perfect for salads and stir-fries.',
        },
        {
            id: 27,
            img: potato,
            title: 'Potato',
            price: 50,
            description: 'Staple potatoes, great for boiling, baking, or frying.',
        },
        {
            id: 28,
            img: tomato,
            title: 'Tomato',
            price: 50,
            description: 'Juicy tomatoes, perfect for salads and cooking.',
        },
        {
            id: 29,
            img: corn,
            title: 'Corn',
            price: 30,
            description: 'Sweet corn, great for boiling and grilling.',
        },
        {
            id: 30,
            img: brinjal,
            title: 'Brinjal',
            price: 12,
            description: 'Fresh brinjals, perfect for grilling and curries.',
        },
        {
            id: 31,
            img: bittergourd,
            title: 'Bitter Gourd',
            price: 10,
            description: 'Bitter gourd, known for its health benefits.',
        },
        {
            id: 32,
            img: ladiesfinger,
            title: 'Ladies Finger',
            price: 10,
            description: 'Fresh ladies fingers, great for stir-fries and curries.',
        },
    ],
    householdItems:[
        {
            id: 33,
            img: broom,
            title: 'Broom Stick',
            price: 60,
            description: 'Durable broom stick for effective cleaning.'
        },
        {
            id: 34,
            img: bucket,
            title: 'Bucket',
            price: 75,
            description: 'Sturdy plastic bucket for various uses.',
        },
        {
            id: 35,
            img: cooler,
            title: 'Air Cooler',
            price: 3500,
            description: 'Efficient air cooler for hot summer days.',
        },
        {
            id: 36,
            img: curtain,
            title: 'Curtain',
            price: 250,
            description: 'Beautiful curtain to enhance your room decor.',
        },
        {
            id: 37,
            img: fan,
            title: 'Table Fan',
            price: 200,
            description: 'Portable table fan for instant cooling.',
        },
        {
            id: 38,
            img: hairdryer,
            title: 'Hair Dryer',
            price: 190,
            description: 'Compact hair dryer for quick drying.',
        },
        {
            id: 39,
            img: iron,
            title: 'Iron Box',
            price: 150,
            description: 'Reliable iron box for smooth and wrinkle-free clothes.',
        },
        {
            id: 40,
            img: jar,
            title: 'Glass Jar',
            price: 120,
            description: 'Glass jar for storing kitchen essentials.',
        },
        {
            id: 41,
            img: ladder,
            title: 'Steel Ladder',
            price: 350,
            description: 'Sturdy steel ladder for household use.',
        },
        {
            id: 42,
            img: lamp,
            title: 'Lamp',
            price: 220,
            description: 'Elegant lamp for your study or bedside.',
        },
    ],
    bakeryItems:[
        {
            id: 43,
            img: bourbon,
            title: 'BourBon',
            price: 30,
            description: 'Chocolate-flavored Bourbon biscuits.',
        },
        {
            id: 44,
            img: bread,
            title: 'Bread',
            price: 25,
            description: 'Freshly baked bread, perfect for sandwiches.',
        },
        {
            id: 45,
            img: chocofills,
            title: 'Choco Fills',
            price: 40,
            description: 'Delicious cookies filled with chocolate.',
        },
        {
            id: 46,
            img: chocolate,
            title: 'Chocolate',
            price: 200,
            description: 'Rich and creamy chocolate bar.',
        },
        {
            id: 47,
            img: chocos,
            title: 'Chocos',
            price: 10,
            description: 'Chocolate-flavored cereal for a tasty breakfast.',
        },
        {
            id: 48,
            img: cookies,
            title: 'Cookies',
            price: 60,
            description: 'Crispy and delicious cookies.',
        },
        {
            id: 49,
            img: gems,
            title: 'Gems',
            price: 10,
            description: 'Colorful candy-coated chocolate gems.',
        },
        {
            id: 50,
            img: hideandseek,
            title: 'Hide And Seek',
            price: 25,
            description: 'Chocolate chip cookies.',
        },
        {
            id: 51,
            img: jimjam,
            title: 'JimJam',
            price: 35,
            description: 'Biscuits with jam filling.',
        },
        {
            id: 52,
            img: kisses,
            title: 'Kisses',
            price: 65,
            description: 'Chocolate Kisses candies.',
        },
        {
            id: 53,
            img: kitkat,
            title: 'Kitkat',
            price: 20,
            description: 'Crispy wafer bars covered with chocolate.',
        },
        {
            id: 54,
            img: lays1,
            title: 'Blue Lays',
            price: 10,
            description: 'Salted potato chips.',
        },
        {
            id: 55,
            img: lays2,
            title: 'Yellow Lays',
            price: 10,
            description: 'Potato chips with a hint of lemon.',
        },
        {
            id: 56,
            img: lays3,
            title: 'Green Lays',
            price: 35,
            description: 'Spicy green potato chips.',
        },
        {
            id: 57,
            img: milkbikis,
            title: 'MilkBikis Biscuit',
            price: 15,
            description: 'Milk-flavored biscuits.',
        },
        {
            id: 58,
            img: silkbubbly,
            title: 'SilkBubbly',
            price: 80,
            description: 'Silky and bubbly chocolate bar.',
        },
    ],
    kidsItems:[
        {
            id: 59,
            img: car,
            title: 'ToyCar',
            price: 230,
            description: 'Miniature toy car for kids.',
        },
        {
            id: 60,
            img: dancingcactus,
            title: 'Dancing Cactus',
            price: 130,
            description: 'Interactive dancing cactus toy.',
        },
        {
            id: 61,
            img: babylotion,
            title: 'Baby Lotion',
            price: 350,
            description: 'Gentle baby lotion for soft skin.',
        },
        {
            id: 62,
            img: bsoap,
            title: 'Baby Soap',
            price: 90,
            description: 'Mild soap for baby skin.',
        },
        {
            id: 63,
            img: bdress,
            title: 'Baby Dress',
            price: 150,
            description: 'Comfortable baby dress.',
        },
        {
            id: 64,
            img: btoys,
            title: 'Baby Toys',
            price: 190,
            description: 'Set of safe and colorful baby toys.',
        },
        {
            id: 65,
            img: btowel,
            title: 'Baby Towel',
            price: 150,
            description: 'Soft and absorbent baby towel.',
        },
    ],
    sportsItems:[
        {
            id: 66,
            img: baseball,
            title: 'BaseBall',
            price: 20,
            description: 'Standard baseball for sports activities.',
        },
        {
            id: 67,
            img: cricketbat,
            title: 'Cricket Bat',
            price: 210,
            description: 'Professional cricket bat for serious players.',
        },
        {
            id: 68,
            img: football,
            title: 'FootBall',
            price: 280,
            description: 'Durable football for outdoor play.',
        },
        {
            id: 69,
            img: skateshoe,
            title: 'Skating Shoe',
            price: 1250,
            description: 'High-quality skating shoes for smooth rides.',
        },
        {
            id: 70,
            img: tennisbat,
            title: 'Tennis Bat',
            price: 550,
            description: 'Lightweight tennis bat for improved performance.',
        },
    ],
    bookItems:[
        {
            id: 71,
            img: harrypotter,
            title: 'Harry Potter',
            price: 2300,
            description: 'Complete set of Harry Potter books.',
        },
        {
            id: 72,
            img: newname,
            title: 'Write a New Name in the Book of Life',
            price: 1350,
            description: 'Inspirational book about life and self-discovery.',
        },
        {
            id: 73,
            img: readinglist,
            title: 'The Reading List',
            price: 1580,
            description: 'Novel about the transformative power of books.',
        },
        {
            id: 74,
            img: strangebook,
            title: 'Stranger in a Strange Land',
            price: 1900,
            description: 'Science fiction classic by Robert A. Heinlein.',
        },
    ]
};

export default Data;