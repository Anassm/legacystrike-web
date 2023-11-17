import { useEffect, useState } from "react";
import { BsDiscord } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const Discord = () => {
  const discord = useDiscord();
  const discordAvatars =
    discord !== null &&
    discord.members.map((avatar) => (
      <img
        key={avatar.id}
        className="rounded-2xl"
        src={avatar.avatar_url}
        height={25}
        width={25}
        alt="user"
      />
    ));

  const titleStyle = {
    background: "linear-gradient(to top left, #1D2C48 0%, #FFA400 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="text-center">
      <h2 style={titleStyle} className="text-5xl font-bold bg-clip-text">
        Our community
      </h2>
      <h3 className="text-xl font-bold text-white">Built by the community</h3>
      <div className="flex flex-row flex-wrap justify-center gap-2 p-3">
        {discordAvatars}
      </div>
      {discord !== null && (
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
        // <div className="bg-discord-blue">
        //   <a href={discord.instant_invite}>
        //     <div className="divide-x">
        //       <span>Join now!</span>
        //     </div>
        //   </a>
        // </div>
      )}
    </div>
  );

  function useDiscord() {
    const [discord, setDiscord] = useState(null);

    useEffect(() => {
      getDiscord();
      setTimeout(getDiscord(), 1000 * 60 * 5);
    }, []);

    async function getDiscord() {
      try {
        const res = await fetch(
          `https://discord.com/api/guilds/973441288584192061/widget.json`
        );
        const dat = await res.json();
        setDiscord(dat);
      } catch (err) {
        console.error(err);
        setDiscord(null);
      }
    }

    return discord;
  }
};

export default Discord;
