"use client";
import Image from "next/image";
import AnimatedIcon from "./components/animated-icon";
import MailUs from "./components/mail-us";
import { MainText } from "./components/main-text";
import logo from "../public/logo.svg";
import { Spotlight } from "./components/spotlight";

export default function Home() {
  const words = ["Web", "Mobile", "Desktop", "APIs"];
  return (
    <>
      <Spotlight />
      <div className="flex flex-col justify-center items-center px-4 h-screen">
        <div className="text-4xl mx-auto font-normal  text-white">
          Build
          <MainText words={words} /> <br />
          With
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            className="inline-block"
          />
        </div>
        <AnimatedIcon />
      </div>
      <div
        className="h-[50rem] w-full bg-dot-white/[0.2]  relative flex items-center justify-center"
        id="mail"
      >
        <p className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <MailUs />
        </p>
      </div>
    </>
  );
}
