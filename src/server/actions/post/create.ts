"use server";

import { prisma } from "@/server/db/prisma";

export default async function createPost({
  content,
  image,
  authorId,
}: {
  content: string;
  image?: string;
  authorId: string;
}) {
  const post = await prisma.user.update({
    where: {
      id: authorId,
    },
    data: {
      posts: {
        create: {
          content,
          image,
        },
      },
    },
  });

  return post;
}
