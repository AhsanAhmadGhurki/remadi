import React from "react";
import { Icon } from "@iconify/react";
import Header from "../layout/header";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SessionCard from "../../../component/SessionCard";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const sessions = [
    {
      title: "I am not satisfied with my job",
      totalMessages: 52,
      tags: ["Stress", "Anxiety", "Phobia"],
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "My relationships are falling apart",
      totalMessages: 13,
      tags: ["Stress", "Phobia", "Anxiety"],
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "I am not satisfied wit", // keeping your partial entry
      totalMessages: 52,
      tags: ["Stress", "Anxiety", "Phi"], // keeping as per your data
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "Feeling anxious lately",
      totalMessages: 30,
      tags: ["Anxiety"],
      date: "Fri 13 Oct",
      time: "1:45 pm",
    },
    {
      title: "Need career guidance",
      totalMessages: 20,
      tags: ["Career", "Stress"],
      date: "Sat 14 Oct",
      time: "11:00 am",
    },
    // Add more sessions here
  ];
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 0 },
  });

  return (
    <div className="flex flex-col ms-6 my-6 me-13">
      {/* Header */}
      <Header
        title="Welcome back Harry!"
        subtitle="REMaDI your situation right away."
      />

      {/* Main content */}
      <div className="flex-1">
        <div className="flex justify-between gap-8 mb-10">
          <Link
            to="/Dashboard/previous-session"
            className="flex justify-center items-center gap-4 p-4 border-1 border-[#7EE5DB] bg-[#F1FAFB] rounded-3xl w-full"
          >
            <div className="flex justify-center items-center bg-white text-[#0AD0BB] text-2xl h-10 w-10 rounded-xl">
              <Icon icon="proicons:history" width="24" height="24" />
            </div>
            <div className="text-xl font-bold text-[#4B3425]">
              Previous Remadi Sessions
            </div>
          </Link>
          <Link
            to="/Dashboard/remadies"
            className="flex justify-center items-center gap-4 p-4 border-1 border-[#CACEFC] bg-[#F4F5FF] rounded-3xl w-full"
          >
            <div className="flex justify-center items-center bg-white text-[#A0A7F9] text-2xl h-10 w-10 rounded-xl">
              <Icon icon="lineicons:clipboard" width="24" height="24" />
            </div>
            <div className="text-xl font-bold text-[#4B3425]">
              Previous Remadi Summary
            </div>
          </Link>
          <Link
            to="/"
            className="flex justify-center items-center gap-4 p-4 border-1 border-[#7EE5DB] bg-[#F1FAFB] rounded-3xl w-full"
          >
            <div className="flex justify-center items-center bg-white text-[#0AD0BB] text-2xl h-10 w-10 rounded-xl">
              <Icon icon="mi:circle-check" width="24" height="24" />
            </div>
            <div className="text-xl font-bold text-[#4B3425]">
              Retrospective Revalation
            </div>
          </Link>{" "}
        </div>
        <div className="grid grid-cols-10 gap-6 mb-15">
          <div className="col-span-6 flex justify-between bg-[#93FFF4] rounded-4xl p-6">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold gray-100">
                  Take control of your mental Health{" "}
                </h1>
                <p className="text-[#1F160F] font-medium">
                  Take our Stress Test to relieve your anxiety and metal
                  pressures. <br /> We'll put together the perfect remadi.
                </p>
              </div>{" "}
              <div className="w-100 h-[56px]">
                <Button
                  onClick={() => navigate("/Journaling/situation")}
                  className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
                >
                  Start new Session
                </Button>
              </div>
            </div>

            <div className="h-[142px] w-auto">
              <img src="/images/Session.svg" alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="col-span-4 bg-[#EDEBFF] rounded-4xl text-center p-6 flex flex-col gap-2">
            <h1 className="text-2xl font-bold gray-100">
              Your wellness counselor.
            </h1>
            <p className="text-[#1F160F] font-medium">
              REMaDI your issues. Track progress and explore resources and
              insights to improve your mental health and wellness.
            </p>
            <div className="w-full h-[56px]">
              <Button
                onClick={() => navigate("/")}
                className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
              >
                Chat Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-13">
          <div className="text-lg font-bold">Recent Session</div>

          <div ref={sliderRef} className="flex overflow-x-auto keen-slider">
            {sessions.map((session, index) => (
              <div key={index} className="flex-shrink-0 keen-slider__slide">
                <SessionCard
                  title={session.title}
                  totalMessages={session.totalMessages}
                  tags={session.tags}
                  date={session.date}
                  time={session.time}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-3.5">
            <h1 className="text-2xl font-black">Want to vent out ?</h1>
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod te
            </p>
          </div>
          <div className="w-100 h-[56px]">
            <Button
              onClick={() => navigate("/Journaling/situation")}
              className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
            >
              Start Venting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;