"use server";

import { prisma } from "@/server/db/prisma";
import { UploadClient } from "@uploadcare/upload-client";

const client = new UploadClient({
  publicKey: process.env.UPLOAD_KEY as string,
});

export default async function createPost({
  content,
  image,
  authorId,
}: {
  content: string;
  image?: string;
  authorId: string;
}) {
  const post = await prisma.user.update({
    where: {
      id: authorId,
    },
    data: {
      posts: {
        create: {
          content,
          image,
        },
      },
    });

    return post;
  }


  console.log(formData.get("image"))

  const image = await client.uploadFile();

  console.log(image.cdnUrl);
}
