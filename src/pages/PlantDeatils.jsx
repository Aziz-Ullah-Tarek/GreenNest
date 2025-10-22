import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PlantDeatils = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch plants data from public folder
        fetch('/plants.json')
            .then(response => response.json())
            .then(data => {
                const foundPlant = data.find(p => p.plantId === parseInt(id));
                setPlant(foundPlant);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading plant details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner loading-lg text-green-600"></span>
            </div>
        );
    }

    if (!plant) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Plant Not Found</h1>
                    <p className="text-gray-600 mb-6">Sorry, we couldn't find the plant you're looking for.</p>
                    <Link to="/plants" className="btn bg-green-600 hover:bg-green-700 text-white border-none">
                        ← Back to Plants
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumb */}
                <div className="text-sm breadcrumbs mb-6">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/plants">Plants</Link></li>
                        <li>{plant.plantName}</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Plant Image */}
                    <div className="relative">
                        <img 
                            src={plant.image} 
                            alt={plant.plantName}
                            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute top-4 right-4 badge badge-success gap-1 text-white badge-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {plant.rating}
                        </div>
                    </div>

                    {/* Plant Details */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            {plant.plantName}
                        </h1>
                        
                        <div className="flex items-center gap-3 mb-6">
                            <span className="badge badge-success badge-lg">{plant.careLevel}</span>
                            <span className="badge badge-outline badge-lg">{plant.category}</span>
                        </div>

                        <div className="text-4xl font-bold text-green-600 mb-6">
                            ${plant.price}
                        </div>

                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            {plant.description}
                        </p>

                        {/* Plant Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Provider</p>
                                <p className="font-semibold text-gray-800">{plant.providerName}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Available Stock</p>
                                <p className="font-semibold text-gray-800">{plant.availableStock} units</p>
                            </div>
                        </div>

                        {/* Stock Warning */}
                        {plant.availableStock <= 10 && (
                            <div className="alert alert-warning mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>Hurry! Only {plant.availableStock} left in stock</span>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-6">
                            <button className="btn btn-lg bg-green-600 hover:bg-green-700 text-white border-none flex-1">
                                Add to Cart
                            </button>
                            <button className="btn btn-lg btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="border-t pt-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Plant Care Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Care Level</p>
                                        <p className="font-semibold text-gray-800">{plant.careLevel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-12 text-center">
                    <Link to="/plants" className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                        ← Back to All Plants
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantDeatils;
