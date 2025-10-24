import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../plant/PlantCard';
import Loader from '../ui/Loader';

const TopRatedPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch plants data from public folder
        fetch('/plants.json')
            .then(response => response.json())
            .then(data => {
                // Get top 6 rated plants
                const topPlants = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 6);
                setPlants(topPlants);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading plants:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-20 bg-linear-to-b from-white via-green-50/50 to-white relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-6xl animate-pulse">🌟</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Top Rated Indoor Plants
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Handpicked favorites loved by our plant parent community
                    </p>
                </div>

                {loading ? (
                    <Loader size="lg" />
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {plants.map((plant) => (
                                <PlantCard key={plant.plantId} plant={plant} />
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <Link 
                                to="/plants"
                                className="btn btn-lg bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                View All Plants
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default TopRatedPlants;
