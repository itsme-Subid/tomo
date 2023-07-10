import usernameExists from "@/server/actions/user/check";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import UsernameForm from "../../components/usernameForm";
import ProfileDetails from "@/components/profileDetails";
import { getUser } from "@/server/actions/user/get";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }
  const user = await getUser({ userId: session?.user?.id as string });

  const ue = await usernameExists({
    userId: session.user.id,
  });

  if (ue && user) {
    return <ProfileDetails user={user} />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <UsernameForm session={session} />
    </main>
  );
};
export default ProfilePage;
