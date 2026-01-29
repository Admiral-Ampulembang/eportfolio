"use client";

import Image from "next/image";
import colors from "@/styles/colors";
import { projects } from "@/data/projectsData";

export default function Projects() {
    return (
        <section id="projects"
            className="min-h-screen flex flex-col px-6 lg:px-12 py-16"
            style={{backgroundColor: colors.whiteSmoke, scrollMarginTop: "50px"}}
        >
            {/* title */}
            <h2
                className="w-full text-center font-bold mb-12"
                style={{
                    fontFamily: "Kiwi Maru",
                    color: colors.coral,
                    fontSize: "clamp(36px, 4vw, 56px)"
                }}
            >
                Projects
            </h2>

            {/* container */}
            <div className="overflow-x-auto">
                <div className="flex gap-6 pb-6">
                    {projects.map((project, index) => (
                        <a key={index} href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[460px] rounded-xl 
                        overflow-hidden shadow-lg flex flex-col transition hover:scale-[1.02] cursor-pointer"
                        style={{backgroundColor: colors.whiteSmoke}}>
                            {/* image (80% of the card) */}
                            <div className="relative h-4/5 w-full">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* title (20% of the card) */}
                            <div 
                                className="relative h-1/5 flex items-center justify-center px-4 overflow-hidden"
                                style={{backgroundColor: colors.beige}}
                            >
                                {/* batik background */}
                                <span className="absolute inset-0"
                                    style={{
                                        backgroundImage: "url('/batik_bg.svg')",
                                        backgroundRepeat: "repeat",
                                        backgroundSize: "120px auto",
                                        opacity: 0.6,
                                        mixBlendMode: "multiply",
                                        pointerEvents: "none"
                                    }}
                                />

                                {/* project title */}
                                <h3
                                    className="relative z-10 text-lg font-bold text-center"
                                    style={{ fontFamily: "Kiwi Maru", color: colors.darkgray }}
                                >
                                    {project.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}