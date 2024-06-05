import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import Feedback from "@/sections/Feedback";
import Hero from "@/sections/Hero";
import Insights from "@/sections/Insights";
import Purchase from "@/sections/Purchase";
import SignIn from "@/sections/SignIn";
import TheDevice from "@/sections/TheDevice";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#080a16] .orbitron">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      {/* <TheDevice /> */}
      <Purchase />
      <SignIn />
      {/* <Insights /> */}
      {/* <Feedback /> */}
      <Footer />
    </div>
  );
}
