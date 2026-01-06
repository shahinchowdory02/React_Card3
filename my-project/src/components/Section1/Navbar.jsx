import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-gray-100">
      <h4
        className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold tracking-wide text-gray-800 shadow-sm
      ring-1 ring-gray-200"
      >
        Target Audience
      </h4>
      <button className="bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-800">
        digital banking platform
      </button>
    </div>
  );
};

export default Navbar;
