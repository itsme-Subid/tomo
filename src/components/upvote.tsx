"use client";

import {
  addUpvote,
  removeUpvote,
  addKarma,
  removeKarma,
} from "@/server/actions/post/upvote";
import type { Session } from "next-auth";
import { Prisma } from "@prisma/client";
import { useState } from "react";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true; upvotes: true };
}>;

export default function UpvoteComponent({
  post,
  session,
}: {
  post: PostWithAuthor;
  session: Session | null;
}) {
  const [upvoteCount, setUpvoteCount] = useState(post.upvotes.length);
  const [upvoted, setUpvoted] = useState(
    post.upvotes.find((upvote) => upvote.userId === session?.user?.id)
      ? true
      : false
  );
  const [pending, setPending] = useState(false);
  if (!session?.user) {
    return null;
  } else {
    const handleUpvote = async () => {
      setUpvoteCount(upvoteCount + 1);

      setPending(true);
      const upvote = await addUpvote({
        postId: post.id,
        userId: session?.user?.id as string,
      });
      if (upvote) {
        await addKarma({ userId: post.author.id });
      }

      setPending(false);
      setUpvoted(true);
    };

    const handleRemoveUpvote = async () => {
      setUpvoteCount(upvoteCount - 1);
      setPending(true);
      const upvote = await removeUpvote({
        postId: post.id,
        userId: session.user?.id as string,
      });
      if (upvote) {
        await removeKarma({ userId: post.author.id });
      }
      setPending(false);
      setUpvoted(false);
    };

    return (
      <div className="flex gap-2 pl-10">
        {upvoted ? (
          <button
            onClick={handleRemoveUpvote}
            className="flex items-center gap-1 text-xs text-gray-400"
            disabled={pending}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 101.414 1.414L10 5.414l6.293 6.293a1 1 0 101.414-1.414l-7-7A1 1 0 0010 3z"
                clipRule="evenodd"
              />
            </svg>
            <span>Upvoted</span>
          </button>
        ) : (
          <button
            onClick={handleUpvote}
            className="flex items-center gap-1 text-xs text-gray-400"
            disabled={pending}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 101.414 1.414L10 5.414l6.293 6.293a1 1 0 101.414-1.414l-7-7A1 1 0 0010 3z"
                clipRule="evenodd"
              />
            </svg>
            <span>Upvote</span>
          </button>
        )}
        <span className="text-xs text-gray-400">{upvoteCount}</span>
      </div>
    );
  }
}
