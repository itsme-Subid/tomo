import { prisma } from "@/server/db/prisma";

export async function getUser({ userId }: { userId: string }) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      followers: true,
      following: true,
      posts: {
        include: {
          upvotes: true,
          author: true,
        },
        orderBy: {
          postedAt: "desc",
        },
      },
    },
  });

  return user;
}

export async function getUserByUsername(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      followers: true,
      following: true,
      posts: {
        include: {
          upvotes: true,
          author: true,
        },
        orderBy: {
          postedAt: "desc",
        },
      },
    },
  });

  return user;
}

export async function getUserKarma() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      image: true,
      karma: true,
    },
    orderBy: {
      karma: "desc",
    },
    take: 10,
  });
  return users;
}

export async function getOnlyUser(id: string) {
  const users = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      username: true,
      bio: true,
    },
  });
  return users;
}
