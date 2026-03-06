import { Title } from "../components/title";

const skills = [
{
    title: 'Full-Stack Web Development',
    desc: 'Expert in building web apps using modern JS frameworks like React, Next.js, and Vue. Skilled with CSS frameworks (Tailwind, Bootstrap, SCSS), SEO, SSR/CSR/ISR, SSG, hydration, islands architecture, and API integrations.'
},
{
    title: 'Mobile App Development',
    desc: 'Building cross-platform mobile apps with React Native & Flutter. Experienced in state management, native integrations, performance optimization, and app deployment to Play Store & App Store.'
},
{
    title: 'AI & Chatbot Development',
    desc: 'Developing intelligent AI chatbots using LangChain, LangGraph, RAG pipelines, low-code tools like Botpress. Includes memory management, tool integration, and autonomous multi-step workflows.'
},
{
    title: 'SaaS & Backend Development',
    desc: 'Designing scalable SaaS platforms with NodeJS, Express, FastAPI, Flask. Skilled in SQL/NoSQL databases (PostgreSQL, MySQL, MongoDB), JWT authentication, real-time sockets, and REST/GraphQL API development.'
},
{
    title: 'Game & Interactive 2D/3D Development',
    desc: 'Proficient with Unity, understanding physics engines, collision detection, culling, and game object management for smooth 2D/3D experiences.'
},
{
    title: 'Python Automation & DevOps',
    desc: 'Automation scripts, web scraping, API orchestration, task scheduling, and workflow management using Python and tools like Apache Airflow.'
},
{
    title: 'Business & Freelance Growth',
    desc: 'Managing freelance accounts, generating leads, writing winning proposals, client negotiation, and building long-term business partnerships for consistent revenue growth.'
}
];

const SkillCard = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <article className="capitalize group hover:text-primary transition-all duration-300 overflow-hidden relative bg-white bg-opacity-5 px-8 py-12 flex flex-col gap-4">
            <h3 className="font-bold text-4xl">
                {title}
            </h3>
            <p className="text-justify opacity-75">
                {desc}
            </p>
            <div className="group-hover:left-0 transition-all duration-300 absolute top-0 -left-full bg-secondary -z-10 w-full h-full"></div>
        </article>
    )
};

export function Skills()
{
    return (
        <section id="skills" className="px-4 md:px-8 py-6 flex justify-center">
            <div className="container flex flex-col gap-12">
                <Title>Skills</Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {skills.map(({title, desc}, i) => (
                        <SkillCard key={i} {...{title, desc}} />
                    ))}
                </div>
            </div>
        </section>
    )
}