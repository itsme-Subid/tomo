"use server";

import { changeUsername } from "./edit";

export const updateUsername = async (formData: FormData) => {
  "use server";
  await changeUsername({
    userId: formData.get("userId") as string,
    username: formData.get("username") as string,
  });
};
