import { Prisma } from "@prisma/client";
import PostComponent from "./post";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true; upvotes: true };
}>;

export default function PostsComponent({ posts }: { posts: PostWithAuthor[] }) {
  return (
    <ul className="w-full flex flex-col divide-y min-h-screen">
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </ul>
  );
}
