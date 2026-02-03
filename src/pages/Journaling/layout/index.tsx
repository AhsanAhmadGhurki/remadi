import React from "react";
import { Outlet } from "react-router-dom";
import JournalingHeader from "../../Journaling/layout/JournalingHeader";

export default function JournalingLayout() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Gradient Background ONLY */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[120%] h-[800px] bg-gradient-to-b from-[#A0A7F9] via-[#ACF9A0] to-[#F1FF9E] rounded-[50%_/_40%] blur-3xl opacity-20" />
      </div>

      {/* Real Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <JournalingHeader />

        <main className="flex flex-1 justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
