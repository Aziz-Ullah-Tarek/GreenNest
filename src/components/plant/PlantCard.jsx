import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = ({ plant }) => {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <figure className="relative h-64 overflow-hidden">
                <img 
                    src={plant.image} 
                    alt={plant.plantName}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 badge badge-success gap-1 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {plant.rating}
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-gray-800">
                    {plant.plantName}
                    <div className="badge badge-outline badge-sm">{plant.category}</div>
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                    {plant.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="badge badge-success badge-sm">{plant.careLevel}</span>
                    <span>•</span>
                    <span>{plant.availableStock} in stock</span>
                </div>
                <div className="card-actions justify-between items-center mt-4">
                    <div className="text-2xl font-bold text-green-600">
                        ${plant.price}
                    </div>
                    <Link 
                        to={`/plant/${plant.plantId}`}
                        className="btn btn-sm bg-green-600 hover:bg-green-700 text-white border-none"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
