import React from "react";
import { useState } from "react";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import SingleSelect from "../../../component/SingleSelect"; // assume same folder me hai

const Financial = () => {
  const navigate = useNavigate();
  const options = [
    "Ihave enough savings to cover basic living expenses for a few months",
    "I have enough savings to cover basic living expenses for less than a month",
    "I do not have any savings and am relying on unemployment benefits or other sources of income",
    "Other",
  ];
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold gray-100 text-center">
          What is your current financial situation?{" "}
        </h1>
      </div>

      <div className="w-170">
        <SingleSelect
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>

      <div className="w-100 h-[56px]">
        <Button
          onClick={() => navigate("/Journaling/looking")}
          className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
        >
          Next{" "}
        </Button>
      </div>
    </div>
  );
};

export default Financial;
