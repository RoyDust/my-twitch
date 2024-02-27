"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ChatToggle } from "./chat-toggle";
import { VariantToggle } from "./variant-toggle";

export const ChatHeader = () => {
  return (
    <div className=" relative p-3 border-b">
      <div className=" left-2 top-2 lg:block absolute hidden">
        <ChatToggle />
      </div>
      <p className=" text-primary font-semibold text-center">Stream Chat</p>
      <div className=" right-2 top-2 absolute">
        <VariantToggle />
      </div>
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return (
    <div className=" md:block relative hidden p-3 border-b">
      <p className=" animate-pulse text-primary font-semibold text-center">
        <Skeleton className=" left-3 top-3 absolute w-6 h-6" />
        <Skeleton className=" w-28 h-6 mx-auto" />
      </p>
    </div>
  );
};
