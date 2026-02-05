import React from "react";
import { Icon } from "@iconify/react";
import Header from "../layout/header";
import { Button, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SessionCard from "../../../component/SessionCard";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col ms-6 me-13 my-6">
        {/* Header */}
        <Header
          title="Profile"
          subtitle="See end edit your profile details here"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-extrabold mb-9">Personal Details</div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <p className="w-20 font-bold">Name</p>
                <div className="w-100 flex flex-col gap-5">
                  <Input
                    placeholder="John Doe"
                    size="large"
                    className="!bg-transparent border  !text-black"
                  />
                  {/* <Input
                    placeholder="Password"
                    size="large"
                    className="!bg-transparent border !border-gray-90 !gray-90 "
                  /> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="w-20 font-bold">Email</p>
                <div className="w-100 flex flex-col gap-5">
                  <Input
                    placeholder="mymail2gmail.com"
                    size="large"
                    className="!bg-transparent border  !text-black"
                  />
                  {/* <Input
                    placeholder="Password"
                    size="large"
                    className="!bg-transparent border !border-gray-90 !gray-90 "
                  /> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="w-20 font-bold">Phone</p>
                <div className="w-100 flex flex-col gap-5">
                  <Input
                    placeholder="+178324567823"
                    size="large"
                    className="!bg-transparent border  !text-black"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <p className="w-20 font-bold mt-2">Password</p>
                <div className="w-100 flex flex-col gap-5">
                  <Input
                    placeholder="Password"
                    size="large"
                    className="!bg-transparent border !border-gray-90 !gray-90 "
                  />
                  <Link to="/Dashboard" className="text-[#A0A7F9]">
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xl font-extrabold">Personal Details</div>
            <div className="flex flex-col justify-center items-center gap-6 h-[350px]">
              <div className="w-[162px] h-[162px]">
                <img
                  className="h-full w-full"
                  src="/images/Profile.svg"
                  alt=""
                />
              </div>
              <Link to="/Dashboard" className="text-[#A0A7F9]">
                Change Picture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
