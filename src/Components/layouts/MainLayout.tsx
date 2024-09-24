import { Outlet } from "react-router-dom";
import { Header, Footer } from "../ui";

export const MainLayout = () => {
  return (
    <div className="bg-[#1a191f]">
      <Header />

      <main className="lg:mt-[91px] mt-[69px] min-h-screen md:text-[16px] text-[14px] md:pt-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
