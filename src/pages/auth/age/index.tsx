import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import SingleSelect from "../../../component/SingleSelect"; // assume same folder me hai

const Age = () => {
  const navigate = useNavigate();
  const options = ["Up to 18", "18-25", "26-35", "36-45", "46-60", "60+"];
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold gray-100">How old are you?</h1>
      </div>

      <div className="w-100">
        <SingleSelect
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>

      <div className="w-100 h-[56px]">
        <Button
          onClick={() => navigate("/auth/Alldone")}
          className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
        >
          Finish Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Age;
