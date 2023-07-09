"use client";

import { useRef } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import type { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { updateUsername } from "@/server/actions/user/userName";
import { twMerge } from "tailwind-merge";

export default function UsernameForm({ session }: { session: Session | null }) {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  const router = useRouter();
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formData.append("userId", session?.user?.id ?? "");
        try {
          await updateUsername(formData);
          router.refresh();
        } catch (e) {
          formRef.current?.reset();
          console.log(e);
        }
      }}
      className="border border-gray-300 rounded-md p-8 flex flex-col gap-2 shadow min-w-[90vw] lg:min-w-[40vw]"
    >
      <h1 className="text-2xl font-bold leading-none">Select username</h1>
      <p className="-mt-1 mb-2 text-sm text-zinc-600">
        Select a unique username for your tomo account
      </p>
      <input
        name="username"
        type="text"
        placeholder="Enter your username"
        className="bg-zinc-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-primary w-fit py-2 px-6 rounded-md text-white flex gap-2 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className={
            twMerge("w-0 transition-all duration-300", pending && "w-5 h-5") ??
            ""
          }
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            fill="#fff"
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
        <span>Apply</span>
      </button>
    </form>
  );
}
