import { getServerSession } from "next-auth";
import { getUserByUsername } from "@/server/actions/user/get";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import ProfileDetails from "@/components/profileDetails";

export default async function ProfilePage({
  params,
}: {
  params: {
    username: string;
  };
}) {
  if (!params.username) {
    return redirect("/feed");
  }
  const user = await getUserByUsername(params.username);
  const session = await getServerSession(authOptions);

  if (!user) {
    return redirect("/feed");
  }

  if (user.id === session?.user?.id) {
    return <ProfileDetails user={user} />;
  }

  return <ProfileDetails user={user} />;
}
