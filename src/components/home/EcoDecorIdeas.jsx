import React from 'react';

const ecoDecorIdeas = [
    {
        id: 1,
        title: "Living Room Oasis",
        description: "Transform your living space with a mix of tall floor plants and hanging planters",
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
        tips: ["Fiddle Leaf Fig for corners", "Trailing Pothos on shelves", "Snake plants for low light areas"]
    },
    {
        id: 2,
        title: "Kitchen Garden",
        description: "Fresh herbs at your fingertips while cooking",
        image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&q=80",
        tips: ["Basil on windowsills", "Mint in small pots", "Rosemary for fragrance"]
    },
    {
        id: 3,
        title: "Bathroom Spa",
        description: "Create a tropical retreat with humidity-loving plants",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
        tips: ["Ferns for moisture", "Peace Lily for elegance", "Air plants on shelves"]
    },
    {
        id: 4,
        title: "Bedroom Sanctuary",
        description: "Air-purifying plants for better sleep quality",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
        tips: ["Snake Plant releases oxygen at night", "Lavender for relaxation", "Aloe Vera for air quality"]
    },
    {
        id: 5,
        title: "Home Office Boost",
        description: "Increase productivity with desk-friendly plants",
        image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&q=80",
        tips: ["Succulents for minimal care", "ZZ Plant for low light", "Small cacti for desk corners"]
    },
    {
        id: 6,
        title: "Balcony Paradise",
        description: "Maximize small outdoor spaces with vertical gardens",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
        tips: ["Wall-mounted planters", "Hanging baskets", "Railing planters"]
    }
];

const EcoDecorIdeas = () => {
    return (
        <section className="py-16 bg-linear-to-b from-white to-green-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        🏡 Eco Decor Ideas
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get inspired with creative ways to style your space with plants and bring nature indoors
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {ecoDecorIdeas.map((idea) => (
                        <div
                            key={idea.id}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <figure className="relative h-64 overflow-hidden">
                                <img 
                                    src={idea.image} 
                                    alt={idea.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{idea.title}</h3>
                                    <p className="text-sm text-white/90">{idea.description}</p>
                                </div>
                            </figure>
                            
                            <div className="card-body">
                                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Quick Tips
                                </h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    {idea.tips.map((tip, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-green-600 mt-0.5">•</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-sm btn-ghost text-green-600 hover:bg-green-50">
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-linear-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Space?
                    </h3>
                    <p className="text-lg mb-6 text-white/90">
                        Get a free consultation with our interior plant designers
                    </p>
                    <button className="btn btn-lg bg-white text-green-600 hover:bg-gray-100 border-none">
                        Schedule Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EcoDecorIdeas;
