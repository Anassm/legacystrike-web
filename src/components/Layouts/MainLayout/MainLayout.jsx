import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <>
      {/* <Header
        status="info"
        variant="top-accent"
        notifTitle="Test message"
        notifDescription="Legacystrike is back."
      /> */}
      <div className="grid w-full grid-cols-5 gap-5 p-5">
        <div className="col-span-5 p-5 text-white bg-opacity-75 rounded-lg bg-gray-950">
          <Navbar />
        </div>
      </div>
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
