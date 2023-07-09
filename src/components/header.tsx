/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="border-b sticky top-0 border-zinc-400/50">
      <div className="px-4 lg:px-10 py-2 flex justify-between items-center">
        <div className="logo">
          <Link className="text-xl text-zinc-600 font-semibold" href={"/"}>
            Tomo
          </Link>
        </div>
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
            <DropdownMenuItem>
              <div className="flex gap-2">
                <img className="w-4" src="/icon/google.svg" alt="" />
                <span>With Google</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex gap-2">
                <img className="w-4 h-4" src="/icon/github.svg" alt="" />
                <span>With Github</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
