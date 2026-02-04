import { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import CountryTicker from './CountryTicker';

const Hero = ({ t, countries, setHighlightedActivity }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { src: slide1, alt: 'Digital Africa Map' },
        { src: slide2, alt: 'Community Connection' },
        { src: slide3, alt: 'Future Tech' }
    ];

    const slideText = t.slides;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden group">
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.src}
                        alt={t.alt[index]}
                        className="object-cover w-full h-full transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}

            {/* Persistent Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                <div className="relative w-full flex items-center justify-center h-32 md:h-48">
                    {slides.map((slide, index) => (
                        <h1
                            key={index}
                            className={`absolute text-4xl md:text-6xl font-medium text-white text-center px-4 drop-shadow-lg leading-tight max-w-4xl transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                        >
                            {slideText[index]}
                        </h1>
                    ))}
                </div>

                <div className="pointer-events-auto mt-8">
                    <button
                        onClick={() => setHighlightedActivity?.('ALL')}
                        className="group/btn flex items-center space-x-3 px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm shadow-black/20"
                    >
                        <span>{t.cta}</span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-current transition-colors duration-300">
                            <svg
                                className="w-4 h-4 transition-transform duration-500 ease-in-out rotate-0 group-hover/btn:rotate-[1035deg]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            {/* Country Ticker at the bottom of Hero */}
            <div className="absolute bottom-0 left-0 w-full z-20">
                <CountryTicker t={countries} />
            </div>
        </div >
    );
};

export default Hero;
