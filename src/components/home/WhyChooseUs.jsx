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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Why Choose GreenNest? 🌿
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We're more than just a plant store - we're your partner in creating a greener, healthier living space
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
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
                <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white">
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
