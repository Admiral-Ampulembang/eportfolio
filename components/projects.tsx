"use client";

import Image from "next/image";
import colors from "@/styles/colors";
import { projects } from "@/data/projectsData";
import { FiGithub, FiExternalLink } from "react-icons/fi"; 

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
            <div className="overflow-x-auto w-full">
                <div className="flex gap-6 pb-6">
                    {projects.map((project, index) => (
                        <div key={index} 
                            className="flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[480px] min-h-[480px] max-h-[480px] rounded-[24px] 
                            overflow-hidden shadow-md flex flex-col transition hover:scale-[1.01] border"
                            style={{ 
                                backgroundColor: colors.beige,
                                borderColor: "rgba(0,0,0,0.05)"
                            }}
                        >
                            {/* image */}
                            <div className="relative w-full block h-[335px] min-h-[335px] max-h-[335px]">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    priority={index === 0}
                                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
                                    className="object-cover"
                                />
                            </div>

                            {/* project name */}
                            <div 
                                className="relative h-[80px] min-h-[80px] max-h-[80px] flex items-center justify-center px-4 overflow-hidden border-t border-b flex-shrink-0"
                                style={{ 
                                    backgroundColor: colors.beige, 
                                    borderColor: "rgba(0,0,0,0.08)"
                                }}
                            >
                                {/* Batik Background Pattern */}
                                <span className="absolute inset-0"
                                    style={{
                                        backgroundImage: "url('/batik_bg.svg')",
                                        backgroundRepeat: "repeat",
                                        backgroundSize: "120px auto",
                                        opacity: 0.5,
                                        mixBlendMode: "multiply",
                                        pointerEvents: "none"
                                    }}
                                />

                                {/* Project Title */}
                                <h3
                                    className="relative z-10 text-base font-bold text-center tracking-wide"
                                    style={{ fontFamily: "Kiwi Maru", color: colors.darkgray }}
                                >
                                    {project.title}
                                </h3>
                            </div>

                            {/* links */}
                            <div 
                                className="h-[65px] min-h-[65px] max-h-[65px] flex items-center justify-stretch text-sm font-medium flex-shrink-0"
                                style={{ color: colors.darkgray, fontFamily: "Kiwi Maru" }}
                            >
                                {/* GitHub Link */}
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 h-full hover:bg-black/5 transition-colors"
                                >
                                    <FiGithub className="text-lg" />
                                    <span>GitHub</span>
                                </a>

                                {/* Vertical Divider */}
                                <div className="w-[1px] h-6 bg-black/10 self-center" />

                                {/* Live Link (Conditional fallback check) */}
                                {project.live ? (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 h-full hover:bg-black/5 transition-colors"
                                    >
                                        <FiExternalLink className="text-lg" />
                                        <span>Live</span>
                                    </a>
                                ) : (
                                    <div className="flex-1 flex items-center justify-center gap-2 h-full opacity-30 cursor-not-allowed select-none">
                                        <FiExternalLink className="text-lg" />
                                        <span>Live</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}