import { Outlet } from "react-router-dom";
import { Header } from "../ui";
import { Footer } from "../ui/Footer";

export const MainLayout = () => {
  return (
    <div className="bg-[#1a191f]">
      <Header />

      <main className="lg:mt-[91px] mt-[69px] min-h-screen md:text-[16px] text-[14px] pt-9 md:pt-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
