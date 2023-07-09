"use server";

import { prisma } from "@/server/db/prisma";

export default async function deleteComment({
  commentId,
}: {
  commentId: string;
}) {
  const comment = await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });

  return comment;
}
