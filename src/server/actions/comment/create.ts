"use server";

import { prisma } from "@/server/db/prisma";

export default async function createComment({
  content,
  authorId,
  postId,
}: {
  content: string;
  authorId: string;
  postId: string;
}) {
  const comment = await prisma.user.update({
    where: {
      id: authorId,
    },
    data: {
      comments: {
        create: {
          content,
          post: {
            connect: {
              id: postId,
            },
          },
        },
      },
    },
  });

  return comment;
}
