import { Input } from "@/components/ui/input";
import React, { memo } from "react";
import CopyButton from "./copy-button";

interface UrlCardProps {
  value: string | null;
}

const UrlCard = ({ value }: UrlCardProps) => {
  return (
    <div className=" rounded-xl bg-muted p-6">
      <div className=" gap-x-10 flex items-center">
        <p className=" shrink-0 font-semibold">Server URL</p>
        <div className=" w-full space-y-2">
          <div className=" gap-x-2 flex items-center w-full">
            <Input value={value || ""} disabled placeholder="Server URL" />
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;
