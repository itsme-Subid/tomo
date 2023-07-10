/* eslint-disable @next/next/no-img-element */
import { Prisma } from "@prisma/client";
import UpvoteComponent from "./upvote";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import deletePost from "@/server/actions/post/delete";
import DeleteButton from "./deleteButton";
import TimeFormatter from "./timeFormatter";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true; upvotes: true };
}>;

const PostComponent = async ({ post }: { post: PostWithAuthor }) => {
  const session = await getServerSession(authOptions);
  const handleDelete: () => Promise<void> = async () => {
    "use server";
    await deletePost({ postId: post.id });
  };
  return (
    <div className="flex flex-col gap-2 py-4 px-2 w-full max-h-max">
      <div className=" flex gap-2">
        <img
          src={post.author.image as string}
          alt={"avatar"}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex justify-between w-full">
          <div className="left flex flex-col gap-1">
            <span className="font-semibold leading-none">
              {post.author.name}
            </span>
            <span className="text-xs text-gray-400">
              <TimeFormatter date={post.postedAt} />
            </span>
          </div>
          <div className="right">
            {post.authorId === session?.user?.id && (
              <DeleteButton handleDelete={handleDelete} />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 pl-10">
        <p>{post.content}</p>
        {post.image && (
          <img
            src={post.image as string}
            alt="post"
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>
      <div className="flex gap-2 ml-10 justify-center text-center py-2 px-4 rounded-full bg-zinc-200/40 hover:bg-zinc-200/80 transition-colors duration-300 w-fit">
        <UpvoteComponent post={post} session={session} />
      </div>
    </div>
  );
};

export default PostComponent;
