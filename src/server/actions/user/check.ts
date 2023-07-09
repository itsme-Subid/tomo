"use server";

import { prisma } from "@/server/db/prisma";

export default async function usernameExists({
  userId,
}: {
  userId: string;
}): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      username: true,
    },
  });

  return !!user?.username;
}
