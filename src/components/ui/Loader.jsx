import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const Loader = ({ size = 'md', fullScreen = false }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-16 h-16',
        lg: 'w-24 h-24',
        xl: 'w-32 h-32'
    };

    const loaderContent = (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Animated Plant Loader */}
            <div className="relative">
                {/* Rotating circle */}
                <div className={`${sizeClasses[size]} relative`}>
                    <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-green-600 rounded-full animate-spin"></div>
                    
                    {/* Center leaf icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaLeaf className="text-green-600 animate-pulse" style={{ fontSize: size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '36px' : '48px' }} />
                    </div>
                </div>
            </div>
            
            {/* Loading text */}
            <div className="text-center">
                <p className="text-green-600 font-semibold text-lg mb-1">Loading...</p>
                <p className="text-gray-500 text-sm">Please wait while we grow your content 🌱</p>
            </div>
            
            {/* Animated dots */}
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
                {loaderContent}
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-[400px] py-16">
            {loaderContent}
        </div>
    );
};

export default Loader;
