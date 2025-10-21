import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="hero min-h-[60vh] bg-linear-to-r from-green-50 to-green-100 rounded-lg">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-green-700">
                            Welcome to GreenNest 🌱
                        </h1>
                        <p className="py-6 text-lg">
                            Your one-stop destination for healthy indoor plants. 
                            Nurture your home with our curated collection of beautiful plants.
                        </p>
                        <button className="btn bg-green-600 hover:bg-green-700 text-white border-none">
                            Explore Plants
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
