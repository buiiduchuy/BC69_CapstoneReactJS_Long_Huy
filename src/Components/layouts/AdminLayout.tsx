import { Outlet } from "react-router-dom";
import { SideBar } from "../ui/SideBar";

export const AdminLayOut = () => {
  return (
    <div className="bg-[#1a191f]">
      <main className=" flex flex-wrap  min-h-screen md:text-[16px] text-[14px] pt-9 md:pt-0">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
