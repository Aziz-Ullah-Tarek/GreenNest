import React from 'react';
import { FaShippingFast, FaLeaf, FaGift, FaHeadset } from 'react-icons/fa';

const MarqueeSlider = () => {
    const announcements = [
        { icon: <FaShippingFast />, text: "Free Shipping on Orders Over $50" },
        { icon: <FaLeaf />, text: "500+ Premium Plant Varieties Available" },
        { icon: <FaGift />, text: "New Customer? Get 20% Off Your First Order" },
        { icon: <FaHeadset />, text: "24/7 Expert Plant Care Support" },
        { icon: <FaLeaf />, text: "100% Satisfaction Guarantee" },
    ];

    return (
        <div className="bg-green-700 text-white py-3 overflow-hidden sticky top-[72px] z-40 shadow-md">
            <div className="marquee-container">
                <div className="marquee-content">
                    {/* First set of announcements */}
                    {announcements.map((item, index) => (
                        <div key={`set1-${index}`} className="inline-flex items-center gap-2 mx-8">
                            <span className="text-yellow-300">{item.icon}</span>
                            <span className="font-medium whitespace-nowrap">{item.text}</span>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {announcements.map((item, index) => (
                        <div key={`set2-${index}`} className="inline-flex items-center gap-2 mx-8">
                            <span className="text-yellow-300">{item.icon}</span>
                            <span className="font-medium whitespace-nowrap">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeSlider;
