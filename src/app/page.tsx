"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home = () => {
  return (
    <>
      <Content />
    </>
  );
};

const Content = () => {
  return (
    <main>
      <div className="container-custom-md min-h-screen px-4 py-2 flex flex-col lg:flex-row items-center justify-center lg:gap-8">
        <div className="content">
          <div className=" text-7xl text-zinc-600 font-black tracking-wider lg:text-balance">
            Lorem ipsum dolor sit amet.
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="sigin cursor-pointer border-primary mt-8 w-fit border py-4 px-10 rounded-xl hover:bg-primary/30 transition-all duration-300 ease-in-out flex gap-2 items-center group mx-auto lg:mx-0">
              Get Started
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sign in with</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Google</DropdownMenuItem>
              <DropdownMenuItem>Github</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <div className="flex flex-col lg:flex-row gap-2 mt-4">
            <button className="px-4 py-2 bg-zinc-300 rounded-lg">
              Continue With Google
            </button>
            <button className="px-4 py-2 bg-zinc-300 rounded-lg">
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
