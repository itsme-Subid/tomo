"use client";

import { useState } from "react";
import { followUser, UnfollowUser } from "@/server/actions/user/follow";
import { Prisma } from "@prisma/client";
import type { Session } from "next-auth";

type UserWithEverything = Prisma.UserGetPayload<{
  include: {
    posts: {
      include: { author: true; upvotes: true };
    };
    followers: true;
    following: true;
  };
}>;

export default function FollowComponent({
  user,
  session,
}: {
  user: UserWithEverything;
  session: Session | null;
}) {
  const [followersCount, setFollowersCount] = useState(user.followers.length);
  const [following, setFollowing] = useState(
    user.followers.find((follower) => follower.id === session?.user?.id)
      ? true
      : false
  );
  const [pending, setPending] = useState(false);

  if (!session?.user) {
    return null;
  } else {
    const handleFollow = async () => {
      setFollowersCount(followersCount + 1);

      setPending(true);
      const follow = await followUser({
        userId: user.id,
        followId: session?.user?.id as string,
      });

      setPending(false);
      setFollowing(true);
    };

    const handleUnfollow = async () => {
      setFollowersCount(followersCount - 1);
      setPending(true);
      const follow = await UnfollowUser({
        userId: user.id,
        followId: session.user?.id as string,
      });
      setPending(false);
      setFollowing(false);
    };

    return (
      <div className="flex flex-col items-center">
        {following ? (
          <button
            className="px-6 w-fit ml-auto py-2 bg-primary text-white rounded-full"
            onClick={handleUnfollow}
            disabled={pending}
          >
            Unfollow
          </button>
        ) : (
          <button
            className="px-6 w-fit ml-auto py-2 bg-primary text-white rounded-full"
            onClick={handleFollow}
            disabled={pending}
          >
            Follow
          </button>
        )}
      </div>
    );
  }
}
