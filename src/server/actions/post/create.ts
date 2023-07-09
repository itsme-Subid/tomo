"use server";

import { prisma } from "@/server/db/prisma";

export async function createPost(formData: FormData) {
  if (!formData.get("image")) {
    const post = await prisma.user.update({
      where: {
        id: formData.get("userId") as string,
      },
      data: {
        posts: {
          create: {
            content: formData.get("content") as string,
            tag: formData.get("tag") as string,
          },
        },
      },
    });

    return post;
  }

  
}
