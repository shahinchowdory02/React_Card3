import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <div className="flex justify-between items-center">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
