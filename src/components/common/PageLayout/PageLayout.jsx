/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar/Sidebar";


const PageLayout = () => {
  return (
    <div className="w-full h-screen">
      {/* <div className="relative w-full mesh-bg"> */}
      <div className="relative w-full bg-[url('/assets/bgImage.jpg')] bg-cover">
        <div className="p-4 h-screen">
          <div className="flex w-full border border-white/30 rounded-[20px] p-3 h-full glass-bg-light shadow-[-1px 3px 8px -1px rgba(0, 0, 0, 0.2)]">
            <Sidebar />
            <main className="w-full ml-5">
              <div className="overflow-auto h-full">
                <Appbar />
                <div className="overflow-auto h-[calc(100%-72px)]">
                <Outlet />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
