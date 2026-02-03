import React from "react";
import { Icon } from "@iconify/react";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const Alldone = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="h-[176px] w-[176px]">
        <img src="/images/Check.svg" alt="check" className="h-full w-full"/>
      </div>

      <div>
        <h1 className="text-5xl font-bold gray-100">You are all set</h1>
      </div>

      <div className="w-100 h-[56px]">
        <Button
          onClick={() => navigate("/")}
          className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
        >
          Go To Home
        </Button>
      </div>
    </div>
  );
};

export default Alldone;
