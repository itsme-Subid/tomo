"use server";

import { prisma } from "@/server/db/prisma";

export default async function deletePost({ postId }: { postId: string }) {
  const post = await prisma.post.delete({
    where: {
      id: postId,
    },
  });

  return post;
}
