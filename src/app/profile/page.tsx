import { changeUsername } from "@/server/actions/user/edit";
import usernameExists from "@/server/actions/user/check";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRef } from "react";
import UsernameForm from "./form";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <p>Not signed in</p>;
  }

  const ue = await usernameExists({
    userId: session.user.id,
  });

  if (ue) {
    return <p>Username already exists</p>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <UsernameForm session={session} />
    </main>
  );
}
