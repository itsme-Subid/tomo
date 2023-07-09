import { prisma } from "@/server/db/prisma";

export async function followUser({
  userId,
  followId,
}: {
  userId: string;
  followId: string;
}) {
  const follow = await prisma.user.update({
    where: { id: userId },
    data: {
      following: {
        connect: {
          id: followId,
        },
      },
    },
  });

  return follow;
}

export async function UnfollowUser({
  userId,
  followId,
}: {
  userId: string;
  followId: string;
}) {
  const unfollow = await prisma.user.update({
    where: { id: userId },
    data: {
      following: {
        disconnect: {
          id: followId,
        },
      },
    },
  });

  return unfollow;
}
