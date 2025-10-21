import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-green-600">404</h1>
                <h2 className="text-4xl font-semibold mt-4 mb-6">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link to="/" className="btn bg-green-600 hover:bg-green-700 text-white border-none">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
