import React from 'react';
import { FaLeaf, FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaLeaf className="text-5xl text-green-600" />,
            title: "Premium Quality",
            description: "Handpicked plants from the finest nurseries, ensuring health and vitality for your space."
        },
        {
            icon: <FaShippingFast className="text-5xl text-blue-600" />,
            title: "Fast Delivery",
            description: "Safe and secure packaging with quick delivery right to your doorstep."
        },
        {
            icon: <FaHeadset className="text-5xl text-purple-600" />,
            title: "Expert Support",
            description: "24/7 plant care support from our certified horticulture experts."
        },
        {
            icon: <FaShieldAlt className="text-5xl text-orange-600" />,
            title: "Satisfaction Guaranteed",
            description: "30-day money-back guarantee if you're not completely satisfied."
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-6xl">🌿</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Why Choose GreenNest?
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-green-500 via-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
                    <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
                        We're more than just a plant store - we're your partner in creating a greener, healthier living space
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-300 hover:scale-105 group"
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 bg-linear-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                            <div className="text-green-100">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                            <div className="text-green-100">Plant Varieties</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-green-100">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-green-100">Expert Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
