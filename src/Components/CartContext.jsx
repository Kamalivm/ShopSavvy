// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//     // Cart state and handlers
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find(item => item.id === product.id);
//             if (existingItem) {
//                 return prevItems.map(item =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             } else {
//                 return [...prevItems, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     const removeFromCart = (productId) => {
//         setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
//     };

//     const incrementQuantity = (id) => {
//         setCartItems(prevItems =>
//             prevItems.map(item =>
//                 item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//         );
//     };

//     const decrementQuantity = (id) => {
//         setCartItems(prevItems =>
//             prevItems.map(item =>
//                 item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//             )
//         );
//     };

//     const [totalAmount, setTotalAmount] = useState(0);

//     const updateTotalAmount = (amount) => {
//         setTotalAmount(amount);
//     };

//     // Favorites state and handlers
//     const [favorites, setFavorites] = useState([]);

//     const toggleFavorite = (item) => {
//         let updatedFavorites;
//         if (favorites.some((fav) => fav.id === item.id)) {
//             // Remove from favorites if already present
//             updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
//         } else {
//             // Add to favorites
//             updatedFavorites = [...favorites, item];
//         }
//         setFavorites(updatedFavorites);
//     };

//     return (
//         <CartContext.Provider
//             value={{
//                 cartItems,
//                 addToCart,
//                 removeFromCart,
//                 incrementQuantity,
//                 decrementQuantity,
//                 totalAmount,
//                 updateTotalAmount,
//                 favorites,
//                 toggleFavorite,
//             }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// export default CartProvider;








import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Cart state and handlers
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const incrementQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const [totalAmount, setTotalAmount] = useState(0);

    const updateTotalAmount = (amount) => {
        setTotalAmount(amount);
    };

    // Favorites state and handlers
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (item) => {
        let updatedFavorites;
        if (favorites.some((fav) => fav.id === item.id)) {
            // Remove from favorites if already present
            updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
        } else {
            // Add to favorites
            updatedFavorites = [...favorites, item];
        }
        setFavorites(updatedFavorites);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                totalAmount,
                updateTotalAmount,
                favorites,
                toggleFavorite,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Add PropTypes validation for 'children'
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // ensures that 'children' is a valid React node
};

export default CartProvider;
