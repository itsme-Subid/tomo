"use server";

import { prisma } from "@/server/db/prisma";

export default async function deleteUser({ userId }: { userId: string }) {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return user;
}
