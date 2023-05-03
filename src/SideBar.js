import React from "react";
import { FaBeer } from "react-icons/fa";
import { AiFillBug, AiFillBulb, AiFillCompass } from "react-icons/ai";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaBeer size="40" />} />
      <SideBarIcon icon={<AiFillBug size="40" />} />
      <SideBarIcon icon={<AiFillBulb size="40" />} />
      <SideBarIcon icon={<AiFillCompass size="40" />} />
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
