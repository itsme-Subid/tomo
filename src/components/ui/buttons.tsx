/* eslint-disable @next/next/no-img-element */
"use client";

import { signIn, signOut } from "next-auth/react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export const SignOut = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer select-none outline-none focus:ring-1 ring-zinc-300 rounded-sm p-2"
      onClick={() => signOut()}
    >
      Sign Out
    </DropdownMenuItem>
  );
};

export const GitHubSignIn = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer select-none outline-none focus:ring-1 ring-zinc-300 rounded-sm"
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
      className="cursor-pointer outline-none focus:ring-1 ring-zinc-300 rounded-sm"
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
