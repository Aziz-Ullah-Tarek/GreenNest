import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-green-300 to-blue-500 text-gray-800 mt-16">
            <div className="container mx-auto px-4 lg:px-8 py-10">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and About Section */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <span className="text-4xl">🌱</span>
                            <span className="text-2xl font-bold text-green-700">GreenNest</span>
                        </Link>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Your trusted partner for premium indoor plants. Bringing nature to your doorstep with expert care advice and quality products.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-green-700 mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            <Link to="/" className="link link-hover text-gray-700 hover:text-green-700 transition-colors">Home</Link>
                            <Link to="/plants" className="link link-hover text-gray-700 hover:text-green-700 transition-colors">All Plants</Link>
                            <Link to="/about" className="link link-hover text-gray-700 hover:text-green-700 transition-colors">About Us</Link>
                            <Link to="/contact" className="link link-hover text-gray-700 hover:text-green-700 transition-colors">Contact</Link>
                            <Link to="/support" className="link link-hover text-gray-700 hover:text-green-700 transition-colors">Support</Link>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold text-green-700 mb-4">Connect With Us</h3>
                        <div className="flex gap-4">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-sm bg-white hover:bg-green-700 hover:text-white border-none transition-all"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-sm bg-white hover:bg-green-700 hover:text-white border-none transition-all"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-sm bg-white hover:bg-green-700 hover:text-white border-none transition-all"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-sm bg-white hover:bg-green-700 hover:text-white border-none transition-all"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>
                        </div>
                        <p className="text-sm text-gray-700 mt-4">
                            Email: info@greennest.com<br />
                            Phone: +1 (555) 123-4567
                        </p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-green-700/30 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-700">
                        Copyright © {new Date().getFullYear()} - GreenNest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;