import { Check } from "lucide-react";
import React, { memo } from "react";

const VerifiedMark = () => {
  return (
    <div className=" flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 p-0.5">
      <Check className=" h-[10px] w-[10px] stroke-[4px] text-primary " />
    </div>
  );
};
export default VerifiedMark;
