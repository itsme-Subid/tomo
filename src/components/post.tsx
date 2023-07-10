/* eslint-disable @next/next/no-img-element */
import { Prisma } from "@prisma/client";
import UpvoteComponent from "./upvote";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true, upvotes: true };
}>;

const PostComponent = async ({ post }: { post: PostWithAuthor }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col gap-2 p-2 w-full max-h-max">
      <div className=" flex gap-2">
        <img
          src={post.author.image as string}
          alt={"avatar"}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold leading-none">{post.author.name}</span>
          <span className="text-xs text-gray-400">
            {post.postedAt.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 pl-10">
        <p>{post.content}</p>
        {post.image && (
          <img

            src={post.image as string}
            alt="post"
            className="w-full h-full object-cover"
          />

        )}
      </div>
      <div className="flex gap-2 pl-10">
        <UpvoteComponent post={post} session={session} />
      </div>
    </div>
  );
};

export default PostComponent;
