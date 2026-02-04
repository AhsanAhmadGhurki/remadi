import React from "react";
import { Icon } from "@iconify/react";
import Header from "../layout/header";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full  ms-6 me-13 my-6">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="mt-6 flex-1">
        <div className="flex justify-between gap-8">
          <div className="flex justify-center items-center gap-4 p-4 border-1 border-[#7EE5DB] bg-[#F1FAFB] rounded-3xl w-full">
            <div className="flex justify-center items-center bg-white text-[#0AD0BB] text-2xl h-10 w-10 rounded-xl">
              <Icon icon="proicons:history" width="24" height="24" />
            </div>
            <div className="text-xl font-bold text-[#4B3425]">
              Previous Remadi Sessions
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-4 border-1 border-[#CACEFC] bg-[#F4F5FF] rounded-3xl w-full">
            <div className="flex justify-center items-center bg-white text-[#A0A7F9] text-2xl h-10 w-10 rounded-xl">
              <Icon icon="lineicons:clipboard" width="24" height="24" />
            </div>
            <div className="text-xl font-bold text-[#4B3425]">
              Previous Remadi summary
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-4 border-1 border-[#7EE5DB] bg-[#F1FAFB] rounded-3xl w-full">
            <div className="flex justify-center items-center bg-white text-[#0AD0BB] text-2xl h-10 w-10 rounded-xl">
              <Icon icon="mi:circle-check" width="24" height="24" />
            </div>
            <div className="text-xl font-bold text-[#4B3425]">
              Retrospective Revalation
            </div>
          </div>
        </div>
        {/* <div className="flex gap-6">
          <div className="flex justify-between bg-[#93FFF4] w-[70%] rounded-4xl p-6">
            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-2xl font-bold gray-100">
                Your wellness councelor.
              </h1>
              <p className="text-[#1F160F] font-medium">
                REMaDI your issues. Track progress and <br />
                explore resources and insights to improvebr your mental health{" "}
                <br />
                and wellness.
              </p>
              <div className="w-full h-[56px]">
                <Button
                  onClick={() => navigate("/")}
                  className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
                >
                  Next{" "}
                </Button>
              </div>
            </div>
            <div className="h-[142px] w-auto">
              <img
                src="/public/images/Session.svg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="bg-[#EDEBFF] w-[30%] rounded-4xl text-center p-6 gap-2">
            <h1 className="text-2xl font-bold gray-100">
              Your wellness councelor.
            </h1>
            <p className="text-[#1F160F] font-medium">
              REMaDI your issues. Track progress and <br />
              explore resources and insights to improvebr your mental health and
              wellness.
            </p>
            <div className="w-full h-[56px]">
              <Button
                onClick={() => navigate("/")}
                className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
              >
                Next{" "}
              </Button>
            </div>
          </div>
        </div> */}
        <div className="flex gap-6">
  {/* Left Card */}
  <div className="flex-[7] flex justify-between items-start bg-[#93FFF4] rounded-4xl p-6">
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-gray-100">
        Your wellness counselor.
      </h1>
      <p className="text-[#1F160F] font-medium">
        REMaDI your issues. Track progress and explore resources and insights
        to improve your mental health and wellness.
      </p>
      <Button
        onClick={() => navigate("/")}
        className="w-full h-14 border !bg-black !text-white text-lg font-semibold"
      >
        Next
      </Button>
    </div>
    <div className="h-[142px] w-auto">
      <img
        src="/public/images/Session.svg"
        alt=""
        className="h-full w-auto object-contain"
      />
    </div>
  </div>

  {/* Right Card */}
  <div className="flex-[3] flex flex-col bg-[#EDEBFF] rounded-4xl text-center p-6 gap-2">
    <h1 className="text-2xl font-bold text-gray-100">
      Your wellness counselor.
    </h1>
    <p className="text-[#1F160F] font-medium">
      REMaDI your issues. Track progress and explore resources and insights
      to improve your mental health and wellness.
    </p>
    <Button
      onClick={() => navigate("/")}
      className="w-full h-14 border !bg-black !text-white text-lg font-semibold"
    >
      Next
    </Button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
