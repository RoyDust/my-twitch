"use client";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import React, { memo } from "react";

const Toggle = () => {
  const { collapsed, onExpand, onCollapsed } = useCreatorSidebar(
    (state) => state,
  );

  const label = collapsed ? "Expand" : "Collapsed";

  return (
    <>
      {collapsed && (
        <div className=" lg:flex items-center justify-center hidden w-full pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} variant="ghost" className=" h-auto p-2">
              <ArrowRightFromLine className=" w-4 h-4" />
            </Button>
          </Hint>
        </div>
      )}

      {!collapsed && (
        <div className=" lg:flex items-center hidden w-full p-3 pl-6 mb-2">
          <p className=" text-primary font-semibold">Dashboard</p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapsed}
              variant="ghost"
              className=" h-auto p-2 ml-auto"
            >
              <ArrowLeftFromLine className=" w-4 h-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;
