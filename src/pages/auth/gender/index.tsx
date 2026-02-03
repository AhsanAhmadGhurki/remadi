import React from "react";
import { Icon } from "@iconify/react";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const Gender = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold gray-100">Your gender?</h1>
      </div>

      <div className="flex justify-center h-45 gap-10">
        <div className="border  flex flex-col justify-center items-center gap-8 h-full w-50 !rounded-4xl">
          <Icon
            icon="bi:gender-male"
            width="75"
            height="75"
            className="text-[#303C42]"
          />
          <p className="font-semibold text-[#1F160F]/60">Male</p>
        </div>
        <div className="border  flex flex-col justify-center items-center gap-8 h-full w-40 !rounded-4xl">
          <Icon
            icon="bi:gender-female"
            width="75"
            height="75"
            className="text-[#303C42]"
          />
          <p className="font-semibold text-[#1F160F]/60">Female</p>
        </div>
        <div className="border  flex flex-col justify-center items-center gap-8 h-full w-40 !rounded-4xl">
          <Icon
            icon="formkit:info"
            width="75"
            height="75"
            className="text-[#303C42]"
          />
          <p className="font-semibold text-[#1F160F]/60">Rather Not Say</p>
        </div>
      </div>

      <div className="w-100 h-[56px]">
        <Button
          onClick={() => navigate("/auth/age")}
          className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Gender;
