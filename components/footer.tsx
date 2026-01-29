import Image from "next/image";
import colors from "@/styles/colors";

export default function Footer() {
    return (
        <footer
            className="relative w-full h-[250px] flex flex-col justify-center items-center text-center px-8"
            style={{
                backgroundColor: colors.whiteSmoke,
                backgroundImage: "url('/batik_bg.svg')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 100%",
            }}
        >
            {/* left batik */}
            <div className="absolute top-0 left-0 w-[250px] h-[250px]">
                <Image
                    src="/batik_botleft.svg"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            {/* right batik */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px]">
                <Image
                    src="/batik_botright.svg"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-[260px] md:px-[260px] sm:px-6">  
                {/* name */}
                <p
                    className="font-bold text-sm sm:text-base md:text-lg leading-tight break-words"
                    style={{ fontFamily: "Montserrat", color: colors.darkgray }}
                >
                    ADMIRAL DENALDY AMPULEMBANG
                </p>

                {/* year deployed */}
                <p
                    className="text-sm"
                    style={{ fontFamily: "Montserrat", color: colors.darkgray }}
                >
                    &copy; 2026
                </p>

                {/* line divider */}
                <div className="h-[1px] w-[60%] my-2" style={{backgroundColor: colors.darkgray}}></div>

                {/* Bottom line */}
                <p
                    className="text-[10px] sm:text-xs md:text-sm leading-relaxed break-words"
                    style={{ fontFamily: "Montserrat", color: colors.darkgray }}
                >
                    Built with <span style={{ color: colors.coral }}>Canva</span> · <span style={{ color: colors.coral }}>Next.js</span> · <span style={{ color: colors.coral }}>Tailwind CSS</span> · <span style={{ color: colors.coral }}>Email JS</span> · <span style={{ color: colors.coral }}>Vercel</span>
                </p>
            </div>
        </footer>
    );
}
