"use server";

import { prisma } from "@/server/db/prisma";
import { revalidatePath } from "next/cache";

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
      followers: {
        connect: {
          id: followId,
        },
      },
    },
  });

  revalidatePath(`/user/${follow.username}`);

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
      followers: {
        disconnect: {
          id: followId,
        },
      },
    },
  });

  revalidatePath(`/user/${unfollow.username}`);

  return unfollow;
}
