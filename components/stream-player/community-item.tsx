"use client";

import { cn, stringToColor } from "@/lib/utils";
import { Hint } from "../hint";
import { Button } from "../ui/button";
import { MinusCircle } from "lucide-react";
import { useMemo, useTransition } from "react";
import { onBlock } from "@/actions/block";
import { toast } from "sonner";

interface CommunityItemProps {
  key: string;
  hostName: string;
  viewerName: string;
  participantName?: string;
  participantIdentity: string;
}

export default function CommunityItem({
  hostName,
  viewerName,
  participantIdentity,
  participantName,
}: CommunityItemProps) {
  //! useTransition 的正确使用
  const [isPending, startTransition] = useTransition();

  const color = stringToColor(participantName || "");
  const isSelf = participantName === viewerName;
  const isHost = viewerName === hostName;

  const handleBlock = () => {
    if (isSelf || !isHost || !participantName) return;

    //! 通过并发渲染将耗时渲染的内容标记为非关键
    startTransition(() => {
      onBlock(participantIdentity)
        .then(() => toast.success(`Blocked ${participantName}`))
        .catch(() => toast.error("Failed to block"));
    });
  };


  return (
    <div
      className={cn(
        "group flex w-full items-center justify-between rounded-md p-2 text-sm hover:bg-white/5",
        isPending && "pointer-events-none opacity-50",
      )}
    >
      <p style={{ color: color }}>{participantName}</p>
      {isHost && !isSelf && (
        <Hint label="Block">
          <Button
            variant="ghost"
            disabled={isPending}
            onClick={handleBlock}
            className=" group-hover:opacity-100 w-auto h-auto p-1 transition opacity-0"
          >
            <MinusCircle className=" text-muted-foreground w-4 h-4" />
          </Button>
        </Hint>
      )}
    </div>
  );
}
