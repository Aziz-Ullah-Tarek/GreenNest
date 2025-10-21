import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PlantDeatils = () => {
    const { id } = useParams();
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
                    Plant Details
                </h1>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="text-center text-gray-600">
                            Showing details for Plant ID: {id}
                        </p>
                        <p className="text-center text-gray-500 mt-4">
                            Plant details will be loaded from JSON data
                        </p>
                        <div className="card-actions justify-center mt-6">
                            <Link to="/plants" className="btn btn-outline btn-sm">
                                ← Back to Plants
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDeatils;
