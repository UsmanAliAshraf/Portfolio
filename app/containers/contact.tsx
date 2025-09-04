"use client";
import { Title } from "../components/title";
import { BsEnvelope, BsWhatsapp, BsLinkedin, BsInstagram, BsDiscord, BsReddit, BsFacebook } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import { MdEmail } from "react-icons/md";

<SiFiverr />
const contactMethods = [
    {
        icon: MdEmail,
        label: 'Email',
        value: 'Contact me',
        href: 'mailto:usmanaliashraf.uet@gmail.com',
        color: 'from-red-500 to-pink-500',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/20'
    },
    {
        icon: SiFiverr,
        label: 'Fiverr',
        isImage: true,
        value: 'View Profile',
        href: 'https://www.fiverr.com/startupbyusman',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/20'
    },
    {
        icon: BsWhatsapp,
        label: 'WhatsApp',
        value: 'Text me',
        href: 'https://wa.me/92319862285',
        color: 'from-green-400 to-green-600',
        bgColor: 'bg-green-400/10',
        borderColor: 'border-green-400/20'
    },
    {
        icon: BsLinkedin,
        label: 'LinkedIn',
        value: 'Let\'s Connect',
        href: 'https://www.linkedin.com/in/usmanaleeashraff/',
        color: 'from-blue-600 to-blue-800',
        bgColor: 'bg-blue-600/10',
        borderColor: 'border-blue-600/20'
    },
    {
        icon: BsInstagram,
        label: 'Instagram',
        value: 'See me here',
        href: 'https://instagram.com/usmanaliashraf_',
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20'
    },
    {
        icon: BsDiscord,
        label: 'Discord',
        value: 'Say hi',
        href: 'https://discord.gg/QbGS9pJk',
        color: 'from-indigo-500 to-purple-600',
        bgColor: 'bg-indigo-500/10',
        borderColor: 'border-indigo-500/20'
    },
    {
        icon: BsReddit,
        label: 'Reddit',
        value: 'Lets reddit',
        href: 'https://reddit.com/u/Smart_Cap5837',
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/20'
    },
    {
        icon: BsFacebook,
        label: 'Facebook',
        value: 'Lets be Friends',
        href: 'https://facebook.com/usmanaliashraf',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20'
    }
];
    
const ContactCard = ({ icon: Icon, label, value, href, color, bgColor, borderColor, isImage }: { 
    icon: any, label: string, value: string, href: string, color: string, bgColor: string, borderColor: string, isImage?: boolean
}) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${bgColor} ${borderColor} hover:border-opacity-40`}
        >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Icon */}
            <div className={`relative z-10 mb-4 text-4xl p-3 rounded-full bg-gradient-to-br ${color} text-white flex items-center justify-center`}>
                {(
                    <Icon />
                )}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2 text-white">{label}</h3>
                <p className="text-sm opacity-75 text-white">{value}</p>
            </div>
            
            {/* Hover effect line */}
            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
        </a>
    );
};
export function Contact() {
    return (
        <section id="contact" className="px-4 md:px-8 py-6 flex justify-center">
            <div className="container flex flex-col gap-16">
                <div className="text-center">
                    <Title>Get In Touch</Title>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-lighter mt-4 mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-lg opacity-75 max-w-2xl mx-auto">
                    Let’s connect! Projects, collabs, or even just a friendly hi — I’m always up for a chat. Send me a message!
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {contactMethods.map((method, i) => (
                        <ContactCard key={i} {...method} />
                    ))}
                </div>

                
            </div>
        </section>
    );
}
