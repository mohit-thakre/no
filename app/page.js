import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import center from "@/style/global.css";

export default function Home() {
  return (
    <div className="center bg w-full min-h-screen bg-black text-white ">
      <div className=" flex justify-start items-center flex-col py-10 w-full max-w-3xl  min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
