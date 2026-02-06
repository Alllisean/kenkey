import { useState, useEffect, useRef } from 'react';

const Navbar = ({ lang, setLang, t, darkMode, setDarkMode, setHighlightedActivity }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileActivitiesOpen, setIsMobileActivitiesOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight;

            // 1. Handle background styling (scrolled state)
            if (currentScrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // 2. Handle visibility behavior
            // - Always visible at the top (within Hero)
            if (currentScrollY < heroHeight) {
                setIsVisible(true);
            }
            // - Below Hero: Smart reveal (Show on UP, Hide on DOWN)
            else {
                if (currentScrollY > lastScrollY.current) {
                    // Scrolling DOWN
                    setIsVisible(false);
                } else {
                    // Scrolling UP
                    setIsVisible(true);
                }
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = (newLang) => {
        setLang(newLang);
        setIsLangOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                } ${isScrolled
                    ? 'bg-purple-900/40 backdrop-blur-lg border-b border-white/10 shadow-lg'
                    : 'bg-transparent border-transparent shadow-none'
                }`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-start gap-12 mx-auto p-4">
                <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse group/logo">
                    <div className="w-[18px] h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 32" className="w-full h-full drop-shadow-sm transition-transform duration-500 group-hover/logo:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 32C12 32 0 20.8 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 20.8 12 32 12 32Z" fill="#7E22CE" />
                            <g stroke="white" strokeWidth="0.5" strokeOpacity="0.6">
                                <line x1="12" y1="2" x2="12" y2="30" />
                                <line x1="12" y1="2" x2="4" y2="24" />
                                <line x1="12" y1="2" x2="20" y2="24" />
                                <line x1="12" y1="2" x2="1" y2="16" />
                                <line x1="12" y1="2" x2="23" y2="16" />
                                <line x1="12" y1="2" x2="6" y2="6" />
                                <line x1="12" y1="2" x2="18" y2="6" />
                            </g>
                        </svg>
                    </div>
                    <span className="self-center text-3xl font-black whitespace-nowrap logo-missing-parts bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent tracking-tighter">BITZ 2.0</span>
                </a>
                <div className="flex items-center gap-2 ml-auto md:hidden">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-full hover:bg-purple-800 transition-colors shadow-sm ${darkMode ? 'text-yellow-400 bg-zinc-800' : 'text-purple-200 bg-transparent'}`}
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591-1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                        )}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-purple-200 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">{t.aria?.menu || "Open main menu"}</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto`} id="navbar-sticky">
                    <ul className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-4 md:p-0 mt-4 md:mt-0 font-medium border rounded-lg md:border-0 md:bg-transparent ${isScrolled ? 'border-purple-600 bg-purple-800' : 'border-white/10 bg-black/20 md:bg-transparent'}`}>
                        <li><a href="#" className="block py-2 px-3 text-purple-300 rounded hover:bg-purple-700 active:bg-purple-700 md:hover:bg-transparent md:active:bg-transparent md:hover:text-white md:active:text-white md:p-0 transition-colors" aria-current="page">{t.home}</a></li>
                        <li><a href="#" className="block py-2 px-3 text-purple-300 rounded hover:bg-purple-700 active:bg-purple-700 md:hover:bg-transparent md:active:bg-transparent md:hover:text-white md:active:text-white md:p-0 transition-colors">{t.about}</a></li>
                        <li><a href="#" className="block py-2 px-3 text-purple-300 rounded hover:bg-purple-700 active:bg-purple-700 md:hover:bg-transparent md:active:bg-transparent md:hover:text-white md:active:text-white md:p-0 transition-colors">{t.contact}</a></li>

                        {/* Mobile: Activities Dropdown */}
                        <li className="md:hidden border-t border-white/10 pt-2 mt-2">
                            <button
                                onClick={() => setIsMobileActivitiesOpen(!isMobileActivitiesOpen)}
                                className="flex items-center justify-between w-full py-2 px-3 text-purple-300 rounded hover:bg-purple-700 transition-colors font-bold"
                            >
                                {t.activities}
                                <svg className={`w-3 h-3 ml-2.5 transition-transform duration-300 ${isMobileActivitiesOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {isMobileActivitiesOpen && (
                                <div className="py-2 space-y-1 pl-4 animate-in fade-in slide-in-from-top-1">
                                    {[t.bitz.academy, t.bitz.enterprise, t.bitz.spaces, t.bitz.ventures, t.bitz.kids].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                setHighlightedActivity(item);
                                                setIsOpen(false);
                                                setIsMobileActivitiesOpen(false);
                                            }}
                                            className="block w-full text-left py-2 px-3 text-sm text-gray-300 hover:text-white transition-colors border-l-2 border-purple-500/30 hover:border-purple-500 pl-4"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </li>

                        {/* Mobile: Language Toggle */}
                        <li className="md:hidden border-t border-white/10 pt-2 mt-2">
                            <button
                                onClick={() => {
                                    toggleLang(lang === 'en' ? 'fr' : 'en');
                                    setIsOpen(false);
                                }}
                                className="flex items-center space-x-2 px-3 py-2 text-purple-300 hover:text-white transition-colors text-sm font-medium w-full"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                                <span>{lang === 'en' ? 'Switch to French' : 'Passer en Anglais'}</span>
                            </button>
                        </li>


                    </ul>
                </div>

                <div className="hidden md:flex flex-grow items-center justify-end gap-4">
                    <div className="relative group">
                        <button className={`px-6 py-2 font-semibold rounded-full shadow-md transition-colors ${darkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-white text-purple-900 hover:bg-purple-50'}`}>
                            {t.activities}
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                            <div className={`rounded-xl shadow-2xl border py-3 flex flex-col min-w-[200px] ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-purple-100'}`}>
                                {[t.bitz.academy, t.bitz.enterprise, t.bitz.spaces, t.bitz.ventures, t.bitz.kids].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setHighlightedActivity(item);
                                            setIsOpen(false);
                                        }}
                                        className={`px-6 py-2.5 text-left text-sm font-medium transition-colors whitespace-nowrap ${darkMode ? 'text-purple-300 hover:bg-zinc-800 active:bg-zinc-800 hover:text-white active:text-white' : 'text-purple-900 hover:bg-purple-50 active:bg-purple-50 hover:text-purple-700 active:text-purple-700'}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-md ${darkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-white text-purple-900 hover:bg-purple-50'}`}
                    >
                        {darkMode ? (
                            /* Sun Icon - Heroicons */
                            <svg className="w-5 h-5 text-yellow-500 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591-1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        ) : (
                            /* Moon Icon - Heroicons */
                            <svg className="w-5 h-5 text-purple-900 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        )}
                    </button>

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-sm font-bold uppercase ${darkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-white text-purple-900 hover:bg-purple-50'}`}
                        >
                            <span>{lang}</span>
                            <svg className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isLangOpen && (
                            <div className={`absolute right-0 top-full mt-2 rounded-lg shadow-2xl border py-1 min-w-[80px] z-50 animate-in fade-in slide-in-from-top-2 duration-300 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-purple-100'}`}>
                                <button
                                    onClick={() => toggleLang(lang === 'en' ? 'fr' : 'en')}
                                    className={`w-full text-left px-4 py-2 text-sm font-bold uppercase ${darkMode ? 'text-white hover:bg-zinc-800' : 'text-purple-900 hover:bg-purple-50'}`}
                                >
                                    {lang === 'en' ? 'fr' : 'en'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
