export default function Footer() {
  return (
    <footer className="flex absolute bottom-0 flex-col items-center justify-center w-full border-t border-zinc-400/50 h-14">
      <p className="text-sm text-gray-800">
        made by{" "}
        <a className="text-rose-600 cursor-pointer" target="_blank" rel="noreferrer" href="https://gtihub.com/asrvd">
          ashish
        </a>{" "}
        &{" "}
        <a className="text-rose-600 cursor-pointer" target="_blank" rel="noreferrer" href="https://github.com/itsme-subid">
          subid
        </a>{" "}
        for{" "}
        <a className="text-rose-600 cursor-pointer" target="_blank" rel="noreferrer" href="https://hack4bengal.tech">
          hack4bengal
        </a>{" "}
        | illustrations by{" "}
        <a className="text-rose-600 cursor-pointer" target="_blank" rel="noreferrer" href="http://popsy.co">
          popsy
        </a>
      </p>
    </footer>
  );
}
