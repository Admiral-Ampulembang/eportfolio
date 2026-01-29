import colors from "@/styles/colors";

export default function Homepage() {
    return (
        <section id="home" 
            className="flex flex-col items-center justify-center min-h-screen px-4"
            style={{backgroundColor: colors.whiteSmoke}}
        >
            <h1
                className="font-bold mb-4 scale-x-[1.05] sm:scale-x-[1.1] md:scale-x-[1.2]"
                style={{
                    color: colors.coral,
                    fontFamily: "Ninja Naruto",
                    fontSize: "clamp(80px, 15vw, 300px)",
                    display: "inline-block"
                }}
            >
                ADMIRAL
            </h1>

            <p style={{
                color: colors.darkgray,
                fontFamily: "Kiwi Maru",
                fontSize: "clamp(24px, 3vw, 48px)"
            }}>
                Computer Science Graduate
            </p>
        </section>
    )
}