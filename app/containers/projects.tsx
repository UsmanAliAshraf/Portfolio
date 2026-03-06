"use client";
import Link from "next/link";
import { Title } from "../components/title";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";

interface IProject {
    video: string;
    title: string;
    description: string;
    github?: string;
    linkedin?: string;
}

const projects: IProject[] = [
    { video: 'Echo.mp4', title: 'Echo - UET SS Bot', description: 'AI chatbot built for the UET Science Society to answer queries about events, memberships, and announcements. Uses FastAPI with LangChain/LangGraph and a RAG pipeline to retrieve information from custom documents. Designed to provide fast, context-aware responses and reduce manual query handling', github: 'https://github.com/UsmanAliAshraf/RAG-BOT-UET-SCIENCE-SOCIETY/' },
    { video: 'ochie .mp4', title: 'ochi.design', description: 'Frontend recreation of the award winning website ochi.design website to practice modern UI/UX implementation. Built using ReactJS and TailwindCSS with attention to layout, smooth scrolling, and animation. Focused on replicating the visual design and responsive behavior of the original site.', github: 'https://github.com/UsmanAliAshraf/React-Project-Ochie-Clone-', linkedin: 'https://www.linkedin.com/posts/usmanaleeashraff_okay-so-day-4-i-got-bored-working-on-backend-ugcPost-7370464078500110336-HKc7?utm_source=share&utm_medium=member_desktop' },
    { video: 'cognitive-game.png', title: 'Cognitive Game', description:'A web-based cognitive training game designed to help special children improve memory, focus, and pattern recognition. Includes multiple exercises that challenge users through visual matching and logical tasks. Built with accessibility and simple interaction in mind.', github: '#' },
    { video: 'prop-whiz.png', title: 'PropWhiz', description: 'A modern real estate listing platform where users can browse properties and directly contact sellers. Provides property cards, detail views, and a contact form for inquiries. Built to demonstrate clean UI design and practical business-oriented web functionality.', github: '#' },
    { video: 'miniexcel.mp4', title: 'MiniExcel', description: 'A simplified spreadsheet application inspired by Microsoft Excel. Supports cell editing, formulas, and basic functions to perform calculations. Built using data structures and algorithms to manage cell references and formula evaluation.', github: '#' },
    { video: 'mangodb.mp4', title: 'MangoDB', description:'A custom document database engine built from scratch in Python. Implements core database concepts such as CRUD operations, indexing, transaction handling, and ACID compliance. Includes a simple query language and demonstrates how modern NoSQL databases work internally.', github: 'https://github.com/UsmanAliAshraf/Mini-MongoDB-Flask-App' },
    { video: 'beats.mp4', title: 'Beats Headphones',description: 'Interactive product landing page designed in Figma and developed using ReactJS and TailwindCSS. Focuses on modern UI design, responsive layouts, and smooth visual presentation. Demonstrates frontend skills in translating design concepts into production UI.', github: 'https://github.com/UsmanAliAshraf/LandingPage'},
    { video: 'cc.mp4', title: 'Campus Connect and Navigation App', description: 'Web application designed to help students navigate the university campus efficiently. Uses graph-based algorithms to determine optimal paths between locations. Also includes event and task management features to help students stay organized.', github: 'https://github.com/UsmanAliAshraf/CampusNavigation-and-EventManager'}    
];

const ProjectCard = ({ video, title, description, github, linkedin, onClick }: IProject & { onClick: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };
    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div
            className={`relative bg-black flex container justify-center items-end h-96 border ${isPlaying ? 'border-secondary' : 'border-black'} cursor-pointer`}
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
            onFocus={handlePlay}
            onBlur={handlePause}
            tabIndex={0}
            onClick={onClick}
        >
            {video.endsWith(".mp4") ? (
    <video
        ref={videoRef}
        src={`/projects/${video}`}
        className="absolute top-0 left-0 w-full h-full object-contain object-top"
        muted
        loop
        playsInline
    />
) : (
    <img
        src={`/projects/${video}`}
        className="absolute top-0 left-0 w-full h-full object-contain object-top"
    />
)}
            <div className="absolute bg-black bg-opacity-50 top-0 right-0 p-4 rounded-bl-lg flex gap-3 text-2xl">
                {github && (
                    <Link href={github} className="hover:text-secondary" target="_blank">
                        <BsGithub />
                    </Link>
                )}
                {linkedin && (
                    <Link href={linkedin} className="hover:text-secondary" target="_blank">
                        <BsLinkedin />
                    </Link>
                )}
            </div>
            <div className="container relative z-10 px-4 md:px-8 py-4 flex flex-col gap-2 bg-black bg-opacity-50">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="opacity-75 line-clamp-1">{description}</p>
            </div>
        </div>
    );
};

export function Projects() {
    const [activeProject, setActiveProject] = useState<IProject | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Close modal on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (overlayRef.current && e.target === overlayRef.current) {
                setIsClosing(true);
                setTimeout(() => {
                    setActiveProject(null);
                    setIsClosing(false);
                }, 300); // match animation duration
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section id="projects" className="p-4 md:px-8 flex justify-center">
            <div className="container justify-center">
                <Title>Projects</Title>
                <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((proj, i) => (
                        <ProjectCard key={i} {...proj} onClick={() => setActiveProject(proj)} />
                    ))}
                </div>
            </div>

            {/* Popup Overlay */}
            {activeProject && (
                <div
                    ref={overlayRef}
                    className={`fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                >
                    <div className={`bg-gray-900 text-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-auto p-6 transform transition-transform duration-300 ${isClosing ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                        {activeProject.video.endsWith(".mp4") ? (
    <video
        src={`/projects/${activeProject.video}`}
        className="w-full rounded-lg mb-4"
        autoPlay
        muted
        loop
        controls
    />
) : (
    <img
        src={`/projects/${activeProject.video}`}
        className="w-full rounded-lg mb-4"
        alt={activeProject.title}
    />
)}
                        <h2 className="text-3xl font-bold mb-2">{activeProject.title}</h2>
                        <p>{activeProject.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}