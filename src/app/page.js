import Image from "next/image";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Header from "./components/Header";
import Separator from "./components/Separator";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Header />
      <Separator />
      <SectionOne/>
      <Separator />
      <SectionTwo />      
      <Separator />
      <Footer />
    </div>
  );
}
