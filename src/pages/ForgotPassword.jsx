import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!email) {
            toast.warning('Please enter your email address!');
            return;
        }

        setLoading(true);

        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent! Check your inbox.');
                setEmail('');
                
                // Open Gmail
                setTimeout(() => {
                    window.open('https://mail.google.com', '_blank');
                }, 2000);
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    toast.error('No account found with this email.');
                } else if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid email address.');
                } else {
                    toast.error('Failed to send reset email: ' + error.message);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        {/* Back Button */}
                        <Link 
                            to="/login" 
                            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
                        >
                            <FaArrowLeft />
                            <span>Back to Login</span>
                        </Link>

                        {/* Title */}
                        <div className="text-center mb-6">
                            <h2 className="text-4xl font-bold text-green-700 mb-2">
                                🔒 Forgot Password
                            </h2>
                            <p className="text-gray-600">
                                Enter your email to receive a password reset link
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleResetPassword}>
                            {/* Email Field */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <FaEnvelope size={18} />
                                    </span>
                                    <input 
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full pl-10 focus:outline-green-500"
                                        required 
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full"
                                >
                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Reset Link'
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Info Message */}
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-sm text-blue-800">
                                <strong>Note:</strong> You'll receive an email with instructions to reset your password. 
                                The link will expire in 1 hour.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Register Link */}
                        <p className="text-center text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-green-600 hover:text-green-700 font-semibold">
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
