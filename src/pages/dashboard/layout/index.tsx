import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar ko full height aur fixed position */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main content scrollable */}
      <main className="flex-1 w-full min-h-screen overflow-y-auto bg-[#FDFDFF]">
        <Outlet />
      </main>
    </div>
  );
}
