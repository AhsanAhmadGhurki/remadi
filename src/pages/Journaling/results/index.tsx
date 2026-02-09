import React from "react";
import { useState } from "react";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import SingleSelect from "../../../component/SingleSelect"; // assume same folder me hai

const Results = () => {
  const navigate = useNavigate();
  const options = ["Yes", "No", "Other"];
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col gap-10 w-[900px]">
      <div>
        <h1 className="text-5xl font-bold gray-100">Session Results </h1>
      </div>
      <div className="flex flex-col gap-3.5 gay-100">
        <h1 className="text-3xl font-bold">
          Creating a Plan and Maintaining Positivity During Your Job Search
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut
          consequat semper viverra nam libero justo laoreet sit. Euismod in
          pellentesque massa placerat duis. Platea dictumst vestibulum rhoncus
          est pellentesque elit ullamcorper dignissim cras. Urna et pharetra
          pharetra massa massa. At volutpat diam ut venenatis. Neque aliquam
          vestibulum morbi blandit cursus. Lacus vel facilisis volutpat est
          velit egestas. Cursus mattis molestie a iaculis at erat pellentesque
          adipiscing. Pharetra convallis posuere morbi leo urna. Facilisis
          mauris sit amet massa vitae. Viverra orci sagittis eu volutpat odio
          facilisis. Urna nec tincidunt praesent semper feugiat nibh. Leo urna
          molestie at elementum. Natoque penatibus et magnis dis parturient.
        </p>
        <p>
          Quis vel eros donec ac. Egestas pretium aenean pharetra magna ac
          placerat. Pretium fusce id velit ut tortor pretium viverra. Quisque
          sagittis purus sit amet volutpat consequat mauris. Sit amet cursus sit
          amet dictum sit amet justo donec. Morbi tincidunt ornare massa eget
          egestas purus viverra. Fermentum et sollicitudin ac orci phasellus
          egestas. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
          odio eu. Et malesuada fames ac turpis egestas. Lobortis elementum nibh
          tellus molestie nunc non. Fermentum dui faucibus in ornare quam
          viverra orci. Tempor nec feugiat nisl pretium fusce id. Vel fringilla
          est ullamcorper eget. Varius quam quisque id diam vel. Mi quis
          hendrerit dolor magna eget est lorem.
        </p>
      </div>
      <div className="w-full bg-gradient-to-b from-[#8186E2] to-[#3D4260] p-[1px] rounded-full h-[56px]">
        <div className="flex justify-between items-center w-full bg-white rounded-full px-3 h-full">
          <Input
            placeholder="Type something..."
            size="large"
            className="!bg-transparent !border-none !text-gray-100"
          />
          <Button className="!bg-[#DDE1E6] !rounded-full !text-sm gray-60 !px-5 !py-4 !border-none !h-[40px]">
            Demo
          </Button>
        </div>
      </div>

      <div className="flex gap-10 w-full h-[56px]">
        <Button
          onClick={() => navigate("/dashboard")}
          className="w-full !h-full border !bg-black !text-white !py-4 !text-lg font-semibold"
        >
          Finish Session{" "}
        </Button>
        <Button
          onClick={() => navigate("/Journaling/situation")}
          className="w-full !h-full border !bg-[#3D4260] !text-white !py-4 !text-lg font-semibold"
        >
          Start New Session{" "}
        </Button>
      </div>
    </div>
  );
};

export default Results;
