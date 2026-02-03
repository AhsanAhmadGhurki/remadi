import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br flex flex-col from-[#A0A7F9] to-[#3D4260]">
      {/* Header */}
      <div className="flex justify-between items-center px-12 py-5">
        <Link to="/auth">
          <img
            src="/images/Logo-white.svg"
            alt="logo"
            className="w-auto h-auto"
          />
        </Link>

        <Link to="/auth/login">
          <Button className="!bg-transparent gray-10 border !p-6 rounded-lg">
            Sign Up / Login
          </Button>
        </Link>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-10">
        <div className="flex flex-col items-center gap-3.5">
          <h1 className="text-6xl font-black text-white">Welcome to Remadi</h1>
          <p className="text-xl font-semibold text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="flex justify-between w-190 ">
          <Input
            placeholder="Type something..."
            size="large"
            className="!bg-transparent !border-none !text-gray-100"
          />
          <Button className=" !gray-60 !text-sm !font-black border !bg-gray-20 !px-5 !py-2 !border-none">
            Demo
          </Button>
        </div>
        <div className="flex gap-6">
          <Link to="/auth/login">
            <Button className="!bg-transparent gray-10 border !p-6  rounded-lg">
              I Already Have An Account
            </Button>
          </Link>
          <Link to="/Journaling/situation">
            <Button className="!bg-black gray-10 !border-none !px-16 !py-6 !rounded-full">
              Get Started{" "}
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 pointer-events-none">
        <img src="/images/water-mark.svg" alt="watermark" />
      </div>
    </div>
  );
};

export default Home;
