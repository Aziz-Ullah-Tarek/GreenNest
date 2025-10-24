import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TopRatedPlants from '../components/home/TopRatedPlants';
import PlantCareTips from '../components/home/PlantCareTips';
import GreenExperts from '../components/home/GreenExperts';
import EcoDecorIdeas from '../components/home/EcoDecorIdeas';
import PlantOfTheWeek from '../components/home/PlantOfTheWeek';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Slider Section */}
            <HeroSection />

            {/* Plant of the Week Section with decorative top wave */}
            <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-white/50 to-transparent -mt-20 z-10"></div>
                <PlantOfTheWeek />
            </div>

            {/* Top Rated Plants Section with pattern background */}
            <div className="relative">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                <TopRatedPlants />
            </div>

            {/* Why Choose Us Section with gradient background */}
            <div className="relative bg-linear-to-br from-green-50 via-blue-50 to-purple-50">
                <WhyChooseUs />
            </div>

            {/* Plant Care Tips Section */}
            <div className="relative bg-linear-to-b from-white to-green-50/30">
                <PlantCareTips />
            </div>

            {/* Green Experts Section with decorative elements */}
            <div className="relative">
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
                <GreenExperts />
            </div>

            {/* Eco Decor Ideas Section */}
            <div className="relative bg-linear-to-t from-green-50 to-white">
                <EcoDecorIdeas />
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Home;
