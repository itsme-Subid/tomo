import { prisma } from "@/server/db/prisma";

export async function getUser({ userId }: { userId: string }) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      followers: true,
      following: true,
      posts: true,
    },
  });

  return user;
}
