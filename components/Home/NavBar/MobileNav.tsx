import { NavLinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import Link from "next/link";

type Props = {
    showNav: boolean;
    closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {

    const sidebarOpenClose = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div>
            <div className={`fixed ${sidebarOpenClose} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70
             w-full h-screen`}></div>

            <div className={`text-white ${sidebarOpenClose}  fixed justify-center flex flex-col h-full transform transition-all 
            duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-1050`}>
                {NavLinks.map((link, index) => {
                    return <Link key={index} href={link.href} onClick={closeNav}>
                        <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white
                        sm:text-[30px]">{link.name}</p>
                    </Link>
                })}

                <X onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer" />
            </div>
        </div>
    );
}