// // SignIn.jsx
// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate(); // Use useNavigate for programmatic navigation

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add form submission logic here (e.g., API call, authentication)
//         // On successful login:
//         navigate('/'); // Redirect to home page or any other page upon successful login
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-3">
//                         <div>
//                             <input
//                                 id="emailSignIn"
//                                 name="email"
//                                 type="email"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border
//                                 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
//                                 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Email Address"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="passwordSignIn"
//                                 name="password"
//                                 type="password"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border
//                                 border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none
//                                 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 placeholder="Password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent
//                             text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none
//                             focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                         >
//                             Sign In
//                         </button>
//                     </div>
//                 </form>
//                 <div className="text-sm text-center">
//                     <p className="text-gray-600">Don't have an account?</p>
//                     <NavLink to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign Up</NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (!formData.email || !formData.password) {
            setError("Email and Password are required");
            return;
        }

        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (formData.email === storedEmail && formData.password === storedPassword) {
            setError('');
            navigate('/home'); // Redirect to home if login is successful
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-3">
                        <div>
                            <input
                                id="emailSignIn"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                id="passwordSignIn"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Display error message if validation fails */}
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="text-sm text-center">
                    <p className="text-gray-600">Don&apos;t have an account?</p> {/* Changed the apostrophe here */}
                    <NavLink to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;






