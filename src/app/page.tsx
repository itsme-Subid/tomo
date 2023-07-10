/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Home = () => {
  return (
    <main>
      <div className="container-custom-md min-h-screen px-4 py-2 flex flex-col lg:flex-row items-center justify-center lg:gap-8">
        <div className="content">
          <div className=" text-7xl text-zinc-800 font-black tracking-tight lg:text-balance">
            gamifying <span className="text-rose-600">social</span> &{" "}
            <span className="text-rose-600">environmental</span> well-being
            through a unique social media
          </div>
          <div className="flex flex-col lg:flex-row gap-2 mt-4">
            <button
              className="px-4 py-3 bg-zinc-300/50 hover:bg-zinc-300/90 duration-300 rounded-lg flex gap-2"
              onClick={() => {
                signIn("google", {
                  callbackUrl: "/profile",
                });
              }}
            >
              <img className="w-6 h-6" src="/icon/google.svg" alt="" />
              <span>Continue With Google</span>
            </button>
            <button
              className="px-4 py-3 bg-zinc-300/50 hover:bg-zinc-300/90 duration-300 rounded-lg flex gap-2"
              onClick={() => {
                signIn("github", {
                  callbackUrl: "/profile",
                });
              }}
            >
              <img className="w-6 h-6" src="/icon/github.svg" alt="" />
              <span>Continue With Github</span>
            </button>
          </div>
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
};

export default Home;
