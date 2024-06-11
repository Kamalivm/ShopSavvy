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
            quantity: 20
        },
        {
            id: 2,
            img: oil,
            title: 'Oil',
            price: 110,
            description: 'Pure vegetable oil, ideal for cooking and frying.',
            quantity: 15
        },
        {
            id: 3,
            img: sugar,
            title: 'White Sugar',
            price: 35,
            description: 'Fine white sugar, perfect for baking and sweetening.',
            quantity: 25
        },
        {
            id: 4,
            img: salt,
            title: 'Salt',
            price: 30,
            description: 'Table salt, essential for seasoning and preserving food.',
            quantity: 30
        },
        {
            id: 5,
            img: soap,
            title: 'Soap',
            price: 45,
            description: 'Gentle soap for everyday use, suitable for all skin types.',
            quantity: 40
        },
        {
            id: 6,
            img: shampoo,
            title: 'Shampoo',
            price: 92,
            description: 'Revitalizing shampoo for clean and healthy hair.',
            quantity: 20
        },
        {
            id: 7,
            img: toothpaste,
            title: 'ToothPaste',
            price: 50,
            description: 'Fluoride toothpaste for strong teeth and fresh breath.',
            quantity: 35
        },
        {
            id: 8,
            img: toothbrush,
            title: 'ToothBrush',
            price: 20,
            description: 'Soft-bristle toothbrush for gentle yet effective cleaning.',
            quantity: 30
        }
    ],
    stationaryItems:[
        {
            id: 9,
            img: pen,
            title: 'Pen',
            price: 35,
            description: 'Smooth writing ballpoint pen.',
            quantity: 50
        },
        {
            id: 10,
            img: pencil,
            title: 'Pencil',
            price: 15,
            description: 'High-quality graphite pencil for writing and drawing.',
            quantity: 50
        },
        {
            id: 11,
            img: eraser,
            title: 'Eraser',
            price: 20,
            description: 'Soft eraser that removes pencil marks cleanly.',
            quantity: 50
        },
        {
            id: 12,
            img: scale,
            title: 'Scale',
            price: 25,
            description: 'Durable 30cm scale for precise measurements.',
            quantity: 40
        },
        {
            id: 13,
            img: sharpner,
            title: 'Sharpner',
            price: 5,
            description: 'Compact sharpener for easy pencil sharpening.',
            quantity: 40
        },
        {
            id: 14,
            img: note,
            title: 'Note',
            price: 50,
            description: 'Notebook with 200 pages for writing and note-taking.',
            quantity: 20
        }
    ],
    fruitItems: [
        {
            id: 15,
            img: apple,
            title: 'Apple',
            price: 150,
            description: 'Fresh and crispy apples, rich in fiber and vitamins.',
            quantity: 30
        },
        {
            id: 16,
            img: strawberry,
            title: 'Strawberry',
            price: 90,
            description: 'Sweet and juicy strawberries, perfect for desserts.',
            quantity: 25
        },
        {
            id: 17,
            img: melon,
            title: 'Melon',
            price: 30,
            description: 'Refreshing melon, great for hydration.',
            quantity: 20
        },
        {
            id: 18,
            img: mango,
            title: 'Mango',
            price: 25,
            description: 'Ripe and juicy mangoes, rich in vitamins.',
            quantity: 35
        },
        {
            id: 19,
            img: kiwi,
            title: 'Kiwi',
            price: 95,
            description: 'Tangy and nutritious kiwis, high in Vitamin C.',
            quantity: 25
        },
        {
            id: 20,
            img: grapes,
            title: 'Grapes',
            price: 40,
            description: 'Sweet and seedless grapes, perfect to taste',
            quantity: 40
        },
        {
            id: 21,
            img: orange,
            title: 'Orange',
            price: 60,
            description: 'Juicy oranges, excellent source of Vitamin C.',
            quantity: 50
        },
        {
            id: 22,
            img: amla,
            title: 'Amla',
            price: 20,
            description: 'Indian gooseberry, known for its high Vitamin C content.',
            quantity: 30
        }
    ],
    vegetableItems: [
        {
            id: 23,
            img: pumpkin,
            title: 'Pumpkin',
            price: 20,
            description: 'Fresh pumpkin, ideal for soups and pies.',
            quantity: 20
        },
        {
            id: 24,
            img: carrot,
            title: 'Carrot',
            price: 30,
            description: 'Crunchy carrots, great for salads and snacking.',
            quantity: 25
        },
        {
            id: 25,
            img: onion,
            title: 'Onion',
            price: 50,
            description: 'Versatile onions, essential for many dishes.',
            quantity: 30
        },
        {
            id: 26,
            img: cabbage,
            title: 'Cabbage',
            price: 15,
            description: 'Fresh cabbage, perfect for salads and stir-fries.',
            quantity: 20
        },
        {
            id: 27,
            img: potato,
            title: 'Potato',
            price: 50,
            description: 'Staple potatoes, great for boiling, baking, or frying.',
            quantity: 35
        },
        {
            id: 28,
            img: tomato,
            title: 'Tomato',
            price: 50,
            description: 'Juicy tomatoes, perfect for salads and cooking.',
            quantity: 40
        },
        {
            id: 29,
            img: corn,
            title: 'Corn',
            price: 30,
            description: 'Sweet corn, great for boiling and grilling.',
            quantity: 25
        },
        {
            id: 30,
            img: brinjal,
            title: 'Brinjal',
            price: 12,
            description: 'Fresh brinjals, perfect for grilling and curries.',
            quantity: 30
        },
        {
            id: 31,
            img: bittergourd,
            title: 'Bitter Gourd',
            price: 10,
            description: 'Bitter gourd, known for its health benefits.',
            quantity: 20
        },
        {
            id: 32,
            img: ladiesfinger,
            title: 'Ladies Finger',
            price: 10,
            description: 'Fresh ladies fingers, great for stir-fries and curries.',
            quantity: 30
        },
    ],
    householdItems:[
        {
            id: 33,
            img: broom,
            title: 'Broom Stick',
            price: 60,
            description: 'Durable broom stick for effective cleaning.',
            quantity: 20
        },
        {
            id: 34,
            img: bucket,
            title: 'Bucket',
            price: 75,
            description: 'Sturdy plastic bucket for various uses.',
            quantity: 25
        },
        {
            id: 35,
            img: cooler,
            title: 'Air Cooler',
            price: 3500,
            description: 'Efficient air cooler for hot summer days.',
            quantity: 5
        },
        {
            id: 36,
            img: curtain,
            title: 'Curtain',
            price: 250,
            description: 'Beautiful curtain to enhance your room decor.',
            quantity: 15
        },
        {
            id: 37,
            img: fan,
            title: 'Table Fan',
            price: 200,
            description: 'Portable table fan for instant cooling.',
            quantity: 20
        },
        {
            id: 38,
            img: hairdryer,
            title: 'Hair Dryer',
            price: 190,
            description: 'Compact hair dryer for quick drying.',
            quantity: 10
        },
        {
            id: 39,
            img: iron,
            title: 'Iron Box',
            price: 150,
            description: 'Reliable iron box for smooth and wrinkle-free clothes.',
            quantity: 10
        },
        {
            id: 40,
            img: jar,
            title: 'Glass Jar',
            price: 120,
            description: 'Glass jar for storing kitchen essentials.',
            quantity: 20
        },
        {
            id: 41,
            img: ladder,
            title: 'Steel Ladder',
            price: 350,
            description: 'Sturdy steel ladder for household use.',
            quantity: 5
        },
        {
            id: 42,
            img: lamp,
            title: 'Lamp',
            price: 220,
            description: 'Elegant lamp for your study or bedside.',
            quantity: 10
        },
    ],
    bakeryItems:[
        {
            id: 43,
            img: bourbon,
            title: 'Bourbon',
            price: 30,
            description: 'Chocolate cream biscuits, perfect for tea time.',
            quantity: 30
        },
        {
            id: 44,
            img: bread,
            title: 'Bread',
            price: 25,
            description: 'Freshly baked bread, perfect for sandwiches.',
            quantity: 40
        },
        {
            id: 45,
            img: chocofills,
            title: 'Choco Fills',
            price: 40,
            description: 'Delicious cookies filled with chocolate.',
            quantity: 20
        },
        {
            id: 46,
            img: chocolate,
            title: 'Chocolate',
            price: 200,
            description: 'Rich and creamy chocolate bar.',
            quantity: 15
        },
        {
            id: 47,
            img: chocos,
            title: 'Chocos',
            price: 10,
            description: 'Chocolate-flavored cereal for a tasty breakfast.',
            quantity: 25
        },
        {
            id: 48,
            img: cookies,
            title: 'Cookies',
            price: 60,
            description: 'Crispy and delicious cookies.',
            quantity: 35
        },
        {
            id: 49,
            img: gems,
            title: 'Gems',
            price: 10,
            description: 'Colorful candy-coated chocolate gems.',
            quantity: 30
        },
        {
            id: 50,
            img: hideandseek,
            title: 'Hide And Seek',
            price: 25,
            description: 'Chocolate chip cookies.',
            quantity: 20
        },
        {
            id: 51,
            img: jimjam,
            title: 'JimJam',
            price: 35,
            description: 'Biscuits with jam filling.',
            quantity: 25
        },
        {
            id: 52,
            img: kisses,
            title: 'Kisses',
            price: 65,
            description: 'Chocolate Kisses candies.',
            quantity: 15
        },
        {
            id: 53,
            img: kitkat,
            title: 'Kitkat',
            price: 20,
            description: 'Crispy wafer bars covered with chocolate.',
            quantity: 30
        },
        {
            id: 54,
            img: lays1,
            title: 'Blue Lays',
            price: 10,
            description: 'Salted potato chips.',
            quantity: 40
        },
        {
            id: 55,
            img: lays2,
            title: 'Yellow Lays',
            price: 10,
            description: 'Potato chips with a hint of lemon.',
            quantity: 35
        },
        {
            id: 56,
            img: lays3,
            title: 'Green Lays',
            price: 35,
            description: 'Spicy green potato chips.',
            quantity: 25
        },
        {
            id: 57,
            img: milkbikis,
            title: 'MilkBikis Biscuit',
            price: 15,
            description: 'Milk-flavored biscuits.',
            quantity: 40
        },
        {
            id: 58,
            img: silkbubbly,
            title: 'Silk Bubbly',
            price: 25,
            description: 'Silk chocolate with bubbles inside.',
            quantity: 20
        }
    ],
    babyItems:[
        {
            id: 59,
            img: car,
            title: 'Toy Car',
            price: 150,
            description: 'Colorful toy car for kids.',
            quantity: 15
        },
        {
            id: 60,
            img: dancingcactus,
            title: 'Dancing Cactus Toy',
            price: 200,
            description: 'Funny dancing cactus toy.',
            quantity: 10
        },
        {
            id: 61,
            img: babylotion,
            title: 'Baby Lotion',
            price: 120,
            description: 'Gentle lotion for baby\'s soft skin.',
            quantity: 20
        },
        {
            id: 62,
            img: bsoap,
            title: 'Baby Soap',
            price: 50,
            description: 'Mild soap suitable for baby\'s delicate skin.',
            quantity: 25
        },
        {
            id: 63,
            img: bdress,
            title: 'Baby Dress',
            price: 180,
            description: 'Cute and comfortable dress for babies.',
            quantity: 15
        },
        {
            id: 64,
            img: btoys,
            title: 'Assorted Toys',
            price: 250,
            description: 'Set of assorted toys for toddlers.',
            quantity: 20
        },
        {
            id: 65,
            img: btowel,
            title: 'Baby Towel',
            price: 80,
            description: 'Soft towel for baby\'s bath time.',
            quantity: 25
        }
    ],
    sportsItems:[
        {
            id: 66,
            img: baseball,
            title: 'Baseball',
            price: 200,
            description: 'Baseball for outdoor sports.',
            quantity: 15
        },
        {
            id: 67,
            img: cricketbat,
            title: 'Cricket Bat',
            price: 500,
            description: 'Cricket bat for playing cricket.',
            quantity: 10
        },
        {
            id: 68,
            img: football,
            title: 'Football',
            price: 600,
            description: 'Football for playing soccer.',
            quantity: 12
        },
        {
            id: 69,
            img: skateshoe,
            title: 'Skate Shoes',
            price: 350,
            description: 'Shoes for skating.',
            quantity: 20
        },
        {
            id: 70,
            img: tennisbat,
            title: 'Tennis Bat',
            price: 450,
            description: 'Tennis bat for playing tennis.',
            quantity: 18
        }
    ],
    bookItems:[
        {
            id: 71,
            img: strangebook,
            title: 'Strange Book',
            price: 100,
            description: 'A mysterious book with strange stories.',
            quantity: 25
        },
        {
            id: 72,
            img: readinglist,
            title: 'Reading List Book',
            price: 80,
            description: 'Book containing a list of must-reads.',
            quantity: 30
        },
        {
            id: 73,
            img: newname,
            title: 'New Name Book',
            price: 120,
            description: 'Book about finding a new identity.',
            quantity: 20
        },
        {
            id: 74,
            img: harrypotter,
            title: 'Harry Potter Book',
            price: 300,
            description: 'The magical world of Harry Potter.',
            quantity: 10
        }
    ]
};

export default Data;
