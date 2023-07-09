"use server";

import { prisma } from "@/server/db/prisma";

export async function changeUsername({
  userId,
  username,
}: {
  userId: string;
  username: string;
}) {
  console.log({
    userId,
    username,
  });
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      username,
    },
  });

  return user;
}

export async function editMultiple({
  userId,
  bio,
  avatar,
  name,
}: {
  userId: string;
  bio?: string;
  avatar?: string;
  name?: string;
}) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    // change only the fields that are not undefined
    data: {
      ...(bio && { bio }),
      ...(avatar && { avatar }),
      ...(name && { name }),
    },
  });

  return user;
}
