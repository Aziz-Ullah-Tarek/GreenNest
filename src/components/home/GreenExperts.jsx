import React, { useState, useEffect } from 'react';

const ExpertCard = ({ expert }) => {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="relative h-72 overflow-hidden">
                <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 badge badge-success gap-1 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {expert.rating}
                </div>

                {/* Consultations Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {expert.consultations}+ consultations
                </div>
            </figure>
            
            <div className="card-body">
                <h3 className="card-title text-xl text-gray-800">
                    {expert.name}
                </h3>
                
                <p className="text-green-600 font-semibold text-sm">
                    {expert.specialization}
                </p>
                
                <p className="text-gray-600 text-sm mt-2">
                    {expert.bio}
                </p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {expert.expertise.map((skill, idx) => (
                        <span 
                            key={idx}
                            className="badge badge-outline badge-success badge-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white border-none">
                        Book Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

const GreenExperts = () => {
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch experts data from public folder
        fetch('/experts.json')
            .then(response => response.json())
            .then(data => {
                setExperts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading experts:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-16 bg-linear-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        👨‍🌾 Meet Our Green Experts
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get personalized advice from certified plant care specialists who are passionate about helping your plants thrive
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <span className="loading loading-spinner loading-lg text-green-600"></span>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {experts.map((expert) => (
                                <ExpertCard key={expert.id} expert={expert} />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button className="btn btn-lg btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600">
                                View All Experts
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default GreenExperts;
