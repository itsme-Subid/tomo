"use server";

import { prisma } from "@/server/db/prisma";

export async function getPostWithUserById(id: string) {
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

export async function getPostsWithUser() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return posts;
}
