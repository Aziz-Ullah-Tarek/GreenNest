import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signIn, signInWithGoogle, resetPassword } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success('Logged in successfully!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Incorrect password. Please try again.');
                } else if (error.code === 'auth/user-not-found') {
                    toast.error('No account found with this email.');
                } else if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid email address.');
                } else if (error.code === 'auth/invalid-credential') {
                    toast.error('Invalid email or password.');
                } else {
                    toast.error('Login failed: ' + error.message);
                }
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Logged in with Google successfully!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error('Google login failed: ' + error.message);
            });
    };

    const handleForgotPassword = () => {
        if (!email) {
            toast.warning('Please enter your email address first!');
            return;
        }

        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent! Check your inbox.');
            })
            .catch(error => {
                toast.error('Failed to send reset email: ' + error.message);
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
                                🌿 Welcome Back
                            </h2>
                            <p className="text-gray-600">
                                Login to continue your plant journey
                            </p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin}>
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                        placeholder="Enter your password"
                                        className="input input-bordered w-full focus:outline-green-500 pr-16"
                                        required 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-green-600 hover:text-green-700 font-medium"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="mb-4">
                                <button 
                                    type="button"
                                    onClick={handleForgotPassword}
                                    className="text-sm text-green-600 hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <div className="mt-6">
                                <button 
                                    type="submit"
                                    className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Google Login Button */}
                        <button 
                            onClick={handleGoogleLogin}
                            className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white w-full"
                        >
                            <FaGoogle size={20} />
                            Continue with Google
                        </button>

                        {/* Signup Link */}
                        <div className="text-center mt-4">
                            <p className="text-gray-600">
                                Don't have an account?{' '}
                                <Link 
                                    to="/register" 
                                    className="text-green-600 font-semibold hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;