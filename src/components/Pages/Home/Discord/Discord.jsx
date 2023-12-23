import { lazy, Suspense, useEffect, useSyncExternalStore } from "react";
import { BsDiscord } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Await, defer, useLoaderData, useRevalidator } from "react-router-dom";
import { getDiscord } from "../../../../util/api";

const Avatar = lazy(() => import("./components/Avatar"));

export function loader() {
  return defer({ discord: getDiscord() });
}

const Discord = () => {
  const dataPromise = useLoaderData();
  const { revalidate } = useRevalidator();

  let onlineStatus = useSyncExternalStore(
    (callback) => {
      window.addEventListener("online", callback);
      window.addEventListener("offline", callback);
      return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
      };
    },
    () => navigator.onLine,
    () => true
  );

  useEffect(() => {
    if (!onlineStatus) return;
    let id = setInterval(revalidate, 300000);
    return () => clearInterval(id);
  }, [onlineStatus, revalidate]);

  const titleStyle = {
    background: "linear-gradient(to top left, #1D2C48 0%, #FFA400 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  function renderDiscordElements(discord) {
    const discordAvatars =
      discord.members &&
      discord.members.map((avatar) => (
        <Suspense
          key={avatar.id}
          fallback={<img src="/Spinner-1s-200px.gif" alt="Loading..." />}
        >
          <Avatar avatarUrl={avatar.avatar_url} />
        </Suspense>
      ));

    return (
      <div className="text-center">
        <h2 style={titleStyle} className="text-5xl font-bold bg-clip-text">
          Our community
        </h2>
        <h3 className="text-xl font-bold text-white">Built by the community</h3>
        <div className="flex flex-row flex-wrap justify-center gap-2 p-3">
          {discordAvatars}
        </div>
        {discord.instant_invite && (
          <a
            href={discord.instant_invite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center p-3 mt-6 text-2xl text-center bg-discord-blue rounded-xl w-100"
          >
            <BsDiscord color="white" className="mx-4" size={25} />
            <div className="grid grid-cols-2 divide-x">
              <span className="mb-1 mr-6">Join now</span>
              <span className="flex justify-center">
                <GoDotFill className="mt-2 mr-2" size={20} color="#33c301" />
                {discord.presence_count}
              </span>
            </div>
          </a>
        )}
      </div>
    );
  }

  return (
    <Suspense fallback={<img src="/Spinner-1s-200px.gif" alt="Loading..." />}>
      <Await resolve={dataPromise.discord}>{renderDiscordElements}</Await>
    </Suspense>
  );
};

export default Discord;
