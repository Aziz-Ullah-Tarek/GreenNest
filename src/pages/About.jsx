import React from 'react';
import { FaLeaf, FaUsers, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="bg-linear-to-r from-green-300 to-blue-500 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About GreenNest</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Bringing nature closer to you, one plant at a time 🌱
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">Our Story</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Founded in 2020, GreenNest started with a simple mission: to make plant ownership accessible, 
                        enjoyable, and rewarding for everyone. We believe that every home deserves the beauty and benefits 
                        of indoor plants.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        What began as a small nursery has grown into a thriving online community of plant lovers. 
                        Today, we serve thousands of customers nationwide, providing not just plants, but expertise, 
                        guidance, and ongoing support.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Plants</h3>
                        <p className="text-gray-600">Hand-selected, healthy plants from trusted nurseries</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                        <p className="text-gray-600">Join 15,000+ plant parents in our growing community</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <FaAward className="text-5xl text-yellow-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Expertise</h3>
                        <p className="text-gray-600">Certified horticulturists available 24/7</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <FaHeart className="text-5xl text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction</h3>
                        <p className="text-gray-600">98% customer satisfaction rate with 30-day guarantee</p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        To inspire and empower people to create greener, healthier living spaces through 
                        premium indoor plants, expert guidance, and exceptional customer service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
