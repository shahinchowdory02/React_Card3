import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <div className="flex py-10 gap-10 items-center h-[90vh]  ">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
