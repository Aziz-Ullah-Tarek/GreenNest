import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch hero slides data from public folder
        fetch('/heroSlides.json')
            .then(response => response.json())
            .then(data => {
                setSlides(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading hero slides:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden flex items-center justify-center bg-green-50">
                <span className="loading loading-spinner loading-lg text-green-600"></span>
            </section>
        );
    }

    return (
        <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Background Image with Overlay */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ 
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <div className="max-w-4xl animate-fade-in">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                                        {slide.title}
                                    </h1>
                                    
                                    <p className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8">
                                        {slide.subtitle}
                                    </p>
                                    
                                    <div>
                                        <Link 
                                            to={slide.buttonLink}
                                            className="btn btn-lg bg-green-600 hover:bg-green-700 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                        >
                                            {slide.buttonText}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
