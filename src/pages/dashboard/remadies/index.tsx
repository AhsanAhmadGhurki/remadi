import React from "react";
import Header from "../layout/header";
import RemadieCard from "../../../component/RemadieCard"; // correct import

const Remadies = () => {
  // Card data
  const cards = [
    {
      heading: "I am not satisfied with my job",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Thu 12 Oct | 3:05 pm",
      link: "/Dashboard",
      bgColor: "#EDFAF8",
    },
    {
      heading: "Feeling stressed at work",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "Fri 13 Oct | 1:15 pm",
      link: "/Dashboard",
      bgColor: "#F9FAED",
    },
    {
      heading: "Looking for career change",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "Sat 14 Oct | 10:00 am",
      link: "/Dashboard",
      bgColor: "#FAEDF6",
    },
    {
      heading: "Need better work-life balance",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "Sun 15 Oct | 2:45 pm",
      link: "/Dashboard",
      bgColor: "#EEEDFA",
    },
  ];

  return (
    <div className="flex flex-col ms-6 my-6 me-13">
      {/* Header */}
      <Header
        title="Welcome back Harry!"
        subtitle="REMaDI your situation right away."
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {cards.map((card, index) => (
          <RemadieCard
            key={index}
            heading={card.heading}
            description={card.description}
            date={card.date}
            link={card.link}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Remadies;
