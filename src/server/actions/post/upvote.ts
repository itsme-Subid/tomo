"use server";

import { prisma } from "@/server/db/prisma";

export async function addUpvote({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) {
  const post = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      upvotes: {
        create: {
          user: {
            connect: {
              id: userId,
            },
          },
        },
      },
    },
  });

  return post;
}

export async function removeUpvote({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) {
  const post = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      upvotes: {
        delete: {
          userId_postId: {
            userId,
            postId,
          },
        },
      },
    },
  });

  return post;
}

export async function addKarma({ userId }: { userId: string }) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      karma: {
        increment: 10,
      },
    },
  });

  return user;
}

export async function removeKarma({ userId }: { userId: string }) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      karma: {
        decrement: 10,
      },
    },
  });

  return user;
}

export async function hasUpvoted({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) {
  const upvote = await prisma.upvote.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  return !!upvote;
}
