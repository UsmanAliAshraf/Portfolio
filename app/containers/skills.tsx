import { Title } from "../components/title";

const skills = [
    {
        title: 'Frontend Development',
        desc: 'CSS Frameworks like Tailwind, Bootstrap, SCSS along with Modern Javascript Frameworks like react. Understanding of metaframeworks like Next, SEO and SSG, SSR, CSR, ISR, hydration, islands and other web rendering techniques.'
    },
    {
        title: 'Backend Development',
        desc: 'NodeJS, Express, Flask, Fast API, working with template engines, databases from NoSQL to SQL; mongodb,  mySQL, sQLServer, postgreSQL, API Integration, JWT Authentication along with socket real-time connection.'
    },
    {
        title: 'Desktop Development',
        desc: 'Native Windows DevTools from .NET Development, Universal Windows Platform, Windows Forms (Winforms). Understanding of  Windows Presentation Foundation (WPF) etc'
    },
    {
        title: 'AI Chatbot Development',
        desc: ' AI chatbot dev with LangChain, LangGraph, RAG, Agno to hybrid like Botpress (low-code).'
    },
    {
        title: '2D Game Development',
        desc: 'Understanding of Unity Framework, and how these frameworks are made, from collision detection, culling to handling physics of game objects.'
    },
    {
        title: 'Python Automation',
        desc: 'Python automation with scripting, web scraping, task scheduling, APIs, and orchestration tools like Airflow.'
    },
    {
        title: 'Agentic AI',
        desc: 'Agentic AI with LangChain, LangGraph, tools integration, memory management, and autonomous multi-step workflows.'
    },
    {
        title: 'Business Development',
        desc: 'Managing freelance marketplace accounts to generate leads, write winning proposals, and secure projects. Skilled in client communication, negotiation, and building long-term partnerships for consistent business growth.'
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