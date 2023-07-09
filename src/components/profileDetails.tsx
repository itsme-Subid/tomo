/* eslint-disable @next/next/no-img-element */
import { Prisma } from "@prisma/client";
import Link from "next/link";

type UserWithEverything = Prisma.UserGetPayload<{
  include: {
    posts: true;
    followers: true;
    following: true;
  };
}>;

const ProfileDetails = async ({ user }: { user: UserWithEverything }) => {
  return (
    <div className="container-custom-xs px-4 lg:px-0">
      <section className="flex flex-col gap-2 border-b border-border py-8">
        <div className="flex items-center gap-4">
          <img
            src={
              user.image ||
              `https://avatars.dicebear.com/api/avataaars/${user.name}.svg`
            }
            className="rounded-full"
            alt=""
          />
          <div className="wrapper flex flex-1 items-center">
            <div className="left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-500">@{user.username}</p>
            </div>
            <Link className="self-start ml-auto" href={"/setting"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="bio flex w-full">
          <p>{user.bio}</p>
        </div>
        <div className="reputation flex gap-4 items-center">
          <button className="px-4 py-2 bg-zinc-300 rounded-md">Follow</button>
          <p>
            <span>{user.karma}</span> Tomo Points
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;