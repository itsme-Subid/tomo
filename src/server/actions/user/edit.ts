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

export async function editMultiple({ formData }: { formData: FormData }) {
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const bio = formData.get("bio") as string;
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    // change only the fields that are not undefined
    data: {
      ...(bio && { bio }),
      ...(username && { username }),
      ...(name && { name }),
    },
  });

  return user;
}
