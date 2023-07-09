import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import CreatePost from "./createPost";

/* eslint-disable @next/next/no-img-element */
const FeedPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="container-custom-xs px-4 lg:px-0">
      {session && (
        <section className="create-post py-8 flex gap-4 border-b border-border">
          <img
            className="w-12 h-12 rounded-full"
            src={session?.user?.image as string}
            alt=""
          />
          <CreatePost userID={session?.user?.id!} />
        </section>
      )}
    </main>
  );
};

export default FeedPage;
