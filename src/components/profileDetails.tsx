/* eslint-disable @next/next/no-img-element */
import { Prisma } from "@prisma/client";
import Link from "next/link";
import PostsComponent from "@/components/posts";
import FollowComponent from "./follow";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type UserWithEverything = Prisma.UserGetPayload<{
  include: {
    posts: {
      include: { author: true; upvotes: true };
    };
    followers: true;
    following: true;
  };
}>;

const ProfileDetails = async ({ user }: { user: UserWithEverything }) => {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.id === user.id);
  return (
    <div className="container-custom-xs px-4 lg:px-0">
      <section className="flex flex-col gap-2 border-b border-zinc-400 pt-8 pb-4">
        <div className="flex items-center gap-4">
          <img
            src={
              user.image ||
              `https://avatars.dicebear.com/api/avataaars/${user.name}.svg`
            }
            className="rounded-full w-20 h-20"
            alt=""
          />
          <div className="wrapper flex flex-1 items-center">
            <div className="left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-500">@{user.username}</p>
            </div>
            {session?.user?.id === user.id ? (
              <Link
                className="self-start ml-auto p-2 hover:bg-zinc-200 rounded-full"
                href={"/setting"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            ) : (
              <FollowComponent user={user} session={session} />
            )}
          </div>
        </div>
        <div className="bio flex w-full">
          <p>{user.bio}</p>
        </div>
        <div className=" flex items-center justify-between">
          <div className="reputation border-between flex items-center">
            <p className="pr-2">
              <span>{user.followers.length}</span> Followers
            </p>
            <p className="px-2">
              <span>{user.following.length}</span> Following
            </p>
            <p className="pl-2">
              <span>{user.karma}</span> Tomo Points
            </p>
          </div>
        </div>
      </section>
      {user.posts.length > 0 ? (
        <PostsComponent posts={user.posts} />
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center h-full mt-4">
          <h2 className="font-bold text-2xl">
            You {`haven't`} posted anything yet!
          </h2>
          <Link
            href={"/feed"}
            className="px-4 py-3 bg-zinc-300/50 hover:bg-zinc-300/90 duration-300 rounded-lg"
          >
            Create Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
