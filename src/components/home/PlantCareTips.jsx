import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const PlantCareTips = () => {
    const [careTips, setCareTips] = useState([]);
    const [selectedTip, setSelectedTip] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch('/careTips.json')
            .then(response => response.json())
            .then(data => {
                setCareTips(data);
                setSelectedTip(data[0]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading care tips:', error);
                setLoading(false);
            });
    }, []);

    if (loading || !selectedTip) {
        return (
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 flex justify-center items-center min-h-[400px]">
                    <span className="loading loading-spinner loading-lg text-green-600"></span>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-6xl">🌿</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
                        Essential Plant Care Tips
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-green-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Master the basics of plant care and watch your green friends thrive
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar with tip categories */}
                    <div className="lg:col-span-4">
                        <div className="space-y-3">
                            {careTips.map((tip) => (
                                <button
                                    key={tip.id}
                                    onClick={() => setSelectedTip(tip)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                                        selectedTip.id === tip.id
                                            ? 'bg-green-600 text-white shadow-lg scale-105'
                                            : 'bg-green-50 text-gray-700 hover:bg-green-100'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{tip.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-lg">{tip.title}</h3>
                                            <p className={`text-sm ${selectedTip.id === tip.id ? 'text-white/80' : 'text-gray-500'}`}>
                                                {tip.shortDescription}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content area */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <div
                                key={selectedTip.id}
                                className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8 shadow-xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-5xl">{selectedTip.icon}</span>
                                    <h3 className="text-3xl font-bold text-gray-800">
                                        {selectedTip.title}
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Tips */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Pro Tips
                                        </h4>
                                        <ul className="space-y-2">
                                            {selectedTip.tips.map((tip, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 text-gray-700"
                                                >
                                                    <span className="text-green-600 mt-1">✓</span>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    
                                    <div className="bg-white/60 rounded-xl p-5">
                                        <h4 className="text-xl font-semibold text-red-600 mb-3 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            Avoid These Mistakes
                                        </h4>
                                        <ul className="space-y-2">
                                            {selectedTip.commonMistakes.map((mistake, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 text-gray-700"
                                                >
                                                    <span className="text-red-500 mt-1">✗</span>
                                                    <span>{mistake}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantCareTips;
