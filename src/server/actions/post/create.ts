"use server";

import { prisma } from "@/server/db/prisma";
import { UploadClient } from "@uploadcare/upload-client";

const client = new UploadClient({
  publicKey: process.env.UPLOAD_KEY as string,
});

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


  console.log(formData.get("image"))

  const image = await client.uploadFile();

  console.log(image.cdnUrl);
}
