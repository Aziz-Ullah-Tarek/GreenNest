import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [showPasswordError, setShowPasswordError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasUpperCase || !hasLowerCase || !hasMinLength) {
           
            return;
        }

        createUser(email, password)
            .then(() => {
                // Update user profile
                updateUserProfile(name, photoURL)
                    .then(() => {
                        toast.success('Account created successfully!');
                        navigate('/');
                    })
                    .catch(error => {
                        toast.error('Failed to update profile: ' + error.message);
                    });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('This email is already registered. Please login.');
                } else if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid email address.');
                } else if (error.code === 'auth/weak-password') {
                    toast.error('Password is too weak.');
                } else {
                    toast.error('Registration failed: ' + error.message);
                }
            });
    };

    const handleGoogleSignup = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Signed up with Google successfully!');
                navigate('/');
            })
            .catch(error => {
                toast.error('Google signup failed: ' + error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        {/* Title */}
                        <div className="text-center mb-6">
                            <h2 className="text-4xl font-bold text-green-700 mb-2">
                                🌱 Join GreenNest
                            </h2>
                            <p className="text-gray-600">
                                Create your account to start your plant journey
                            </p>
                        </div>

                        {/* Register Form */}
                        <form onSubmit={handleRegister}>
                            {/* Name Field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required 
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required 
                                />
                            </div>

                            {/* Photo URL Field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Photo URL
                                </label>
                                <input 
                                    type="url" 
                                    name="photoURL"
                                    placeholder="Enter your photo URL"
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required 
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Create a password"
                                        className="input input-bordered w-full focus:outline-green-500 pr-12"
                                        required
                                        value={password}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setPassword(value);
                                            
                                            // Validate password
                                            const hasUpperCase = /[A-Z]/.test(value);
                                            const hasLowerCase = /[a-z]/.test(value);
                                            const hasMinLength = value.length >= 6;
                                            
                                            // Show error only if password is invalid
                                            setShowPasswordError(value.length > 0 && (!hasUpperCase || !hasLowerCase || !hasMinLength));
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600"
                                    >
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </button>
                                </div>
                                {showPasswordError && (
                                    <p className="mt-2 text-xs text-red-500">
                                        Must contain at least 6 characters, one uppercase letter, and one lowercase letter
                                    </p>
                                )}
                            </div>

                            {/* Register Button */}
                            <div className="mt-6">
                                <button 
                                    type="submit"
                                    className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full"
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Google Signup Button */}
                        <button 
                            onClick={handleGoogleSignup}
                            className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white w-full"
                        >
                            <FaGoogle size={20} />
                            Continue with Google
                        </button>

                        {/* Login Link */}
                        <div className="text-center mt-4">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link 
                                    to="/login" 
                                    className="text-green-600 font-semibold hover:underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;