import colors from "@/styles/colors";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="aboutme" className="flex flex-col lg:flex-row items-center justify-center py-20 px-8 bg-white min-h-screen" style={{backgroundColor: colors.beige}}>
            <div className="relative w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
                <div className="w-[45%] lg:w-[380px] aspect-[380/600] shadow-lg" style={{backgroundColor: colors.lightgray}}></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ml-[50px] -translate-y-1/2 w-[45%] max-w-[380px] aspect-[380/520] overflow-hidden shadow-xl">
                    <Image
                        src="/picture.jpg"
                        alt="picture"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-12 text-justify">
                <h2 className="text-4xl font-bold mb-4 text-black text-center" style={{color: colors.lightPink}}>About Me</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            {/* <p className="mt-8 text-center italic" style={{color: colors.gray}}>
                ~ The potential of technology is only limited by the scope of our imagination. ~
            </p> */}
        </section>
    )
}