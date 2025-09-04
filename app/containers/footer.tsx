import Image from "next/image";
import Logo from "@/public/logo.svg";

export function Footer()
{
    return (
        <footer className="bg-white bg-opacity-5 h-20 p-4 flex justify-center">
            <div className="container flex gap-4 items-center justify-center">
                <div>
                    <Image src={Logo} alt="Logo" className="w-8" />
                </div>
                <span>
                    For query, contact me on social or email at usmanaliashraf.uet@gmail.com
                </span>
            </div>
        </footer>
    )
}