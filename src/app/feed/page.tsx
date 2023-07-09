import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { createPost } from "@/server/actions/post/create";
import PostsComponent from "@/components/posts";
import { getPostsWithUser } from "@/server/actions/post/get";
import CreatePost from "./createPost";

/* eslint-disable @next/next/no-img-element */
const FeedPage = async () => {
  const posts = await getPostsWithUser();
  const session = await getServerSession(authOptions);

  return (
    <main className="container-custom-xs px-4 lg:px-0">
      {session && (
        <section className="create-post py-8 flex gap-4 border-b border-border">
          <img
            className="w-12 h-12 rounded-full"
            src={session?.user?.image as string}
            alt=""
          />
          <form
            className="post flex-1"
            action={async (formData) => {
              "use server";
              formData.append("userId", session?.user?.id as string);
              await createPost(formData);
            }}
          >
            <textarea
              className="w-full mt-3 h-16 resize-none outline-none"
              placeholder="What's on your mind?"
              name="content"
            />
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center">
                <label htmlFor="image">
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
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <button
                type="submit"
                className="px-6 w-fit ml-auto py-2 bg-primary text-white rounded-full"
              >
                Post
              </button>
            </div>
          </form>
          <CreatePost userID={session?.user?.id!} />
        </section>
      )}
      <PostsComponent posts={posts} />
    </main>
  );
};

export default FeedPage;
