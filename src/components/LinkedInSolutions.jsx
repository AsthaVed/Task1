import { useState } from "react";

import robot from "../assets/robot.png";
import dropcontact from "../assets/dropcontact.png";
import datagma from "../assets/datagma.png";
import rocketreach from "../assets/rocketreach.png";
import signalhire from "../assets/signalhire.png";

import leftImg from "../assets/rectangle1.png";
import rightImg from "../assets/rectangle2.png";

export default function LinkedInSolutions() {
  const tabs = [
    { title: "CRM Data Enrichment", icon: dropcontact },
    { title: "CRM Data Sync", icon: datagma },
    { title: "Bulk Export & Enrichment", icon: rocketreach },
    { title: "AI Productivity", icon: signalhire },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full px-4 py-16 relative mt-14">
      {/* ROBOT */}
      <img
        src={robot}
        alt="robot"
        className="absolute top-4 left-0 sm:left-0 md:-left-1 lg:-left-1 w-10 sm:w-12 md:w-14 lg:w-20 z-10 object-cover" />
      {/* ================= HEADING ================= */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#090F4E]">
        Complete LinkedIn Sales Solutions
      </h2>
      <p className="text-center text-[#4D4D4D] mt-2">
        Everything you need for professional LinkedIn prospecting
      </p>

      {/* ================= TABS ================= */}
      <div className="flex flex-wrap justify-between gap-10 mt-10 border-b mx-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 pb-4 text-sm font-medium transition relative
              ${
                activeTab === index
                  ? "text-[#090F4E]"
                  : "text-[#4C4C4C] hover:text-[#0A0F3C]"
              }`}
          >
            <img src={tab.icon} alt={tab.title} className="w-5 h-5" />
            {tab.title}

            {activeTab === index && (
              <span className="absolute left-0 -bottom-[3px] w-full h-[2px] bg-[#0A0F3C]" />
            )}
          </button>
        ))}
      </div>

      {/* ================= INFO TEXT ================= */}
      <p className="text-[#4D4D4D] mt-6">
        It's hard to find the accurate contact data for every prospects by
        <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
          Incomplete Data
        </span>
      </p>

      {/* ================= CONTENT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* ========== LEFT CONTAINER ========== */}

        <div className="bg-white rounded-xl shadow">
          <img
            src={leftImg}
            alt="Data Enrichment"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        {/* </div> */}

        {/* ========== RIGHT CONTAINER ========== */}
        <div className="bg-white rounded-xl shadow">
          <img
            src={rightImg}
            alt="Waterfall Enrichment"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
