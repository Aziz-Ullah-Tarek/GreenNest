import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaStar, FaLeaf, FaBox, FaUser, FaEnvelope } from 'react-icons/fa';

const PlantDeatils = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || ''
    });
    
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

    // Update form data when user logs in
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.displayName || '',
                email: user.email || ''
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleConsultationSubmit = (e) => {
        e.preventDefault();
        toast.success('Consultation booked successfully! We will contact you soon.', {
            position: "top-center",
            autoClose: 3000
        });
        // Clear form completely
        setFormData({
            name: '',
            email: ''
        });
    };

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Plant Image */}
                    <div className="relative">
                        <img 
                            src={plant.image} 
                            alt={plant.plantName}
                            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-lg shadow-lg">
                            <FaStar className="text-yellow-300" />
                            <span className="font-bold">{plant.rating}</span>
                        </div>
                   {plant.availableStock <= 10 && (
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-2 rounded-lg shadow-lg">
                                <span className="font-semibold">Only {plant.availableStock} left!</span>
                            </div>
                        )}
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                <FaStar className="text-yellow-500 text-2xl mx-auto mb-2" />
                                <p className="text-sm text-gray-600 mb-1">Rating</p>
                                <p className="font-bold text-gray-800 text-xl">{plant.rating}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                <FaBox className="text-green-600 text-2xl mx-auto mb-2" />
                                <p className="text-sm text-gray-600 mb-1">Stock</p>
                                <p className="font-bold text-gray-800 text-xl">{plant.availableStock}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                <FaLeaf className="text-green-600 text-2xl mx-auto mb-2" />
                                <p className="text-sm text-gray-600 mb-1">Care Level</p>
                                <p className="font-bold text-gray-800">{plant.careLevel}</p>
                            </div>
                        </div>

                        {/* Provider Info */}
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <p className="text-sm text-gray-600">Provided by</p>
                            <p className="font-semibold text-gray-800 text-lg">{plant.providerName}</p>
                        </div>
                    </div>
                </div>

                {/* Book Consultation Section */}
                <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8 mb-12">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                🌿 Book a Consultation
                            </h2>
                            <p className="text-gray-600">
                                Get expert advice on caring for your {plant.plantName}
                            </p>
                        </div>

                        <form onSubmit={handleConsultationSubmit} className="bg-white rounded-xl shadow-lg p-6">
                            {/* Name Field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaUser className="inline mr-2" />
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required 
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FaEnvelope className="inline mr-2" />
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full focus:outline-green-500"
                                    required 
                                />
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full text-lg"
                            >
                                Book Now
                            </button>
                        </form>
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
