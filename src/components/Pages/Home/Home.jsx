// Icons
// import bayonetIcon from "../../../assets/static/icons/bayonet.png";
// import engineIcon from "../../../assets/static/icons/car-engine.png";
// import communityIcon from "../../../assets/static/icons/communities.png";
// import versionIcon from "../../../assets/static/icons/version-control.png";
// import serverIcon from "../../../assets/static/icons/servers.png";
import Discord from "./Discord";
import Navbar from "./Navbar";
import Title from "./Title";

import './video.css';
import { useEffect, useRef } from "react";

// Components
// import TeamSelection from "../../Standalone/TeamSelection";
// import BombCanvas from "../../Three/components/Bomb/BombCanvas";

export default function Home() {
  //const [tabIndex, setTabIndex] = useState(0);

  // const texts = [
  //   {
  //     title: "LegacyStrike",
  //     text: "THE WAY CSGO IS MEANT TO BE PLAYED",
  //     img: "https://i.pinimg.com/originals/ff/c3/8d/ffc38d9bce22d7a9eaa07b890e3af1a2.jpg",
  //   },
  //   {
  //     title: "Game Version",
  //     icon: versionIcon,
  //     text: "Take a trip back to 2015 by playing on official LegacyStrike servers! We run a February 2015 build of CS:GO so you get to experience the game in its prime.",
  //     img: "https://dmarket.com/blog/best-csgo-wallpapers/csgo-image_hud3c572ca46463b7314b38aa612b1af3b_51172_1920x1080_resize_q100_lanczos.jpg",
  //   },
  //   {
  //     title: "Patched Engine",
  //     icon: engineIcon,
  //     text: "Our dedicated development team has taken the liberty of patching this build of CS:GO to allow for online play, unlike other projects.",
  //     img: "https://c4.wallpaperflare.com/wallpaper/947/627/629/video-games-counter-strike-global-offensive-counter-strike-wallpaper-preview.jpg",
  //   },
  //   {
  //     title: "Dedicated Servers",
  //     icon: serverIcon,
  //     text: "Our official 128 tick servers ensure smooth performance in both Europe and America. Snappy response time isn't exclusive to modern CS:GO!",
  //     img: "https://wallpapers.com/images/high/csgo-background-pr61m3x036dzpggm.webp",
  //   },
  //   {
  //     title: "Welcoming Community",
  //     icon: communityIcon,
  //     text: "Our diverse and friendly community promises a fun and inclusive experience - a new friend might just be one match away.",
  //     img: "https://wallpapers.com/images/hd/csgo-background-p5kp2kroeg07bec5.jpg",
  //   },
  //   {
  //     title: "Working Inventory",
  //     icon: bayonetIcon,
  //     text: "As long as your skins were in-game in February of 2015, they'll work on our servers. If your knife finish wasn't around, you'll be given it's vanilla counterpart!",
  //     img: "https://cdn.discordapp.com/attachments/1158834348699689080/1159598578914824253/logo.png?ex=65319b55&is=651f2655&hm=f3a8994b3f7132f22f4325a08deb0757c14a9a2a0df1740d2a9f33bfc851dc88&",
  //   },
  // ];

  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef) return;
    if (!videoRef?.current) return;
    videoRef.current?.play();
  }, [videoRef?.current])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute video-containter">
        <video autoplay muted loop ref={videoRef}>
          <source src="BACKGROUND_VIDEO_URL_HERE" type="video/mp4" />
        </video>
      </div>
      <main className="absolute grid w-full grid-cols-5 gap-5 p-5">
        <div className="col-span-5 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950">
          <Navbar />
        </div>
        <div className="col-span-2 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950" style={{ height: 400 }} >
          <Title />
        </div>
        <div className="col-span-3 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950" style={{ height: 400 }} >

        </div>
        <div className="col-span-3 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950" style={{ height: 400 }} >

        </div>
        <div className="col-span-2 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950" style={{ height: 400 }} >
          <Discord />
        </div>
      </main>
    </div>
  );
}

{
  /* 
      <div style={{ maxWidth: 700 }} className="overflow-hidden rounded-xl">
        {discord !== null && (
          <>
            <div
              className="flex flex-row items-center justify-between px-3 py-2 text-xl font-bold text-white"
              style={{ backgroundColor: "#7289DA" }}
            >
              <div className="flex flex-row items-center gap-3" style={{}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
                <div>Our community!</div>
              </div>
              <a
                href={discord.instant_invite}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 rounded-lg"
                style={{ backgroundColor: "#2E8B57" }}
              >
                Join
              </a>
            </div>
            <div
              className="flex flex-row flex-wrap gap-2 p-3"
              style={{ backgroundColor: "#2C2F33" }}
            >
              {discord.members.map((m) => (
                <img
                  key={m.id}
                  className="rounded-full"
                  name={m.username}
                  src={m.avatar_url}
                  style={{ height: 24, width: 24 }}
                />
              ))}
              <div
                style={{ backgroundColor: "#23272A" }}
                className="px-2 text-white rounded-full"
              >
                +{discord.presence_count} more online...
              </div>
            </div>
          </>
        )}
      </div>
           */
}
