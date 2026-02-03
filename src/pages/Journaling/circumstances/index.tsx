import React from "react";
import { useState } from "react";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import SingleSelect from "../../../component/SingleSelect"; // assume same folder me hai

const Circumstances = () => {
  const navigate = useNavigate();
  const options = [
    "Layoff due to downsizing",
    "Fired for performance issues",
    "Quit voluntarily",
    "Other circumstances",
    "Other",
  ];
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold gray-100 text-center">
          What were the circumstances <br />
          around losing your job?{" "}
        </h1>
      </div>

      <div className="w-150">
        <SingleSelect
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>

      <div className="w-100 h-[56px]">
        <Button
          onClick={() => navigate("/Journaling/financial")}
          className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
        >
          Next{" "}
        </Button>
      </div>
    </div>
  );
};

export default Circumstances;
