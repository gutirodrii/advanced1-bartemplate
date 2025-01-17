import Image from "next/image";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Header from "./components/Header";
import Separator from "./components/Separator";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";


export default function Home() {
  return (
    <div className="flex flex-col h-full w-full items-center">
      <Header />
      <Separator />
      <SectionOne/>
      <Separator />
      <SectionTwo />      
      <SectionThree />
      <SectionFour />
    </div>
  );
}
