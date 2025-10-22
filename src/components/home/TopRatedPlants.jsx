import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../plant/PlantCard';

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
        <section className="py-16 bg-linear-to-b from-white to-green-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        🌟 Top Rated Indoor Plants
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Handpicked favorites loved by our plant parent community
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <span className="loading loading-spinner loading-lg text-green-600"></span>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {plants.map((plant) => (
                                <PlantCard key={plant.plantId} plant={plant} />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link 
                                to="/plants"
                                className="btn btn-lg btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600"
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
