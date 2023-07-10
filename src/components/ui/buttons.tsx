/* eslint-disable @next/next/no-img-element */
"use client";

import { signIn, signOut } from "next-auth/react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export const SignOut = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer flex gap-2 select-none hover:bg-zinc-200 outline-none rounded-sm p-2"
      onClick={() => signOut()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>
      <span>Sign Out</span>
    </DropdownMenuItem>
  );
};

export const GitHubSignIn = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer select-none hover:bg-zinc-200 outline-none rounded-sm"
      onClick={() =>
        signIn("github", {
          callbackUrl: "/profile",
        })
      }
    >
      <div className="flex gap-2 p-2">
        <img className="w-6 h-6" src="/icon/github.svg" alt="" />
        <span>Github</span>
      </div>
    </DropdownMenuItem>
  );
};

export const GoogleSignIn = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer hover:bg-zinc-200 outline-none rounded-sm"
      onClick={() =>
        signIn("google", {
          callbackUrl: "/profile",
        })
      }
    >
      <div className="flex gap-2 p-2">
        <img className="w-6 h-6" src="/icon/google.svg" alt="" />
        <span>Google</span>
      </div>
    </DropdownMenuItem>
  );
};
