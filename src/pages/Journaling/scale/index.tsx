import React from "react";
import { useState } from "react";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import SingleSelect from "../../../component/SingleSelect"; // assume same folder me hai

const Scale = () => {
  const navigate = useNavigate();
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold gray-100 text-center">
          On a scale of 1 to 10, how would you rate <br />
          your current stress and anxiety levels, with 1 <br />
          being very low and 10 being very high?
        </h1>
      </div>

      <div className="w-200 flex justify-center">
        <SingleSelect
          options={options}
          value={selected}
          onChange={setSelected}
          layout="row"
        />
      </div>

      <div className="w-100 h-[56px]">
        <Button
          onClick={() => navigate("/Journaling/results")}
          className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
        >
          Next{" "}
        </Button>
      </div>
    </div>
  );
};

export default Scale;
