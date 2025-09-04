import Image from "next/image";
import { Title } from "../components/title";

const technologies = [
    {
        label: "HTML5",
        img: "html.svg"
    },
    {
        label: "CSS3",
        img: "css.svg"
    },
    {
        label: "Javascript",
        img: "js.svg"
    },
    {
        label: "SCSS",
        img: "sass.svg"
    },
    {
        label: "Typescript",
        img: "ts.svg"
    },
    {
        label: "Tailwind",
        img: "tailwind.svg"
    },
    {
        label: "Bootstrap",
        img: "bootstrap.png"
    },
    {
        label: "MongoDB",
        img: "mongodb.svg"
    },
    {
        label: "NextJS",
        img: "nextjs.svg"
    },

    {
        label: "React",
        img: "reactjs.svg"
    },

    {
        label: "Git",
        img: "git.svg"
    },
    {
        label: "Python",
        img: "python.svg"
    },
    {
        label: "Numpy",
        img: "numpy.svg"
    },
    {
        label: "Pandas",
        img: "pandas.png"
    },
    {
        label: "Matplotlib",
        img: "matplotlib.png"
    },
    {
        label: "ExpressJS",
        img: "expressjs.svg"
    },
    {
        label: "Flask",
        img: "flask.png"
    },
    {
        label: "NodeJS",
        img: "nodejs.svg"
    },
    {
        label: "Socket.IO",
        img: "socketio.png"
    },
    {
        label: "Kali / Arch",
        img: "linux.png"
    },
    {
        label: "Bash",
        img: "bash.svg"
    },
    {
        label: "Docker",
        img: "docker.png"
    },
    {
        label: "Photoshop",
        img: "ps.svg"
    },
    {
        label: "Illustrator",
        img: "ai.svg"
    },

    {
        label: "Figma",
        img: "figma.svg"
    },
    {
        label: "Expo",
        img: "expo.svg"
    },
    {
        label: "MySQL",
        img: "mysql.png"
    },
    {
        label: "PostgreSQL",
        img: "postgres.png"
    },
    {
        label: "SQL Server",
        img: "sqlserver.png"
    },
    {
        label: "SQLite",
        img: "sqlite.webp"
    },
    {
        label: "Redis",
        img: "redis.png"
    },
    {
        label: "Firebase",
        img: "firebase.png"
    },

    {
        label: "C / C++",
        img: "cpp.png"
    },
    {
        label: "Java",
        img: "java.webp"
    },
    {
        label: "C#",
        img: "csharp.png"
    },
    {
        label: "WF/WPF",
        img: "dotnetcore.png"
    },

    {
        label: "Unity 2D",
        img: "unity.png"
    },
    {
        label: "LangChain",
        img: "langchain.jpeg"
    },
    {
        label: "LangGraph",
        img: "langgraph.svg"
    },
    {
        label: "Agno",
        img: "agno.jpeg"
    },
    {
        label: "FastAPI",
        img: "FastAPI.svg"
    }

]

const TechnologyComponent = ({ label, img }: { label: string, img: string }) => {
    return (
        <div className="bg-white bg-opacity-5 p-4 flex flex-col items-center justify-center gap-4 group hover:bg-primary">
            <Image 
                className="h-8 w-12 object-contain group-hover:saturate-100" 
                src={`/technologies/${img}`} 
                alt={label}
                width={48}
                height={32}
            />
            <p>{label}</p>
        </div>
    )
}

export function Technologies()
{
    return (
        <section id="technologies" className="px-4 py-6 md:p-8 flex justify-center">
            <div className="container flex flex-col gap-12">
                <Title>
                    Technologies
                </Title>
                <div className="text-xs grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-11 gap-2">
                    {technologies.map(({img, label}, i) => (
                        <TechnologyComponent key={i} {...{img, label}} />
                    ))}
                </div>
            </div>
        </section>
    )
}