// // SignUp.jsx
// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate(); // Using useNavigate hook
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }
//         // Add code to submit form data

//         // Redirect to the sign-in page
//         navigate('/signin');
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-3">
//                         <div>
//                             <input id="fullName" name="fullName" type="text" required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border
//                                 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
//                                 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Full Name"
//                                 value={formData.fullName}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <input id="emailSignUp" name="email" type="email" required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border
//                                 border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none
//                                 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Email Address"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <input id="passwordSignUp" name="password" type="password" required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border
//                                 border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none
//                                 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <input id="confirmPassword" name="confirmPassword" type="password" required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border
//                                 border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none
//                                 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Confirm Password"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <NavLink to='/home' type="submit"
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent
//                             text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none
//                             focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                             Sign Up
//                         </NavLink>
//                     </div>
//                 </form>
//                 <div className="text-sm text-center">
//                     <p className="text-gray-600">Already have an account?</p>
//                     <NavLink to="/signin" className="font-medium text-blue-600 hover:text-blue-500">Sign In</NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Register;   kamali akka


// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }
        
//         // Save credentials in localStorage (in real apps, use a backend database)
//         localStorage.setItem('userEmail', formData.email);
//         localStorage.setItem('userPassword', formData.password);

//         // Redirect to the sign-in page after successful sign-up
//         navigate('/signin');
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-3">
//                         <div>
//                             <input
//                                 id="fullName"
//                                 name="fullName"
//                                 type="text"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Full Name"
//                                 value={formData.fullName}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="emailSignUp"
//                                 name="email"
//                                 type="email"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Email Address"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="passwordSignUp"
//                                 name="password"
//                                 type="password"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="confirmPassword"
//                                 name="confirmPassword"
//                                 type="password"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Confirm Password"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//                 <div className="text-sm text-center">
//                     <p className="text-gray-600">Already have an account?</p>
//                     <NavLink to="/signin" className="font-medium text-blue-600 hover:text-blue-500">Sign In</NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register; 


//backend code 
// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }
        
//         // Save credentials in localStorage (in real apps, use a backend database)
//         localStorage.setItem('userEmail', formData.email);
//         localStorage.setItem('userPassword', formData.password);

//         // Redirect to the sign-in page after successful sign-up
//         navigate('/signin');
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-3">
//                         <div>
//                             <input
//                                 id="fullName"
//                                 name="fullName"
//                                 type="text"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Full Name"
//                                 value={formData.fullName}
//                                 onChange={handleChange}  // Correctly using handleChange
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="emailSignUp"
//                                 name="email"
//                                 type="email"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Email Address"
//                                 value={formData.email}
//                                 onChange={handleChange}  // Correctly using handleChange
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="passwordSignUp"
//                                 name="password"
//                                 type="password"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Password"
//                                 value={formData.password}
//                                 onChange={handleChange}  // Correctly using handleChange
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="confirmPassword"
//                                 name="confirmPassword"
//                                 type="password"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Confirm Password"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}  // Correctly using handleChange
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//                 <div className="text-sm text-center">
//                     <p className="text-gray-600">Already have an account?</p>
//                     <NavLink to="/signin" className="font-medium text-blue-600 hover:text-blue-500">Sign In</NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Send registration request to the backend
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('User registered successfully!');
                navigate('/signin');  // Redirect to Sign In page after successful registration
            } else {
                alert(data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error during registration');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-3">
                        <div>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                id="emailSignUp"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                id="passwordSignUp"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <p className="text-gray-600">Already have an account?</p>
                    <NavLink to="/signin" className="font-medium text-blue-600 hover:text-blue-500">Sign In</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;
