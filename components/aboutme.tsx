import colors from "@/styles/colors";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="aboutme"
            className="min-h-screen flex flex-col justify-center px-6 lg:px-12 py-16 relative"
            style={{backgroundColor: colors.beige, scrollMarginTop: "50px"}}
        >
            <div className="lg:grid lg:grid-cols-2 gap-x-10 items-center">
                {/* left side */}
                <div className="relative flex items-center justify-center mb-10 lg:mb-0">
                    <div className="relative w-3/4 max-w-[280px] md:max-w-[320px] lg:max-w-[380px] flex justify-center scale-80">
                        {/* background block */}
                        <div className="w-full aspect-[380/600] shadow-lg" style={{backgroundColor: colors.lightgray}}></div>

                        {/* image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ml-[50px] -translate-y-1/2 
                        w-full max-w-[380px] aspect-[380/520] overflow-hidden shadow-xl">
                            <Image
                                src="/picture.jpg"
                                alt="picture"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="flex flex-col items-center lg:items-start justify-center text-center">
                    {/* title */}
                    <div className="max-w-[600px] w-full">
                        <h2
                            className="font-bold mb-12 sm:mb-10"
                            style={{ 
                                color: colors.coral, 
                                fontFamily: "Kiwi Maru",
                                fontSize: "clamp(36px, 4vw, 56px)"
                            }}
                        >
                            About Me
                        </h2>                        

                        {/* description */}
                        <p
                            className="text-lg lg:text-2xl leading-relaxed text-justify hyphens-none"
                            style={{ fontFamily: "Sawarabi Gothic", color: colors.darkgray}}
                        >
                            Hi! My name is <span style={{color: colors.coral}}>Admiral Ampulembang</span> and 
                            I am a <span style={{color: colors.coral}}>Computer Science graduate</span> from 
                            the <span style={{color: colors.coral}}>University of Liverpool</span> with an interest
                            for <span style={{color: colors.coral}}>AI</span>, <span style={{color: colors.coral}}>software development</span>,
                            and <span style={{color: colors.coral}}>web and mobile development</span>.
                            I enjoy exploring new technologies, working on personal projects, and finding practical ways to solve everyday problems with code.
                            I<span>'</span>m always learning, experimenting, and looking for new challenges that help me grow as a developer.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="mt-12 -translate-y-2 text-center w-full px-6"
                style={{
                    fontFamily: "Bubble Sans",
                    fontSize: "clamp(16px, 2vw, 22px)",
                    color: colors.darkgray
                }}
            >
                ~ The potential of technology is only limited by the scope of our imagination ~
            </div>
        </section>
    )
}