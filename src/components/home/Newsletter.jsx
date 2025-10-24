import React, { useState } from 'react';
import { FaEnvelope, FaLeaf } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            toast.success('Thank you for subscribing! 🌱');
            setEmail('');
        }
    };

    return (
        <section className="py-10 bg-linear-to-r from-green-600 via-green-500 to-teal-500 relative overflow-hidden mb-8">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full filter blur-2xl"></div>
            
            {/* Floating leaf decorations */}
            <div className="absolute top-10 left-20 text-white/20 text-4xl">🌿</div>
            <div className="absolute bottom-20 right-32 text-white/20 text-3xl">🍃</div>
            <div className="absolute top-32 right-20 text-white/20 text-3xl">🌱</div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold mb-6">
                        <FaLeaf />
                        <span>Join Our Community</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get Plant Care Tips & Special Offers! 🌿
                    </h2>
                    
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Subscribe to our newsletter and receive expert plant care advice, 
                        exclusive discounts, and new arrival notifications straight to your inbox.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg bg-white text-green-600 hover:bg-gray-100 border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </form>
                    
                    <p className="text-white/80 text-sm mt-6">
                        🔒 We respect your privacy. Unsubscribe at any time.
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">15K+</div>
                            <div className="text-white/80 text-sm md:text-base">Newsletter Subscribers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">Weekly</div>
                            <div className="text-white/80 text-sm md:text-base">Expert Tips</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">20%</div>
                            <div className="text-white/80 text-sm md:text-base">Welcome Discount</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
