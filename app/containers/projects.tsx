"use client";
import Link from "next/link";
import { Title } from "../components/title";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useRef, useState } from "react";

interface IProject
{
    video: string;
    title: string;
    description: string;
    github?: string;
    linkedin?: string
};

const projects: IProject[] = [
    {
        video: 'Echo.mp4',
        title: 'Echo - UET SS Bot',
        description: 'A Chatbot for UET SS using Fast API, Langchain and LangGraph',
        github: 'https://github.com/UsmanAliAshraf/RAG-BOT-UET-SCIENCE-SOCIETY/',
        // linkedin: '#'
    },
    {
        video: 'ochie .mp4',
        title: 'ochi.design',
        description: 'Cloned the website ochi.design in ReactJS and TailwindCSS',
        github: 'https://github.com/UsmanAliAshraf/React-Project-Ochie-Clone-',
        //linkedin: '#'
    },
    {
        video: 'mangodb.mp4',
        title: 'Mangodb - Document Database',
        description: 'Custom DB with storage, indexing, query processing, and ACID',
        github: 'https://github.com/UsmanAliAshraf/Mini-MongoDB-Flask-App',
        //linkedin: '#'
    },
    {
        video: 'cc.mp4',
        title: 'Campus Connect and Navigation',
        description: 'DSA-powered app for efficient campus navigation at UET.',
        github: 'https://github.com/UsmanAliAshraf/CampusNavigation-and-EventManager',
        linkedin: 'https://www.linkedin.com/posts/usmanaleeashraff_dsa-campusconnect-activity-7369663375724670976-b4SL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF31ZvgB-Rk-OBrgk1PPrNq8xtfk_m-Xi4Q'
    },
       
    {
        video: 'bulletfest.mp4',
        title: 'BulletFest',
        description: 'C# Winform/SFML based platformer game without any game engine',
        github: 'https://github.com/UsmanAliAshraf/Game-BulletFest',
        //linkedin: '#'
    },
    {
        video: 'vs.mp4',
        title: 'Video Summarizer',
        description: 'A video Summarizer agent using Agno Framework and Gemini API',
        github: 'https://github.com/UsmanAliAshraf/PhiData-Video-Summarizer-Agent',
        //linkedin: '#'
    },
    {
        video: 'miniexcel.mp4',
        title: 'MiniExcel',
        description: 'Mini Excel with formulas and cell operations using DSA and Flask',
        github: 'https://github.com/m-ans-ishfaq/mini-excel',
        linkedin:'https://www.linkedin.com/posts/usmanaleeashraff_summercode-miniexcel-dsa-activity-7369373402094116865-OXeD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF31ZvgB-Rk-OBrgk1PPrNq8xtfk_m-Xi4Q'
    },
    {
        video: 'beats.mp4',
        title: 'Beats Landing Page',
        description: 'Designed in Figma, Made in ReactJS and SCSS',
        github: 'https://github.com/UsmanAliAshraf/LandingPage',
        //linkedin: '#'
    },
]

const ProjectCard = ({ video, title, description, github, linkedin }: IProject) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0; // Set playback speed to 2x
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
            className={`relative bg-black flex container justify-center items-end h-96 border ${isPlaying ? 'border-secondary' : 'border-black'}`}
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
            onFocus={handlePlay}
            onBlur={handlePause}
            tabIndex={0} // Ensure the div is focusable
        >
            <video
                ref={videoRef}
                src={`/projects/${video}`}
                className="absolute top-0 left-0 w-full h-full object-contain object-top"
                muted
                loop
                playsInline
            />
            <div className="absolute bg-black bg-opacity-50 top-0 right-0 p-4 rounded-bl-lg flex gap-3 text-2xl">
                {github && (
                    <Link href={github} className="hover:text-secondary">
                        <BsGithub />
                    </Link>
                )}
                {linkedin && (
                    <Link href={linkedin} className="hover:text-secondary">
                        <BsLinkedin />
                    </Link>
                )}
            </div>
            <div className="container relative z-10 px-4 md:px-8 py-4 flex flex-col gap-2 bg-black bg-opacity-50">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="opacity-75">{description}</p>
            </div>
        </div>
    );
};

export function Projects()
{
    return (
        <section id="projects" className="p-4 md:px-8 flex justify-center">
        <div className="container justify-center">
            <Title>Projects</Title>
            <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map(({video, title, description, github, linkedin}, i) => (
                    <ProjectCard key={i} {...{title, description, video, github, linkedin}} />
                ))}
            </div>
        </div>
        </section>
    )
}