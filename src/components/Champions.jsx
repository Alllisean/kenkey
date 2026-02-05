import React, { useRef, useState, useEffect } from 'react';

// Helper component for single photo that manages its own entrance animation
const PhotoBox = ({ id, label, className, delay = "0s", darkMode }) => {
    const boxRef = useRef(null);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsBoxVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px' // Slight offset for better feel
            }
        );

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={boxRef}
            style={{ animationDelay: delay }}
            className={`relative overflow-hidden rounded-3xl flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg group/item ${isBoxVisible ? 'animate-pop-up' : 'opacity-0 scale-95'} ${darkMode ? 'bg-zinc-900' : 'bg-purple-50'} ${className}`}
        >
            <div className={`absolute inset-0 opacity-10 flex items-center justify-center p-4 ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
            </div>
            <span className={`relative z-10 font-bold text-xs tracking-wider uppercase ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                {label}
            </span>
            <div className={`absolute inset-0 transition-colors duration-300 ${darkMode ? 'bg-purple-400/0 hover:bg-purple-400/5' : 'bg-purple-900/0 hover:bg-purple-900/5'}`} />
        </div>
    );
};

const GroupLabel = ({ text, darkMode }) => (
    <span className={`absolute -top-6 left-2 text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-purple-400/60' : 'text-purple-300'}`}>{text}</span>
);

const Champions = ({ t, darkMode }) => {
    const scrollRef = useRef(null);

    // Total 19 photos
    const photos = Array.from({ length: 19 }, (_, i) => ({
        id: i + 1,
        label: `${t.photo} ${i + 1}`,
        darkMode
    }));

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 relative group/slider">
            {/* Navigation Arrows */}
            <button
                onClick={() => scroll('left')}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 opacity-100 lg:opacity-60 lg:group-hover/slider:opacity-100 hover:scale-110 active:scale-95 ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-purple-900'}`}
                aria-label={t.aria.prev}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => scroll('right')}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 opacity-100 lg:opacity-60 lg:group-hover/slider:opacity-100 hover:scale-110 active:scale-95 ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-purple-900'}`}
                aria-label={t.aria.next}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slider Container with Fixed Height */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide scroll-smooth h-[375px] items-stretch pt-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* FIRST: 1, 2, 3 */}
                <div className="flex-none w-[450px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[0]} darkMode={darkMode} />
                    <PhotoBox {...photos[0]} className="flex-[2]" delay="0.1s" />
                    <div className="flex-[1] flex gap-4">
                        <PhotoBox {...photos[1]} className="flex-1" delay="0.2s" />
                        <PhotoBox {...photos[2]} className="flex-1" delay="0.3s" />
                    </div>
                </div>

                {/* SECOND: 5, 6, 4 */}
                <div className="flex-none w-[450px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[1]} darkMode={darkMode} />
                    <div className="flex-[1] flex gap-4">
                        <PhotoBox {...photos[4]} className="flex-1" delay="0.5s" />
                        <PhotoBox {...photos[5]} className="flex-1" delay="0.6s" />
                    </div>
                    <PhotoBox {...photos[3]} className="flex-[2]" delay="0.4s" />
                </div>

                {/* THIRD: 7, 8 widened */}
                <div className="flex-none w-[550px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[2]} darkMode={darkMode} />
                    <PhotoBox {...photos[6]} className="flex-1" delay="0.7s" />
                    <PhotoBox {...photos[7]} className="flex-1" delay="0.8s" />
                </div>

                {/* FOURTH: 9, 10, 11 */}
                <div className="flex-none w-[450px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[3]} darkMode={darkMode} />
                    <div className="flex-[1] flex gap-4">
                        <PhotoBox {...photos[9]} className="flex-1" delay="1.0s" />
                        <PhotoBox {...photos[10]} className="flex-1" delay="1.1s" />
                    </div>
                    <PhotoBox {...photos[8]} className="flex-[2]" delay="0.9s" />
                </div>

                {/* FIFTH: 12 widened */}
                <div className="flex-none w-[600px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[4]} darkMode={darkMode} />
                    <PhotoBox {...photos[11]} className="flex-1" delay="1.2s" />
                </div>

                {/* SIXTH: 13, 14, 15 */}
                <div className="flex-none w-[450px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[5]} darkMode={darkMode} />
                    <div className="flex-[1] flex gap-4">
                        <PhotoBox {...photos[13]} className="flex-1" delay="1.4s" />
                        <PhotoBox {...photos[14]} className="flex-1" delay="1.5s" />
                    </div>
                    <PhotoBox {...photos[12]} className="flex-[3]" delay="1.3s" />
                </div>

                {/* SEVENTH: 16, 17, 18 */}
                <div className="flex-none w-[450px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[6]} darkMode={darkMode} />
                    <PhotoBox {...photos[15]} className="flex-[2]" delay="1.6s" />
                    <div className="flex-[1] flex gap-4">
                        <PhotoBox {...photos[16]} className="flex-1" delay="1.7s" />
                        <PhotoBox {...photos[17]} className="flex-1" delay="1.8s" />
                    </div>
                </div>

                {/* EIGHTH: 19 widened */}
                <div className="flex-none w-[600px] flex flex-col gap-4 relative snap-start">
                    <GroupLabel text={t.groups[7]} darkMode={darkMode} />
                    <PhotoBox {...photos[18]} className="flex-1" delay="1.9s" />
                </div>
            </div>
        </div>
    );
};

export default Champions;
