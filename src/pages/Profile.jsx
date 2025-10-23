import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FaEnvelope, FaUser, FaCalendar, FaEdit, FaImage } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        displayName: '',
        photoURL: ''
    });
    const [updating, setUpdating] = useState(false);

    // Initialize form data
    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user.displayName || '',
                photoURL: user.photoURL || ''
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

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            await updateUserProfile(formData.displayName, formData.photoURL);
            toast.success('Profile updated successfully!');
            setIsEditing(false);
            // Refresh the page to show updated info
            window.location.reload();
        } catch (error) {
            toast.error('Failed to update profile: ' + error.message);
        } finally {
            setUpdating(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            displayName: user?.displayName || '',
            photoURL: user?.photoURL || ''
        });
        setIsEditing(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
                    🌿 My Profile
                </h1>
                
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        {!isEditing ? (
                            <>
                                {/* Profile View Mode */}
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

                                    {/* Photo URL */}
                                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                                        <FaImage className="text-green-600 text-2xl" />
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-sm text-gray-600">Photo URL</p>
                                            <p className="text-sm font-semibold text-gray-800 truncate">
                                                {user?.photoURL || 'Default avatar'}
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

                                {/* Update Profile Button */}
                                <div className="card-actions justify-center mt-6">
                                    <button 
                                        onClick={() => setIsEditing(true)}
                                        className="btn bg-green-600 hover:bg-green-700 text-white border-none"
                                    >
                                        <FaEdit className="mr-2" />
                                        Update Profile
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Profile Edit Mode */}
                                <div className="text-center mb-6">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                        Update Profile
                                    </h2>
                                    <p className="text-gray-600">
                                        Edit your display name and photo
                                    </p>
                                </div>

                                <form onSubmit={handleUpdateProfile}>
                                    {/* Current Photo Preview */}
                                    <div className="flex justify-center mb-6">
                                        <div className="avatar">
                                            <div className="w-32 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-4">
                                                <img
                                                    src={formData.photoURL || 'https://ui-avatars.com/api/?name=' + (formData.displayName || 'User')}
                                                    alt="Preview"
                                                    onError={(e) => {
                                                        e.target.src = 'https://ui-avatars.com/api/?name=' + (formData.displayName || 'User');
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Display Name Field */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <FaUser className="inline mr-2" />
                                            Display Name
                                        </label>
                                        <input 
                                            type="text" 
                                            name="displayName"
                                            value={formData.displayName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your name"
                                            className="input input-bordered w-full focus:outline-green-500"
                                            required 
                                        />
                                    </div>

                                    {/* Photo URL Field */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <FaImage className="inline mr-2" />
                                            Photo URL
                                        </label>
                                        <input 
                                            type="url" 
                                            name="photoURL"
                                            value={formData.photoURL}
                                            onChange={handleInputChange}
                                            placeholder="Enter photo URL"
                                            className="input input-bordered w-full focus:outline-green-500"
                                            required 
                                        />
                                        <p className="mt-2 text-xs text-gray-500">
                                            Enter a valid image URL for your profile photo
                                        </p>
                                    </div>

                                    {/* Email (Read-only) */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <FaEnvelope className="inline mr-2" />
                                            Email Address
                                        </label>
                                        <input 
                                            type="email" 
                                            value={user?.email || ''}
                                            className="input input-bordered w-full bg-gray-100"
                                            disabled
                                            readOnly
                                        />
                                        <p className="mt-2 text-xs text-gray-500">
                                            Email cannot be changed
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 mt-6">
                                        <button 
                                            type="submit"
                                            disabled={updating}
                                            className="btn bg-green-600 hover:bg-green-700 text-white border-none flex-1"
                                        >
                                            {updating ? (
                                                <>
                                                    <span className="loading loading-spinner loading-sm"></span>
                                                    Updating...
                                                </>
                                            ) : (
                                                'Save Changes'
                                            )}
                             </button>
                         <button 
                         type="button"
                        onClick={handleCancel}
                          disabled={updating}
                        className="btn btn-outline border-gray-400 text-gray-700 hover:bg-gray-100 flex-1"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
