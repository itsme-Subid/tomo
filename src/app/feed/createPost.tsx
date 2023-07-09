"use client";
import "@uploadthing/react/styles.css";

import { UploadButton } from "@/app/utils/uploadthing";
import { useState } from "react";
import createPost from "@/server/actions/post/create";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const CreatePost = ({ userID }: { userID: string }) => {
  const [image, setImage] = useState<string>("");
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="post flex-1"
      ref={formRef}
      action={async (formData) => {
        try {
          await createPost({
            content: formData.get("content") as string,
            image,
            authorId: userID,
          });
          formRef.current?.reset();
          router.refresh();
          
        } catch (error) {
          console.log(error);
          formRef.current?.reset();
        }
      }}
    >
      <textarea
        className="w-full mt-3 h-16 resize-none outline-none"
        placeholder="What's on your mind?"
        name="content"
      />
      <div className="flex gap-4 items-center">
        <div className="relative flex gap-4 items-center">
          <label htmlFor="image" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </label>
          <div
            style={{
              opacity: 0,
              position: "absolute",
              inset: 0,
            }}
          >
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                if (res?.length) {
                  setImage(res[0].fileUrl);
                }
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-6 w-fit ml-auto py-2 bg-primary text-white rounded-full"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
