import Discord from "./Discord/Discord";
import Title from "./Title";

import "./video.css";

// Components
// import TeamSelection from "../../Standalone/TeamSelection";
// import BombCanvas from "../../Three/components/Bomb/BombCanvas";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <main className="absolute grid w-full grid-cols-5 gap-y-4 gap-x-5 pt-4 p-5">
        <div
          className="col-span-2 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur"
          style={{ height: 400 }}
        >
          <Title />
        </div>
        {/* <div
          className="col-span-3 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur"
          style={{ height: 400 }}
        >
          <About />
        </div> */}
        <div
          className="col-span-3 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur"
          style={{ height: 400 }}
        ></div>
        <div
          className="col-span-2 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur"
          style={{ height: 400 }}
        >
          <Discord />
        </div>
      </main>
    </div>
  );
}
