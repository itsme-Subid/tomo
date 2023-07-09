"use server";

import { prisma } from "@/server/db/prisma";

export default async function getPostWithUserById(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });

  return post;
}
