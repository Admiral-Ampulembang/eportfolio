import Image from "next/image";
import colors from "@/styles/colors";

export default function Navbar() {
    return (
        <nav 
            className="fixed top-0 left-0 w-full z-50 border-b bg-[url('/batik_bg.svg')] bg-repeat-x h-[100px]"
            style={{backgroundColor: colors.whiteSmoke}}    
        >
            <div className="relative w-full h-full flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image src="/batik_topleft.svg" alt="" width={100} height={100}/>
                    
                    {/* Logo */}
                    <a href="#home">
                        <Image src="/logo.svg" alt="logo" width={60} height={80}/>
                    </a>
                </div>

                <div className="flex items-center space-x-8" style={{color: colors.gray}}>
                    {/* Navigation links */}
                    <a href="#home">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="/cv.pdf" className="px-4 py-2 rounded transition" style={{backgroundColor: colors.beige, color: colors.gray}}>Download CV</a>

                    <Image src="/batik_topright.svg" alt="" width={100} height={100}/>
                </div>
            </div>
        </nav>
    )
}