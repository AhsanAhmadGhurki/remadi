import React from "react";
import { Icon } from "@iconify/react";
import Header from "../layout/header";
import { Button, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import SessionCard from "../../../component/SessionCard";

const PreviousSession = () => {
  const navigate = useNavigate();
  const sessions = [
    {
      title: "I am not satisfied with my job",
      totalMessages: 52,
      tags: ["Stress", "Anxiety", "Phobia"],
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "My relationships are falling apart",
      totalMessages: 13,
      tags: ["Stress", "Phobia", "Anxiety"],
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "I am not satisfied wit", // keeping your partial entry
      totalMessages: 52,
      tags: ["Stress", "Anxiety", "Phi"], // keeping as per your data
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "Feeling anxious lately",
      totalMessages: 30,
      tags: ["Anxiety"],
      date: "Fri 13 Oct",
      time: "1:45 pm",
    },
    {
      title: "Need career guidance",
      totalMessages: 20,
      tags: ["Career", "Stress"],
      date: "Sat 14 Oct",
      time: "11:00 am",
    },
    {
      title: "I am not satisfied with my job",
      totalMessages: 52,
      tags: ["Stress", "Anxiety", "Phobia"],
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "My relationships are falling apart",
      totalMessages: 13,
      tags: ["Stress", "Phobia", "Anxiety"],
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "I am not satisfied wit", // keeping your partial entry
      totalMessages: 52,
      tags: ["Stress", "Anxiety", "Phi"], // keeping as per your data
      date: "Thu 12 Oct",
      time: "3:05 pm",
    },
    {
      title: "Feeling anxious lately",
      totalMessages: 30,
      tags: ["Anxiety"],
      date: "Fri 13 Oct",
      time: "1:45 pm",
    },
    {
      title: "Need career guidance",
      totalMessages: 20,
      tags: ["Career", "Stress"],
      date: "Sat 14 Oct",
      time: "11:00 am",
    },
    // Add more sessions here
  ];

  return (
    <div className="flex flex-col ms-6 me-13 my-6">
      {/* Header */}
      <Header
        title="Recent Session"
        subtitle="REMaDI your situation right away."
      />

      <div className="flex flex-wrap gap-6">
        {sessions.map((session, index) => (
          <div key={index} className="flex-shrink-0">
            <SessionCard
              title={session.title}
              totalMessages={session.totalMessages}
              tags={session.tags}
              date={session.date}
              time={session.time}
              onClick={() => console.log("Session details", session.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousSession;
