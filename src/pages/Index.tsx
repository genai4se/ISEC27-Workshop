import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import KeyTopicsOfDiscussion from "@/components/KeyTopicsOfDiscussion";
import CFP from "@/components/CFP";
import WorkshopSchedule from "@/components/WorkshopSchedule";
import Organizers from "@/components/Organizers";
import Footer from "@/components/Footer";
import ProgramChairs from "@/components/ProgramChairs";

const Index = () => {
  return React.createElement(
    "main",
    { className: "min-h-screen" },
    React.createElement(Navbar),
    React.createElement(Hero),
    React.createElement(Overview),
    React.createElement(KeyTopicsOfDiscussion),
    React.createElement(CFP),
    React.createElement(ProgramChairs),
    React.createElement(WorkshopSchedule),
    React.createElement(Organizers),
    React.createElement(Footer),
  );
};

export default Index;
