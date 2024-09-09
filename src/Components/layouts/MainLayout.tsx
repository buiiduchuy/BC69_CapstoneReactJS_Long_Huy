import { Outlet } from "react-router-dom";
import { Header } from "../ui";
import { Footer } from "../ui/Footer";

export const MainLayout = () => {
  return (
    <div className="bg-[#1a191f]">
      <Header />

      <main className="mt-[91px] min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
