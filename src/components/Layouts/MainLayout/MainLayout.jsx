import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        <track kind="captions" label="English" srcLang="en" default />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="grid w-full grid-cols-5 gap-5 pt-5 pl-5 pr-5">
          <div className="col-span-5 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950 backdrop-blur">
            <Navbar />
          </div>
        </div>
        <main className="relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
