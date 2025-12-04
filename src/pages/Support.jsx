import React, { useState } from 'react';
import { FaQuestionCircle, FaShippingFast, FaUndo, FaLeaf, FaTools, FaHeadset } from 'react-icons/fa';

const Support = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How do I care for my new plant?",
            answer: "Each plant comes with a detailed care guide. Generally, ensure proper lighting, water when soil is dry, and maintain appropriate humidity levels. Our experts are available 24/7 for personalized advice."
        },
        {
            question: "What is your shipping policy?",
            answer: "We offer free shipping on orders over $50. Plants are carefully packaged and shipped within 1-2 business days. Delivery typically takes 3-5 business days depending on your location."
        },
        {
            question: "What if my plant arrives damaged?",
            answer: "We have a 100% satisfaction guarantee. If your plant arrives damaged, contact us within 48 hours with photos, and we'll send a replacement or provide a full refund immediately."
        },
        {
            question: "Can I return a plant?",
            answer: "Yes! We offer a 30-day return policy. If you're not satisfied with your plant, return it in its original condition for a full refund. Return shipping is free for damaged or incorrect items."
        },
        {
            question: "Do you offer plant consultation services?",
            answer: "Absolutely! Our certified horticulturists are available for free consultations. You can book a consultation directly from any plant's detail page or contact our support team."
        },
        {
            question: "How often should I water my plants?",
            answer: "Watering frequency depends on the plant type, season, and environment. Most indoor plants prefer soil to dry out slightly between waterings. Check our plant care guides or consult with our experts for specific recommendations."
        }
    ];

    const supportCategories = [
        {
            icon: <FaShippingFast className="text-4xl text-green-600" />,
            title: "Shipping & Delivery",
            description: "Track orders, shipping times, and delivery information"
        },
        {
            icon: <FaUndo className="text-4xl text-blue-600" />,
            title: "Returns & Refunds",
            description: "30-day return policy and refund process"
        },
        {
            icon: <FaLeaf className="text-4xl text-teal-600" />,
            title: "Plant Care",
            description: "Expert advice on watering, lighting, and maintenance"
        },
        {
            icon: <FaTools className="text-4xl text-purple-600" />,
            title: "Troubleshooting",
            description: "Solutions for common plant problems and issues"
        },
        {
            icon: <FaQuestionCircle className="text-4xl text-yellow-600" />,
            title: "Account & Orders",
            description: "Manage your account, orders, and preferences"
        },
        {
            icon: <FaHeadset className="text-4xl text-red-600" />,
            title: "Contact Support",
            description: "Speak with our customer service team"
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="bg-linear-to-r from-green-300 to-blue-500 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Support Center</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        We're here to help you grow! Find answers and get support 🌱
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Support Categories */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">How Can We Help?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {supportCategories.map((category, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                                </div>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full text-left p-6 flex justify-between items-center hover:bg-green-50 transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-gray-800 pr-4">
                                        {faq.question}
                                    </h3>
                                    <span className={`text-2xl text-green-600 transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                                        +
                                    </span>
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support CTA */}
                <div className="mt-16 bg-linear-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Still Need Help?
                    </h2>
                    <p className="text-xl mb-6 text-white/90">
                        Our support team is available 24/7 to assist you
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/contact"
                            className="btn btn-lg bg-white text-green-600 hover:bg-gray-100 border-none"
                        >
                            Contact Support
                        </a>
                        <a 
                            href="mailto:support@greennest.com"
                            className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-green-600"
                        >
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
