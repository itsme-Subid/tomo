"use server";

import { prisma } from "@/server/db/prisma";

export default async function createPost({
  title,
  content,
  image,
  authorId,
  tag,
}: {
  title: string;
  content: string;
  image?: string;
  authorId: string;
  tag: string;
}) {
  const post = await prisma.user.update({
    where: {
      id: authorId,
    },
    data: {
      posts: {
        create: {
          title,
          content,
          image,
          tag,
        },
      },
    },
  });

  return post;
}
