// Icons
// import bayonetIcon from "../../../assets/static/icons/bayonet.png";
// import engineIcon from "../../../assets/static/icons/car-engine.png";
// import communityIcon from "../../../assets/static/icons/communities.png";
// import versionIcon from "../../../assets/static/icons/version-control.png";
// import serverIcon from "../../../assets/static/icons/servers.png";
import Discord from "./Discord";
import Navbar from "../../Layouts/MainLayout/Navbar";
import Title from "./Title";

import "./video.css";
import { useEffect, useRef } from "react";

// Components
// import TeamSelection from "../../Standalone/TeamSelection";
// import BombCanvas from "../../Three/components/Bomb/BombCanvas";

export default function Home() {

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute video-containter w-screen h-screen">
        <iframe className="w-screen h-screen" src="https://www.youtube.com/embed/UIvP4xyw9H8?autoplay=1&cc_load_policy=1&mute=1&controls=0" frameborder="0"></iframe>
      </div>
      <main className="absolute grid w-full grid-cols-5 gap-5 p-5">
        <div className="col-span-5 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur">
          <Navbar />
        </div>
        <div className="col-span-2 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur" style={{ height: 400 }} >
          <Title />
        </div>
        <div className="col-span-3 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur" style={{ height: 400 }} >
          <About/>
        </div>
        <div className="col-span-3 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur" style={{ height: 400 }} >

        </div>
        <div className="col-span-2 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur" style={{ height: 400 }} >
          <Discord />
        </div>
      </main>
    </div>
  );
}