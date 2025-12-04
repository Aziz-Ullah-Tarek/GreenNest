import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully! We will get back to you soon.', {
            position: "top-center",
            autoClose: 3000
        });
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="bg-linear-to-r from-green-300 to-blue-500 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        We'd love to hear from you! Get in touch with our team 💬
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-green-700 mb-6">Get In Touch</h2>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Have a question about our plants, need care advice, or want to learn more about our services? 
                            We're here to help!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <FaEnvelope className="text-2xl text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                                    <p className="text-gray-600">info@greennest.com</p>
                                    <p className="text-gray-600">support@greennest.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <FaPhone className="text-2xl text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-gray-600">+1 (555) 987-6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <FaMapMarkerAlt className="text-2xl text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                                    <p className="text-gray-600">123 Green Street</p>
                                    <p className="text-gray-600">Plant City, PC 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-100 p-3 rounded-lg">
                                    <FaClock className="text-2xl text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Business Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-green-700 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="textarea textarea-bordered w-full focus:outline-green-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
