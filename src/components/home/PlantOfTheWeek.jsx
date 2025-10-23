import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaLeaf, FaCrown } from 'react-icons/fa';

const PlantOfTheWeek = () => {
    const [featuredPlant, setFeaturedPlant] = useState(null);

    useEffect(() => {
        fetch('/plants.json')
            .then(res => res.json())
            .then(data => {
                // Select the highest-rated plant
                const sortedByRating = [...data].sort((a, b) => b.rating - a.rating);
                setFeaturedPlant(sortedByRating[0]);
            })
            .catch(error => console.error('Error loading plant data:', error));
    }, []);

    if (!featuredPlant) {
        return null;
    }

    return (
        <div className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-green-800 mb-3 flex items-center justify-center gap-3">
                        <FaCrown className="text-yellow-500" />
                        Plant of the Week
                        <FaCrown className="text-yellow-500" />
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our featured plant - specially selected for you this week!
                    </p>
                </div>

                {/* Featured Plant Card */}
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-yellow-400">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-96 md:h-auto">
                            <img 
                                src={featuredPlant.image} 
                                alt={featuredPlant.plantName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                                <FaCrown />
                                Featured
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            {/* Category */}
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                <FaLeaf className="text-green-600" />
                                {featuredPlant.category}
                            </div>

                            {/* Plant Name */}
                            <h3 className="text-3xl font-bold text-gray-800 mb-3">
                                {featuredPlant.plantName}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar 
                                        key={i} 
                                        className={i < Math.floor(featuredPlant.rating) ? 'text-yellow-500' : 'text-gray-300'}
                                    />
                                ))}
                                <span className="text-gray-700 font-semibold ml-2">
                                    {featuredPlant.rating} / 5.0
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {featuredPlant.description}
                            </p>

                            {/* Price and Stock */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Price</p>
                                    <p className="text-2xl font-bold text-green-600">${featuredPlant.price}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Stock</p>
                                    <p className="text-2xl font-bold text-green-600">{featuredPlant.availableStock > 0 ? 'Available' : 'Out of Stock'}</p>
                                </div>
                            </div>

                            {/* Special Offer */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                                <p className="text-yellow-800 font-semibold flex items-center gap-2">
                                    <FaCrown className="text-yellow-600" />
                                    Special Offer: Get 15% OFF on this week's featured plant!
                                </p>
                            </div>

                            {/* Button */}
                            <Link 
                                to={`/plant/${featuredPlant.plantId}`}
                                className="btn btn-success w-full text-white text-lg"
                            >
                                View Details & Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Fun Fact */}
                <div className="max-w-3xl mx-auto mt-10">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <h4 className="text-lg font-bold text-green-800 mb-2 flex items-center justify-center gap-2">
                            <FaLeaf className="text-green-600" />
                            Did You Know?
                        </h4>
                        <p className="text-gray-700">
                            Plants can boost your mood, improve air quality, and increase productivity by up to 15%! 🌿
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantOfTheWeek;
