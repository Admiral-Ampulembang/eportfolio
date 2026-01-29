"use client";

import Image from "next/image";
import { useState } from "react";
import colors from "@/styles/colors";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav
			className="fixed top-0 left-0 w-full z-50 bg-[url('/batik_bg.svg')] bg-repeat-x"
			style={{ backgroundColor: colors.whiteSmoke }}
		>
			<div className="relative h-[100px] flex items-center">
				{/* left batik + logo */}
				<div className="flex items-center gap-2 flex-shrink-0">
					<Image
						src="/batik_topleft.svg"
						alt=""
						width={100}
						height={100}
						className="h-[100px] w-auto flex-shrink-0"
					/>

					<a href="#home" className="flex-shrink-0">
						<Image src="/logo.svg" alt="logo" width={60} height={60} />
					</a>
				</div>

				{/* right side */}
				<div 
					className="ml-auto flex items-center gap-8"
					style={ {
						color: colors.darkgray, 
						fontFamily: "Kiwi Maru", 
						fontSize: "clamp(14px, 1.5vw, 18px)"
					}}
				>
					{/* navbar links */}
					<div className="hidden md:flex items-center gap-8">
						<a href="#home">Home</a>
						<a href="#aboutme">About Me</a>
						<a href="#projects">Projects</a>
						<a href="#contactme">Contact Me</a>
					</div>

					{/* mobile menu button */}
					<button className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
						<div className="space-y-1">
							<span className="block w-6 h-[2px]" style={{backgroundColor: colors.darkgray}}></span>
							<span className="block w-6 h-[2px]" style={{backgroundColor: colors.darkgray}}></span>
							<span className="block w-6 h-[2px]" style={{backgroundColor: colors.darkgray}}></span>
						</div>
					</button>

					{/* right batik */}
					<Image
						src="/batik_topright.svg"
						alt=""
						width={100}
						height={100}
						className="h-[100px] w-auto flex-shrink-0"
					/>
				</div>
			</div>

			{/* mobile dropdown */}
			{open && (
				<div
					className="md:hidden w-full py-6 flex flex-col items-center gap-6"
					style={{
						backgroundColor: colors.whiteSmoke,
						fontFamily: "Kiwi Maru",
						color: colors.darkgray
					}}
				>
					<a href="#home" onClick={() => setOpen(false)}>Home</a>
					<a href="#aboutme" onClick={() => setOpen(false)}>About Me</a>
					<a href="#projects" onClick={() => setOpen(false)}>Projects</a>
					<a href="#contactme" onClick={() => setOpen(false)}>Contact Me</a>
				</div>
			)}
		</nav>
	)
}