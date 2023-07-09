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
        <span>Apply</span>
      </button>
    </form>
  );
}
