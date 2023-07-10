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
        }
      },
    },
  });

  return user;
}
