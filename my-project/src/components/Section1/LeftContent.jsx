import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const LeftContent = () => {
  return (
    <div className="h-full w-1/4 flex flex-col justify-between">
      {/* Content */}
      <div className="space-y-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600">
          Customer Intelligence
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
          Future Customer <br /> Classification
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          voluptatibus fugiat, impedit explicabo consequuntur sequi minus rem
          debitis, repellat tenetur similique natus dolorum accusantium officia
          aperiam, illo veritatis eum nostrum.{" "}
        </p>
      </div>

      {/* Action */}
      <div className="flex justify-end">
        <button
          className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          aria-label="Explore"
        >
          <MdOutlineArrowOutward className="text-2xl transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default LeftContent;
