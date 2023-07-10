import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getOnlyUser } from "@/server/actions/user/get";
import { redirect } from "next/navigation";
import { editMultiple } from "@/server/actions/user/edit";

const EditPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  const user = await getOnlyUser(session?.user?.id as string);
  return (
    <div className="container-custom-xs flex items-center justify-center min-h-[90vh]">
      <form
        action={async (formData) => {
          "use server";
          formData.append("userId", session?.user?.id as string);
          await editMultiple({ formData });
        }}
        className="flex flex-col gap-4 border border-gray-300 rounded-md p-8 shadow min-w-[90vw] lg:min-w-[40vw]"
      >
        <h1 className="text-2xl font-bold leading-none">Edit Page</h1>
        <p className="-mt-1 mb-2 text-sm text-zinc-600">
          Select a unique username for your tomo account
        </p>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue={user?.username || ""}
            className="form-control bg-zinc-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={user?.name || ""}
            className="form-control bg-zinc-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            id="bio"
            defaultValue={user?.bio || ""}
            className="form-control bg-zinc-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-primary w-fit py-2 px-6 rounded-md text-white flex gap-2 items-center justify-center"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default EditPage;
