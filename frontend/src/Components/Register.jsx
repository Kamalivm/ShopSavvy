import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("User");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await axios.post("http://localhost:2000/register", {
                name,
                phone,
                role,
                email,
                password
            });

            navigate("/");
        } catch (error) {
            setError(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative bg-white/80 backdrop-blur-md p-10 shadow-2xl rounded-xl w-full max-w-lg border border-gray-300 text-black"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center tracking-wide text-black"
                >
                    ShopSavvy
                </motion.h1>

                {error && (
                    <motion.p className="text-red-500 text-center mt-4 font-semibold">{error}</motion.p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <div>
                        <label className="block font-semibold text-lg mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg placeholder-gray-500"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-lg mb-1">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg placeholder-gray-500"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-lg mb-1">Role</label>
                        <select
                            className="w-full p-3 bg-white border border-gray-300 text-gray-700 rounded-lg"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold text-lg mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg placeholder-gray-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-lg mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-3 bg-white border border-gray-300 rounded-lg placeholder-gray-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" className="absolute right-3 top-3 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold text-lg mb-1">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg placeholder-gray-500"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="bg-blue-600 text-white text-lg px-5 py-3 rounded-full w-full">
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-lg mt-6 text-black">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 hover:underline ml-1">Login</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Register;
