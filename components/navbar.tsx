"use client";

import Image from "next/image";
import { useState } from "react";
import colors from "@/styles/colors";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100px",
                backgroundColor: colors.whiteSmoke,
                backgroundImage: "url('/batik_bg.svg')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 100%",
                zIndex: 50,
            }}
        >
            {/* left batik */}
            <img
                src="/batik_topleft.svg"
                alt=""
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100px",
                    height: "100px",
                }}
            />

            {/* right batik */}
            <img
                src="/batik_topright.svg"
                alt=""
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100px",
                }}
            />

            {/* navigation bar */}
            <div
                style={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "120px",
                    paddingRight: "120px",
                    fontFamily: "Kiwi Maru",
                    color: colors.darkgray,
                    fontSize: "16px",
                    gap: "32px",
                }}
            >
                {/* navigation links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home">Home</a>
                    <a href="#aboutme">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#contactme">Contact Me</a>
                </div>

                {/* mobile logo button */}
                <div className="md:hidden flex-shrink-0 cursor-pointer" onClick={() => setOpen(!open)}>
                <Image src="/logo.svg" alt="Logo" width={60} height={60} />
                </div>
            </div>

            {/* mobile dropdown */}
            {open && (
                <div
                    className="md:hidden w-full py-6 flex flex-col items-center gap-6"
                    style={{
                        backgroundColor: colors.whiteSmoke,
                        fontFamily: "Kiwi Maru",
                        color: colors.darkgray,
                    }}
                >
                    <a href="#home" onClick={() => setOpen(false)}>Home</a>
                    <a href="#aboutme" onClick={() => setOpen(false)}>About Me</a>
                    <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#contactme" onClick={() => setOpen(false)}>Contact Me</a>
                </div>
            )}
        </nav>
    );
}
