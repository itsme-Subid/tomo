/* eslint-disable @next/next/no-img-element */
"use client";

import { signIn, signOut } from "next-auth/react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import usernameExists from "@/server/actions/user/check";
import { changeUsername } from "@/server/actions/user/edit";
import { generateFromEmail, generateUsername } from "unique-username-generator";

export const SignOut = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer outline-none focus:ring-1 ring-zinc-300 rounded-sm px-1 py-1"
      onClick={() => signOut()}
    >
      Sign Out
    </DropdownMenuItem>
  );
};

export const GitHubSignIn = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer outline-none focus:ring-1 ring-zinc-300 rounded-sm "
      onClick={() => {
        signIn("github");
        
      }}
    >
      <div className="flex gap-2 px-1 py-1">
        <img className="w-4 h-4" src="/icon/github.svg" alt="" />
        <span>Profile</span>
      </div>
    </DropdownMenuItem>
  );
};

export const GoogleSignIn = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer outline-none focus:ring-1 ring-zinc-300 rounded-sm px-1 py-1"
      onClick={() => signIn("google")}
    >
      <div className="flex gap-2 ">
        <img className="w-4" src="/icon/google.svg" alt="" />
        <span>Settings</span>
      </div>
    </DropdownMenuItem>
  );
};
