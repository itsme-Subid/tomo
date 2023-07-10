/* eslint-disable @next/next/no-img-element */
"/* eslint-disable @next/next/no-img-element */";
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

const Header = ({ session }: { session?: Session | null }) => {
  return (
    <header className="border-b sticky top-0 border-zinc-400/50">
      <div
        className="px-4 lg:px-10 py-2 flex justify-between items-center bg-white/40"
        style={{
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="logo">
          <Link className="text-xl text-rose-600 font-bold" href={"/"}>
            tomo
          </Link>
        </div>
        {!session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="border-primary border text-center py-2 px-5 rounded-lg hover:bg-primary/30 transition-all duration-300 ease-in-out flex gap-2 items-center group">
              Sign in
              <img
                className="w-0 transition-all duration-300 ease-in-out group-hover:block -ml-2 group-hover:ml-0 group-hover:w-4"
                src="/icon/right.svg"
                alt=""
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="p-2">
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
            <DropdownMenuContent align="end" className="p-2 w-[15rem]">
              <div className="user-details p-2">
                <h3 className="text-base font-semibold">
                  {session?.user.name}
                </h3>
                <p className="text-sm text-zinc-400">{session?.user.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer outline-none hover:bg-zinc-200 rounded-sm">
                <Link href={"/edit"} className="flex gap-2 p-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Edit</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer outline-none hover:bg-zinc-200 rounded-sm">
                <Link href={"/feed"} className="flex gap-2 p-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  <span>Create</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer outline-none hover:bg-zinc-200 rounded-sm">
                <Link href={"/leaderboard"} className="flex gap-2 p-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="#000"
                      d="M4 11v8h4v-8H4Zm6-6v14h4V5h-4Zm6 8v6h4v-6h-4Zm4 8H4q-.825 0-1.413-.588T2 19v-8q0-.825.588-1.413T4 9h4V5q0-.825.588-1.413T10 3h4q.825 0 1.413.588T16 5v6h4q.825 0 1.413.588T22 13v6q0 .825-.588 1.413T20 21Z"
                    />
                  </svg>
                  <span>Leaderboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer outline-none hover:bg-zinc-200 rounded-sm">
                <Link href={"/profile"} className="flex gap-2 p-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <span>Profile</span>
                </Link>
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
