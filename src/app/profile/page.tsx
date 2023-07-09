import { changeUsername } from "@/server/actions/user/edit";
import usernameExists from "@/server/actions/user/check";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { generateFromEmail, generateUsername } from "unique-username-generator";

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
    <section>
      <form
        action={async (formData) => {
          "use server";

          await changeUsername({
            userId: session?.user?.id as string,
            username: formData.get("username") as string,
          });
        }}
      >
        <input name="username" type="text" placeholder="Enter your username" />
        <button type="submit">Change Username</button>
      </form>
    </section>
  );
}
