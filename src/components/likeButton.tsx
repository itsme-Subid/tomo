"use client";

import { useRouter } from "next/navigation";

const LikeButton = ({
  isLiked,
  handleLike,
  handleDislike,
}: {
  isLiked: boolean;
  handleLike: () => Promise<void>;
  handleDislike: () => Promise<void>;
}) => {
  const router = useRouter();
  return isLiked ? (
    <svg
      className="remove-upvote"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 20 20"
      onClick={() => {
        handleDislike();
        router.refresh();
      }}
    >
      <path
        fill="#f53756"
        fill-rule="evenodd"
        d="M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.171a4 4 0 1 1 5.656 5.656L10 17.657l-6.828-6.829a4 4 0 0 1 0-5.656Z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      className="add-upvote"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      onClick={() => {
        handleLike();
        router.refresh();
      }}
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z"
      />
    </svg>
  );
};

export default LikeButton;
