import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FaEnvelope, FaUser, FaCalendar } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
                    🌿 My Profile
                </h1>
                
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        {/* Profile Header */}
                        <div className="flex flex-col items-center mb-6">
                            <div className="avatar mb-4">
                                <div className="w-32 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-4">
                                    <img
                                        src={user?.photoURL || 'https://ui-avatars.com/api/?name=' + (user?.displayName || 'User')}
                                        alt={user?.displayName || 'User'}
                                    />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">
                                {user?.displayName || 'Plant Lover'}
                            </h2>
                            <p className="text-gray-500 mt-1">GreenNest Member</p>
                        </div>

                        {/* Profile Information */}
                        <div className="divider"></div>
                        
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                                <FaUser className="text-green-600 text-2xl" />
                                <div>
                                    <p className="text-sm text-gray-600">Full Name</p>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {user?.displayName || 'Not provided'}
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                                <FaEnvelope className="text-green-600 text-2xl" />
                                <div>
                                    <p className="text-sm text-gray-600">Email Address</p>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {user?.email || 'Not provided'}
                                    </p>
                                </div>
                            </div>

                            {/* Account Created */}
                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                                <FaCalendar className="text-green-600 text-2xl" />
                                <div>
                                    <p className="text-sm text-gray-600">Member Since</p>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {user?.metadata?.creationTime 
                                            ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })
                                            : 'Unknown'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Account Stats */}
                        <div className="divider"></div>
                        
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="stat bg-green-50 rounded-lg">
                                <div className="stat-value text-green-600 text-3xl">0</div>
                                <div className="stat-title text-gray-600">Orders</div>
                            </div>
                            <div className="stat bg-green-50 rounded-lg">
                                <div className="stat-value text-green-600 text-3xl">0</div>
                                <div className="stat-title text-gray-600">Wishlist</div>
                            </div>
                            <div className="stat bg-green-50 rounded-lg">
                                <div className="stat-value text-green-600 text-3xl">0</div>
                                <div className="stat-title text-gray-600">Reviews</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="card-actions justify-center mt-6">
                            <button className="btn bg-green-600 hover:bg-green-700 text-white border-none">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
