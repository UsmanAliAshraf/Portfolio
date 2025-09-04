"use client";
import Typewriter from 'typewriter-effect';
import { Title } from '../components/title';
import Image from 'next/image';

export function Hero() {
    return (
        <section 
            id="about" 
            className="w-full flex justify-center px-4 md:px-8 my-20"
        >
            <div className="container flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                
                {/* Left Side - Text */}
                <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2 md:gap-4 max-w-2xl">
                    <Title>
                        Hi, my name is
                    </Title>
                    <h1 className="text-primary-lighter text-5xl md:text-6xl font-bold">
                        Usman Ali Ashraf
                    </h1>
                    <h2 className="text-primary-light text-xl md:text-4xl lg:text-6xl font-bold">
                        <Typewriter
                            options={{
                                strings: [
                                    'Freelance Software Engineer',
                                    'Full Stack Web Developer',
                                    'AI Chatbot Developer',
                                    'Python Developer',
                                    'Business Developer'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className="max-w-4xl text-xs md:text-base mb-4 leading-loose opacity-75">
                        Proficient in C/C++, C#, Python, JavaScript, React, Node.js, Express, AI and more. 
                        Highly adaptable to emerging technologies, I thrive in fast-paced environments and 
                        build innovative, scalable solutions tailored to evolving digital needs.
                    </p>
                    <div>
                        <button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = `/resume.pdf`;
                                link.download = 'resume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="overflow-hidden relative text-xs md:text-base border-2 border-secondary p-4 text-secondary font-bold transition-all duration-300 hover:text-primary-dark group"
                        >
                            <span>Check Out My Resume</span>
                            <div className='absolute -z-10 top-0 -left-full transition-all duration-300 group-hover:left-0 w-full h-full bg-secondary' />
                        </button>
                    </div>
                </div>

                {/* Right Side - Picture */}
<div className="relative group -mt-14 -translate-x-4 bg-transparent rounded-2xl overflow-hidden">
  <Image
    src="/me.png"
    alt="Usman Ali Ashraf"
    width={375}
    height={375}
    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 mix-blend-normal"
    style={{
      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)'
    }}
    priority
  />
</div>


            </div>
        </section>
    )
}
