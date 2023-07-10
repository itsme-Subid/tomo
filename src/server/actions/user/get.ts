import { prisma } from "@/server/db/prisma";
import { Prisma } from "@prisma/client";

type UserWithEverything = Prisma.UserGetPayload<{
  include: {
    followers: true;
    following: true;
    posts: {
      include: {
        upvotes: true;
        author: true;
      };
    };
  };
}>;

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
