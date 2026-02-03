import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  return (
    <div className="r">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-3.5">
          <h1 className="text-5xl font-bold gray-100">Login to Remadi</h1>
          <p className="text-xl gray-100 text-center">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod te
          </p>
        </div>
        <div className="w-100 flex flex-col gap-5">
          <Input
            placeholder="Username or email..."
            size="large"
            className="!bg-transparent border  !text-black"
          />
          <Input
            placeholder="Password"
            size="large"
            className="!bg-transparent border !border-gray-90 !gray-90 "
          />
        </div>
        <div className="flex justify-between w-100">
          <div className="flex items-center gap-2">
            <Radio
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="!text-lg text-[#6E7191]"
            >
              Remember me?
            </Radio>
          </div>
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="w-100 h-[56px]">
          <Button
            onClick={() => navigate("/auth/gender")}
            className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
          >
            login
          </Button>
        </div>
        <div className="text-lg font-semibold text-[#007099]">or</div>
        <div className="flex w-100 h-[48px] gap-3">
          <Button className="w-full !h-full border !bg-[#FF4C4D] !text-white !py-4 !text-lg font-semibold">
            <Icon icon="gg:google" width="24" height="24" />{" "}
          </Button>
          <Button className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold">
            <Icon icon="mdi:apple" width="24" height="24" />{" "}
          </Button>
          <Button className="w-full !h-full border !bg-[#1877F2] !text-white !py-4 !text-lg font-semibold">
            <Icon icon="ri:facebook-fill" width="24" height="24" />{" "}
          </Button>
        </div>
        <div className="flex gap-2">
          <p className="gray-50 text-lg font-semibold">
            {" "}
            Don't have an Account?
          </p>
          <Link
            to="/auth/signup"
            className="text-blue-500 hover:underline text-lg font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 pointer-events-none">
        <img src="/images/water-mark.svg" alt="watermark" />
      </div>
    </div>
  );
};

export default Login;
