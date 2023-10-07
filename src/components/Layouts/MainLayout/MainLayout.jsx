import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainCanvas from "../../Three/MainCanvas/MainCanvas";

export default function MainLayout() {
  return (
    <>
      <Header
        status="info"
        variant="top-accent"
        notifTitle="Test message"
        notifDescription="Legacystrike is back."
      />
      <main className="relative">
        {/* <MainCanvas classN="z-0" /> */}

        <Outlet />
      </main>
      <Footer />
    </>
  );
}
