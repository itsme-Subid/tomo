/* eslint-disable @next/next/no-img-element */
import { Prisma } from "@prisma/client";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true, upvotes: true };
}>;

const PostComponent = ({ post }: { post: PostWithAuthor }) => {
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
      <div className="flex pl-10">
        <p>{post.content}</p>
      </div>
      <div className="flex gap-2 pl-10">

      </div>
    </div>
  );
};

export default PostComponent;
