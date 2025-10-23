import React, { useState, useEffect } from 'react';
import PlantCard from '../components/plant/PlantCard';

const Plants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        // Fetch plants data from public folder
        fetch('/plants.json')
            .then(response => response.json())
            .then(data => {
                setPlants(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading plants:', error);
                setLoading(false);
            });
    }, []);

    // Get unique categories
    const categories = ['All', ...new Set(plants.map(plant => plant.category))];

    // Filter plants by category
    const filteredPlants = selectedCategory === 'All' 
        ? plants 
        : plants.filter(plant => plant.category === selectedCategory);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-4">
                Our Plant Collection 🌿
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Browse our curated selection of beautiful indoor plants
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`btn btn-sm ${
                            selectedCategory === category 
                                ? 'bg-green-600 text-white hover:bg-green-700' 
                                : 'btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                    <span className="loading loading-spinner loading-lg text-green-600"></span>
                </div>
            ) : (
                <>
                    <div className="text-center mb-6 text-green-500 font-bold text-4xl ">
                        Showing {filteredPlants.length} {filteredPlants.length === 1 ? 'plant' : 'plants'}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPlants.map(plant => (
                            <PlantCard key={plant.plantId} plant={plant} />
                        ))}
                    </div>

                    {filteredPlants.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No plants found in this category.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Plants;
