"use client";
import { Title } from "../components/title";
import { BsStarFill, BsArrowRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaGlobe, FaMobile, FaRobot, FaDatabase, FaCode, FaServer } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const services = [
    {
        icon: FaGlobe,
        title: 'Web Development',
        desc: 'Full-stack web applications, responsive designs, modern frameworks like React, Next.js, and custom solutions.'
    },
    {
        icon: FaMobile,
        title: 'Saas Applications',
        desc: 'Cross-platform mobile apps using React Native, Flutter, Expo, and native solutions for iOS and Android.'
    },
    {
        icon: FaRobot,
        title: 'Automation & Chatbots',
        desc: 'Custom automation scripts, Discord bots, and intelligent chatbot solutions for business processes.'
    },
    {
        icon: FaDatabase,
        title: 'Web Scraping',
        desc: 'Data extraction, parsing, and analysis tools for gathering insights from various web sources.'
    },
    {
        icon: FaCode,
        title: 'Full Stack Solutions',
        desc: 'End-to-end development from database design to frontend implementation and deployment.'
    },
    {
        icon: FaServer,
        title: 'API Development',
        desc: 'RESTful APIs, GraphQL endpoints, and backend services using Node.js, Python, and more.'
    }
];

const reviews = [
    {
        name: "saigousan",
        flag: "Flag_of_United_States.svg",
        rating: 5,
        review: "Details which I requested for him to finish was done professionally, set a deadline for 7 days but he managed to give me in 6 days. The quality of work exceeded my expectations and communication was excellent throughout the project."
    },
    {
        name: "mabdullahari868",
        flag: "Flag_of_United_Kingdom.svg",
        rating: 5,
        review: "Amazing experience! The delivery was exactly what I needed, on time, and with extra details I didn’t even ask for. Communication was clear and friendly. Highly recommend working with Usman!"
    },
    {
        name: "asmaa118",
        flag: "Flag_of_Saudi_Arabia.svg",
        rating: 5,
        review: "I hired him to do coding and prepare a report, and he delivered excellent work. He was very cooperative, professional, and always quick to respond. I highly recommend him for anyone looking for reliable and efficient service."
    },
    {
        name: "lebronglazer23",
        flag: "Flag_of_Australia.svg",
        rating: 5,
        review: "delivered great code with excellent communication and top-tier programming skills. would recommend!"
    },
    {
        name: "minibeefi",
        flag: "Flag_of_Germany.svg",
        rating: 5,
        review: "He did a great work, very professional and detailed. I would recommend him for other projects. I've had a specific project in c-language with linked lists, pointer and some question i have had to answer. Thanks again for your help"
    },
    {
        name: "t_ezzz",
        flag: "Flag_of_Sweden.svg",
        rating: 5,
        review: "The freelancer delivered excellent, bug-free work with great attention to detail. They were polite, professional, and went above and beyond to ensure everything was perfect. Communication was smooth throughout, and I truly appreciated their commitment to quality. Highly recommended!"
    },
    {
        name: "indium3arsenid",
        flag: "Flag_of_Austria.svg",
        rating: 5,
        review: "Very good and fast work , lots of orders pending ;)"
    }
];

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => {
    return (
        <article className="capitalize group hover:text-primary transition-all duration-300 overflow-hidden relative bg-white bg-opacity-5 px-8 py-12 flex flex-col gap-4">
            <div className="text-4xl text-secondary">
                <Icon />
            </div>
            <h3 className="font-bold text-2xl">
                {title}
            </h3>
            <p className="text-justify opacity-75 text-sm">
                {desc}
            </p>
            <div className="group-hover:left-0 transition-all duration-300 absolute top-0 -left-full bg-secondary -z-10 w-full h-full"></div>
        </article>
    )
};

const ReviewCard = ({ name, flag, rating, review, isActive }: { name: string, flag: string, rating: number, review: string, isActive: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldShowReadMore = review.length > 200; // Increased threshold for 650px width

    return (
        <div className={`bg-white bg-opacity-5 p-6 rounded-lg min-w-[650px] w-[650px] flex-shrink-0 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'}`}>
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary-dark font-bold">
                    {name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                    <div className="font-semibold">{name}</div>
                    <div className="flex items-center gap-2">
                        <img src={`/flags/${flag}`} alt={flag} className="w-8 h-5 object-cover rounded-sm" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
                {[...Array(rating)].map((_, i) => (
                    <BsStarFill key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 font-light">({rating})</span>
            </div>
            <div className="relative">
                <p className={`text-sm opacity-90 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}>
                    {review}
                </p>
                {shouldShowReadMore && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-3 text-secondary hover:text-primary-light transition-colors duration-300 flex items-center gap-1 text-sm font-medium"
                    >
                        {isExpanded ? (
                            <>
                                <BsChevronUp size={14} />
                                Show Less
                            </>
                        ) : (
                            <>
                                <BsChevronDown size={14} />
                                Read More
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    )
};

export function Services() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const reviewsRef = useRef<HTMLDivElement>(null);

    // Create circular carousel by duplicating reviews
    const circularReviews = [
        ...reviews.slice(-2), // Last 2 reviews at the beginning
        ...reviews,           // All original reviews
        ...reviews.slice(0, 2) // First 2 reviews at the end
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prev) => {
                const nextIndex = prev + 1;
                if (nextIndex >= reviews.length) {
                    // Reset to original reviews section (after the duplicated ones at start)
                    return 0;
                }
                return nextIndex;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (reviewsRef.current) {
            const cardWidth = 650; // 650px card width
            const gap = 60; // 60px gap between cards
            const containerWidth = reviewsRef.current.clientWidth;
            const cardCenter = cardWidth / 2;
            const containerCenter = containerWidth / 2;
            
            // Calculate position to center the active card
            // Add offset for the duplicated reviews at the beginning
            const offset = 2; // Number of duplicated reviews at start
            const scrollPosition = ((currentReviewIndex + offset) * (cardWidth + gap)) - (containerCenter - cardCenter);
            
            reviewsRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [currentReviewIndex]);

    return (
        <section id="services" className="px-4 md:px-8 py-6 flex justify-center">
            <div className="container flex flex-col gap-16">
                <Title>Services</Title>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(({icon, title, desc}, i) => (
                        <ServiceCard key={i} {...{icon, title, desc}} />
                    ))}
                </div>

                {/* Reviews Section */}
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">What Clients Say</h3>
                        <p className="opacity-75">Real feedback from satisfied clients on Fiverr</p>
                    </div>
                    
                    <div className="relative">
                        <div 
                            ref={reviewsRef}
                            className="flex gap-[60px] overflow-x-auto pb-4 scrollbar-hide"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {circularReviews.map((review, i) => (
                                <ReviewCard 
                                    key={i} 
                                    {...review} 
                                    isActive={i === currentReviewIndex + 2} // +2 to account for duplicated reviews at start
                                />
                            ))}
                        </div>
                        
                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {reviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentReviewIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        i === currentReviewIndex 
                                            ? 'bg-secondary scale-125' 
                                            : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fiverr CTA */}
                <div className="text-center">
                    <a 
                        href="https://www.fiverr.com/startupbyusman" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-secondary text-primary-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 group"
                    >
                        <span>View My Fiverr Profile</span>
                        <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <p className="mt-4 opacity-75">Ready to start your project? Let's discuss your requirements!</p>
                </div>
            </div>
        </section>
    )
}
