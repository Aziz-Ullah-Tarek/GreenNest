import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TopRatedPlants from '../components/home/TopRatedPlants';
import PlantCareTips from '../components/home/PlantCareTips';
import GreenExperts from '../components/home/GreenExperts';
import EcoDecorIdeas from '../components/home/EcoDecorIdeas';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Slider Section */}
            <HeroSection />

            {/* Top Rated Plants Section */}
            <TopRatedPlants />

            {/* Plant Care Tips Section */}
            <PlantCareTips />

            {/* Green Experts Section */}
            <GreenExperts />

            {/* Eco Decor Ideas Section */}
            <EcoDecorIdeas />
        </div>
    );
};

export default Home;
