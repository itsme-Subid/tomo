/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";

const Signin = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);
  modalRef.current?.addEventListener("close", () => {
    setIsOpen(false);
  });
  modalRef.current?.addEventListener(
    "click",
    ({ clientX, clientY }: { clientX: number; clientY: number }): void => {
      const dialogDimensions = modalRef.current?.getBoundingClientRect();
      if (
        clientX < dialogDimensions?.left! ||
        clientX > dialogDimensions?.right! ||
        clientY < dialogDimensions?.top! ||
        clientY > dialogDimensions?.bottom!
      ) {
        modalRef.current?.close();
      }
    }
  );
  return (
    <dialog ref={modalRef} className="outline-none min-w-[60vh] rounded-lg p-4">
      <h2 className="text-3xl font-bold">Sign in</h2>
      <p>Sign in to start post</p>
      <div className="signin-options gap-4 flex mt-4 flex-col">
        <button className="border-primary border p-5 rounded-lg hover:bg-primary/30 transition-all duration-300 ease-in-out flex gap-2 items-center w-full whitespace-nowrap justify-center">
          <img src="/icon/google.svg" className="w-6" alt="" />
          Sign in with Google
        </button>
        <button className="border-primary border p-5 rounded-lg hover:bg-primary/30 transition-all duration-300 ease-in-out flex gap-2 items-center w-full whitespace-nowrap justify-center">
          <img src="/icon/github.svg" className="w-6" alt="" />
          Sign in with Github
        </button>
      </div>
    </dialog>
  );
};

export default Signin;
