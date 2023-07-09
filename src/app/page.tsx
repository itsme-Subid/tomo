/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";
import Signin from "@/components/modal/signin";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Content setIsOpen={setIsOpen} />
      <Signin isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Content = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => (
  <main>
    <div className="container-custom-md min-h-screen px-4 py-2 flex flex-col lg:flex-row items-center justify-center lg:gap-8">
      <div className="content">
        <span className=" text-7xl text-zinc-600 font-black tracking-wider lg:text-balance">
          Lorem ipsum dolor sit amet.
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="border-primary mt-8 w-fit border py-4 px-10 rounded-lg hover:bg-primary/30 transition-all duration-300 ease-in-out flex gap-2 items-center group mx-auto lg:mx-0"
        >
          Get Started{" "}
          <img
            className="w-0 transition-all ease-in-out group-hover:w-4"
            src="/icon/right.svg"
            alt=""
          />
        </button>
      </div>
      <Image
        src={"https://illustrations.popsy.co/red/woman-hugging-earth.svg"}
        width={500}
        height={500}
        className=""
        alt=""
      />
    </div>
  </main>
);

export default Home;
