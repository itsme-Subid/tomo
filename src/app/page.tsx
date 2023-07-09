"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Home = () => {
  return (
    <main>
      <div className="container-custom-md min-h-screen px-4 py-2 flex flex-col lg:flex-row items-center justify-center lg:gap-8">
        <div className="content">
          <div className=" text-7xl text-zinc-600 font-black tracking-wider lg:text-balance">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="flex flex-col lg:flex-row gap-2 mt-4">
            <button
              className="px-4 py-2 bg-zinc-300 rounded-lg"
              onClick={() => {
                signIn("google", {
                  callbackUrl: "/profile",
                });
              }}
            >
              Continue With Google
            </button>
            <button
              className="px-4 py-2 bg-zinc-300 rounded-lg"
              onClick={() => {
                signIn("github", {
                  callbackUrl: "/profile",
                });
              }}
            >
              Continue With Github
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
