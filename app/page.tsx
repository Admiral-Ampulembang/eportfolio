import Image from "next/image";
import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import ContactMe from "@/components/contact_me";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
