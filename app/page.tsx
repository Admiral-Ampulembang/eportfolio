import Image from "next/image";
import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import AboutMe from "@/components/aboutme";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <AboutMe />
    </>
  );
}
