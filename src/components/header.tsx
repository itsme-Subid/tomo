/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <header className="border-b sticky top-0 border-zinc-400/50">
      <div className="px-4 lg:px-10 py-2 flex justify-between items-center">
        <div className="logo">
          <Link className="text-xl text-zinc-600 font-semibold" href={"/"}>
            Tomo
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="border-primary border py-2 px-5 rounded-lg hover:bg-primary/30 transition-all duration-300 ease-in-out flex gap-2 items-center group"
        >
          Get Started{" "}
          <img
            className="w-0 transition-all ease-in-out group-hover:w-4"
            src="/icon/right.svg"
            alt=""
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
