import React from 'react';

const Profile = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
                    My Profile
                </h1>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="text-center text-gray-600">
                            User profile information will be displayed here after authentication
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
