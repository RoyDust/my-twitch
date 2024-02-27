"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { ChatInfo } from "./chat-info";

interface ChatFormProps {
  value: string;
  isHidden: boolean;
  isFollowingOnly: boolean;
  isDelayed: boolean;
  isFollowing: boolean;
  onSubmit: () => void;
  onChange: (value: string) => void;
}

export const ChatForm = ({
  value,
  isHidden,
  isFollowingOnly,
  isDelayed,
  isFollowing,
  onSubmit,
  onChange,
}: ChatFormProps) => {
  // 延迟消息
  const [isDelayBlocked, setIsDelayBlocked] = useState(false);
  //
  const isFollowersOnlyAndNotFollowing = isFollowingOnly && !isFollowing;
  const isDisabled =
    isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowing;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!value || !isDisabled) return;

    if (isDelayed && !isDelayBlocked) {
      setIsDelayBlocked(true);
      setTimeout(() => {
        setIsDelayBlocked(false);
        onSubmit();
      }, 3000);
    } else {
      onSubmit();
    }
  };

  if (isHidden) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className=" gap-y-4 flex flex-col items-center p-3"
    >
      <div className=" w-full">
        <ChatInfo isDelayed={isDelayed} isFollowersOnly={isFollowingOnly} />
        <Input
          onChange={(e) => onChange(e.target.value)}
          value={value}
          disabled={isDisabled}
          placeholder="Send a message"
          className={cn(
            " border-white/10",
            isFollowingOnly && "rounded-t-none border-t-0",
          )}
        />
      </div>
      <div className=" ml-auto">
        <Button type="submit" variant="primary" size="sm" disabled={isDisabled}>
          Chat
        </Button>
      </div>
    </form>
  );
};

export const ChatFormSkeleton = () => {
  return (
    <div className=" gap-y-4 flex flex-col items-center p-3">
      <Skeleton className=" w-full h-10" />
      <div className=" gap-x-2 flex items-center ml-auto">
        <Skeleton className=" h-7 w-7" />
        <Skeleton className=" w-7 h-12" />
      </div>
    </div>
  );
};
