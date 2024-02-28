"use client";

import { stringToColor } from "@/lib/utils";
import { ReceivedChatMessage } from "@livekit/components-react";
import { format } from "date-fns";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

export const ChatMessage = ({ data }: ChatMessageProps) => {
  const color = stringToColor(data.from?.name || "");

  return (
    <div className=" hover:bg-white/5 flex gap-2 p-2 rounded-md">
      <p className=" text-white/40 text-sm">
        {format(data.timestamp, "HH:MM")}
      </p>
      <div className=" grow flex flex-wrap items-baseline gap-1">
        <p className=" text-sm font-semibold whitespace-normal">
          <span className=" truncate" style={{ color: color }}>
            {data.from?.name}
          </span>:
        </p>
        <p className=" text-sm break-all">{data.message}</p>
      </div>
    </div>
  );
};
