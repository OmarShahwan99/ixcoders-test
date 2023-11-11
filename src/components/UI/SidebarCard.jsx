import React from "react";

const SidebarCard = ({ children }) => {
  return (
    <div className="p-[15px] bg-white border-[1px] border-solid border-[#f5f5f9] mb-5 rounded">
      {children}
    </div>
  );
};

export default SidebarCard;
