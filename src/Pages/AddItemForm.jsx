// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../Components/CartContext';

// const AddItemForm = (props) => {
//     const { addItem } = useContext(CartContext);

//     const [item, setItem] = useState({
//         title: '',
//         description: '',
//         price: '',
//         img: '',
//         imgName: '',
//         category: 'fruitItems',
//         quantity: ''
//     });

//     const handleChange = (e) => {
//         const { name, value, type } = e.target;
//         if (type === 'file') {
//             handleImageUpload(e);
//         } else {
//             setItem((prevItem) => ({
//                 ...prevItem,
//                 [name]: value
//             }));
//         }
//     };

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         setItem((prevItem) => ({
//             ...prevItem,
//             img: URL.createObjectURL(file),
//             imgName: file.name
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!item.title || !item.description || !item.price || !item.img || !item.quantity) {
//             alert('Please fill out all fields');
//             return;
//         }
    
//         try {
//             const response = await fetch('http://localhost:3000/items', { 
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(item),
//             });
    
//             if (!response.ok) {
//                 throw new Error('Failed to add item');
//             }
    
//             const newItem = await response.json();
//             addItem(newItem, item.category);
//             setItem({
//                 title: '',
//                 description: '',
//                 price: '',
//                 img: '',
//                 imgName: '',
//                 category: 'fruitItems',
//                 quantity: ''
//             });
//             alert('Item added successfully!');
            
//             // Redirect to main page after adding item
//             window.location.href = '/';
//         } catch (error) {
//             console.error('Error adding item:', error.message);
//             alert('Failed to add item');
//         }
//     };
    

//     return (
//         <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl">
//                 <div className="p-8">
//                     <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Add New Item</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-1 gap-6">
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-2" htmlFor="title">Title</label>
//                                 <input
//                                     type="text"
//                                     id="title"
//                                     name="title"
//                                     value={item.title}
//                                     onChange={handleChange}
//                                     className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
//                                 <textarea
//                                     id="description"
//                                     name="description"
//                                     value={item.description}
//                                     onChange={handleChange}
//                                     className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                                     rows="4"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4 grid grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
//                                     <input
//                                         type="number"
//                                         id="price"
//                                         name="price"
//                                         value={item.price}
//                                         onChange={handleChange}
//                                         className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-gray-700 mb-2" htmlFor="quantity">Quantity</label>
//                                     <input
//                                         type="number"
//                                         id="quantity"
//                                         name="quantity"
//                                         value={item.quantity}
//                                         onChange={handleChange}
//                                         className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-2">Image</label>
//                                 <label htmlFor="img" className="cursor-pointer block w-full p-3 rounded border border-gray-300 bg-gray-200 text-center hover:bg-gray-300">
//                                     {item.imgName ? (
//                                         <span>{item.imgName}</span>
//                                     ) : (
//                                         <span>Choose Image</span>
//                                     )}
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         id="img"
//                                         name="img"
//                                         onChange={handleChange}
//                                         className="hidden"
//                                         required
//                                     />
//                                 </label>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
//                                 <select
//                                     id="category"
//                                     name="category"
//                                     value={item.category}
//                                     onChange={handleChange}
//                                     className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                                 >
//                                     <option value="groceryItems">Grocery</option>
//                                     <option value="fruitItems">Fruits</option>
//                                     <option value="vegetableItems">Vegetables</option>
//                                     <option value="stationaryItems">Stationary</option>
//                                     <option value="householdItems">Household</option>
//                                     <option value="bakeryItems">Bakery</option>
//                                     <option value="kidsItems">Kids</option>
//                                     <option value="sportsItems">Sports</option>
//                                     <option value="bookItems">Books</option>
//                                 </select>
//                             </div>
//                             <button type="submit" className="w-full p-3 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Add Item</button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="bg-gray-100 text-gray-700 py-4 px-6 text-center">
//                     <Link to="/" className="text-blue-500 hover:underline">
//                         Continue Shopping
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddItemForm;


import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Components/CartContext';

const AddItemForm = () => {
  const { addItem } = useContext(CartContext);

  const [item, setItem] = useState({
    title: '',
    description: '',
    price: '',
    img: '',
    imgName: '',
    category: 'fruitItems',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      handleImageUpload(e);
    } else {
      setItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setItem((prevItem) => ({
      ...prevItem,
      img: URL.createObjectURL(file),
      imgName: file.name,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!item.title || !item.description || !item.price || !item.img || !item.quantity) {
      alert('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      const newItem = await response.json();
      addItem(newItem, item.category);
      setItem({
        title: '',
        description: '',
        price: '',
        img: '',
        imgName: '',
        category: 'fruitItems',
        quantity: '',
      });
      alert('Item added successfully!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error adding item:', error.message);
      alert('Failed to add item');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl">
        <div className="p-8">
          <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Add New Item</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={item.title}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={item.description}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={item.price}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="quantity">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={item.quantity}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Image</label>
                <label
                  htmlFor="img"
                  className="cursor-pointer block w-full p-3 rounded border border-gray-300 bg-gray-200 text-center hover:bg-gray-300"
                >
                  {item.imgName ? <span>{item.imgName}</span> : <span>Choose Image</span>}
                  <input
                    type="file"
                    accept="image/*"
                    id="img"
                    name="img"
                    onChange={handleChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
              <button type="submit" className="w-full p-3 rounded bg-blue-600 text-white hover:bg-blue-700">
                Add Item
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 text-gray-700 py-4 px-6 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
