"use client";
import { useEffect, useRef, useState } from "react";
import { Title } from "../components/title";

const educationTimeline = [
    {
        duration: '2023 - 2027',
        title: 'University of Engineering And Technology',
        desc: 'Bachelors - Computer Science'
    },
    {
        duration: '2020 - 2022',
        title: 'Aspire Group of Colleges',
        desc: 'Intermediate in Computer Science'
    },
    {
        duration: '2018 - 2020',
        title: 'Govt. High School',
        desc: 'Matriculation - Science'
    }
];

const experienceTimeLine = [
    {
        duration : '2023 - Current',
        title: 'Freelance Software Engineer',
        desc: 'Fiverr Seller'
    },
    {
        duration: '2025 - Current',
        title: 'AI Chatbot and Automation Developer',
        desc: 'Fiverr Seller'
    },
    {
        duration: '2024',
        title: 'Frontend Developer Intern',
        desc: 'YoungDev Interns'
    }
];

const TimeLineElement = ({ duration, title, desc, showLine }: { duration: string, title: string, desc: string, showLine: boolean }) => {
    const [height, setHeight] = useState(0)
    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        setHeight((ref.current as HTMLLIElement).clientHeight);
    }, []);

    return (
        <li ref={ref} className="relative left-20 w-[calc(100%-5rem)]">
            <div className="flex flex-col">
                <h4 className="text-lg text-primary-lighter font-bold">{duration}</h4>
                <p className="font-bold text-lg">{title}</p>
                <p className="opacity-80">{desc}</p>
            </div>
            <div className="absolute w-12 h-12 animate-pulse bg-gradient-radial from-secondary to-transparent to-50%  -z-10 rounded-full top-0 -left-20"></div>
            <div className="absolute w-4 h-4 bg-secondary rounded-full top-4 -left-16"></div>
            {showLine && <div
                className="absolute -z-20 opacity-75 w-[1px] bg-primary-lighter top-6 left-[-3.5rem]"
                style={{ height: `calc(3rem + ${height}px)`}}    
            ></div>}
        </li>
    )
}

const TimelineComponent = ({ title, data }: { title: string, data: { duration: string, title: string, desc: string }[] }) => {
    return (
        <div className="flex flex-col gap-12">
            <div className="relative left-20">
                <Title>{title}</Title>
            </div>
            <ul className="flex flex-col gap-12 relative">
                {data.map(({duration, title, desc}, i) => (
                    <TimeLineElement key={i} {...{ duration, title, desc, showLine: data.length != i + 1}} />
                ))}
            </ul>
        </div>
    );
}

export function Timeline()
{
    return (
        <section id="timeline" className="w-full flex justify-center px-4 md:px-8 my-20">
            <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
                <TimelineComponent title="Education" data={educationTimeline} />
                <TimelineComponent title="Experience" data={experienceTimeLine} />
            </div>
        </section>
    )
}