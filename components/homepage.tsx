import colors from "@/styles/colors";

export default function Homepage() {
    return (
        <section id="home" className="flex flex-col items-center justify-center min-h-screen"
        style={{backgroundColor: colors.whiteSmoke}} >
            <h1 className="text-5xl font-bold mb-4" style={{color: colors.lightPink}}>
                ADMIRAL
            </h1>
            <p className="text-2xl" style={{color: colors.gray}}>
                Computer Science Graduate
            </p>
        </section>
    )
}