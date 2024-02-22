"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCheck, Copy } from "lucide-react";
import React, { memo, useState } from "react";
import CopyButton from "./copy-button";

interface KeyCardProps {
  value: string | null;
}

const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className=" rounded-xl bg-muted p-6">
      <div className=" gap-x-10 flex">
        <p className=" shrink-0 font-semibold">Stream Key</p>
        <div className=" w-full space-y-2">
          <div className=" gap-x-2 flex items-center w-full">
            <Input
              value={value || ""}
              disabled
              type={show ? "text" : "password"}
              placeholder="Stream Key"
            />
            <CopyButton value={value || ""} />
          </div>
          <Button
            onClick={() => {
              setShow(!show);
            }}
            size="sm"
            variant="link"
          >
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
