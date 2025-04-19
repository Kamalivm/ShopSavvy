import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!email.trim() || !password.trim()) {
            setError("Email and Password are required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:2000/login", { email, password });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);

            setSuccess(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            setError(error.response?.data?.message || "Invalid email or password");
        }
    };

    return (
        <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative bg-white/80 backdrop-blur-md p-10 shadow-2xl rounded-xl w-full max-w-lg border border-gray-300 text-black"
            >
                <motion.h1 className="text-5xl font-extrabold text-center tracking-wide">
                    ShopSavvy
                </motion.h1>
                <motion.p className="text-center text-lg mt-2 italic">
                    "Shop Smart, Shop Savvy!"
                </motion.p>

                {error && <motion.p className="text-red-500 text-center mt-4 font-semibold">{error}</motion.p>}
                {success && <motion.p className="text-green-600 text-center mt-4 font-semibold">Login Successful! Redirecting...</motion.p>}

                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <motion.div>
                        <label className="block font-semibold text-lg mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </motion.div>

                    <motion.div>
                        <label className="block font-semibold text-lg mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" className="absolute right-3 top-3 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </motion.div>

                    <motion.div className="flex justify-between items-center">
                        <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">Forgot Password?</Link>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-5 py-3 rounded-full w-full mt-4 shadow-lg hover:shadow-2xl"
                    >
                        Login
                    </motion.button>
                </form>

                <motion.p className="text-center text-lg mt-6">
                    Don't have an account? <Link to="/register" className="text-blue-600 hover:underline ml-1">Sign Up</Link>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Login;
