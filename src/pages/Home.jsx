import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TopRatedPlants from '../components/home/TopRatedPlants';
import PlantCareTips from '../components/home/PlantCareTips';
import GreenExperts from '../components/home/GreenExperts';
import EcoDecorIdeas from '../components/home/EcoDecorIdeas';
import PlantOfTheWeek from '../components/home/PlantOfTheWeek';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Slider Section */}
            <HeroSection />

            {/* Plant of the Week Section */}
            <PlantOfTheWeek />

            {/* Top Rated Plants Section */}
            <TopRatedPlants />

            {/* Why Choose Us Section - NEW! */}
            <WhyChooseUs />

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
