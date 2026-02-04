import React, { useState } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import SingleSelect from "../../../component/SingleSelect"; // swapped

const OPTIONS = [
  "Anger",
  "Stress",
  "Anxiety",
  "Panic Attacks",
  "Fatigue",
  "Phobia",
  "Self-esteem issues",
  "Sleep concerns",
  "Mood swings",
  "Irritability",
  "Feeling of loneliness",
  "Emotional dependence"
];

const Bothering = () => {
  const [selected, setSelected] = useState([]);
  const [otherText, setOtherText] = useState("");
  const navigate = useNavigate();

  const wordCount = otherText.trim().split(/\s+/).filter(Boolean).length;

  // Next button enabled if at least one selected OR 5+ words typed
  const isNextEnabled = selected.length > 0 || wordCount >= 5;

  return (
    <div className="flex flex-col gap-10 items-center">
      {/* Heading */}
      <div>
        <h1 className="text-5xl font-bold gray-100 text-center">
          What specific problem that is bothering you
        </h1>
      </div>

      {/* Multi Select using SingleSelect */}
      <div className="flex justify-center items-center w-250">
        <SingleSelect
          options={OPTIONS}
          value={selected}
          onChange={setSelected}
          layout="row"
          allowMultiple={true}
        />
      </div>

      <div className="w-130 flex flex-col gap-2">
        <p className="font-bold gray-50">Others</p>
        <Input
          placeholder="I recently lost my job"
          size="large"
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
        />
        {/* Helper text */}
        {wordCount > 0 && wordCount < 5 && (
          <p className="text-red-500 text-sm">
            Please type at least 5 words to continue
          </p>
        )}
      </div>

      {/* Next Button */}
      <div className="w-100 h-[56px]">
        <Button
          onClick={() => navigate("/Journaling/job")}
          disabled={!isNextEnabled}
          className={`w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold ${
            !isNextEnabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Bothering;
