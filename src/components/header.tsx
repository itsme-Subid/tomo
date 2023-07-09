/* eslint-disable @next/next/no-img-element */
"/* eslint-disable @next/next/no-img-element */"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Session } from "next-auth";
import { SignOut, GoogleSignIn, GitHubSignIn } from "./ui/buttons";
import { signOut } from "next-auth/react";


const Header = ({ session }: { session?: Session | null }) => {
  return (
    <header className="border-b sticky top-0 border-zinc-400/50">
      <div className="px-4 lg:px-10 py-2 flex justify-between items-center">
        <div className="logo">
          <Link className="text-xl text-zinc-600 font-semibold" href={"/"}>
            Tomo
          </Link>
        </div>
        {!session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="border-primary border py-2 px-5 rounded-lg hover:bg-primary/30 transition-all duration-300 ease-in-out flex gap-2 items-center group">
              Sign in{" "}
              <img
                className="w-0 transition-all ease-in-out group-hover:w-4"
                src="/icon/right.svg"
                alt=""
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <GoogleSignIn />
              <GitHubSignIn />
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <img
                className="w-10 h-10 rounded-full"
                src={session?.user.image as string}
                alt=""
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="p-1">
              <h3 className="text-base font-semibold">{session?.user.name}</h3>
              <p className="text-sm text-zinc-400">{session?.user.email}</p>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer outline-none focus:ring-1 ring-zinc-300 rounded-sm px-1 py-1">
                <div className="flex gap-2 ">
                  <img className="w-4" src="/icon/google.svg" alt="" />
                  <span>Settings</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer outline-none focus:ring-1 ring-zinc-300 rounded-sm ">
                <div className="flex gap-2 px-1 py-1">
                  <img className="w-4 h-4" src="/icon/github.svg" alt="" />
                  <span>Profile</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <SignOut />
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};



export default Header;
