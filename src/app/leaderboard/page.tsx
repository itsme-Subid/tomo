/* eslint-disable @next/next/no-img-element */
import { getUserKarma } from "@/server/actions/user/get";

const Leaderboard = async () => {
  const users = await getUserKarma();
  return (
    <div className="container-custom-xs py-8 px-4 lg:px-0">
      <h1 className="text-2xl font-semibold">Leaderboard</h1>
      <ul className="flex flex-col gap-4 my-8">
        {users.map((user, index) => {
          return (
            <li key={index} className="flex items-center gap-4">
              <img
                src={
                  user.image ||
                  `https://avatars.dicebear.com/api/avataaars/${user.name}.svg`
                }
                className="rounded-full w-14 h-14"
                alt=""
              />
              <div className="wrapper flex flex-1 items-center">
                <div className="left">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-gray-500">@{user.username}</p>
                </div>
                <div className="right ml-auto">
                  <p>{user.karma} Tomo points</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Leaderboard;
