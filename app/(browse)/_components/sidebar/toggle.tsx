"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import React, { memo } from "react";
import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";

const Toggle = () => {
  const { collapsed, onExpand, onCollapsed } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

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
        <div className=" flex items-center w-full p-3 pl-6 mb-2">
          <p className=" text-primary font-semibold">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              className=" h-auto p-2 ml-auto"
              variant="ghost"
              onClick={onCollapsed}
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

export const ToggleSkeleton = () => {
  return (
    <div className="lg:flex items-center justify-between hidden w-full p-3 pl-6 mb-2">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="w-6 h-6" />
    </div>
  );
};
