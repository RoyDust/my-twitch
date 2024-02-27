import { useMemo } from "react";
import { Hint } from "../hint";
import { Info } from "lucide-react";

interface ChatInfoProps {
  isDelayed: boolean;
  isFollowersOnly: boolean;
}

export const ChatInfo = ({ isDelayed, isFollowersOnly }: ChatInfoProps) => {
  const hint = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return "Only followers can chat";
    }

    if (isDelayed && !isFollowersOnly) {
      return "Messages are delayed by 3 seconds";
    }

    if (isDelayed && isFollowersOnly) {
      return "Only followers can chat. Messages are delayed by 3 seconds";
    }

    return "";
  }, [isDelayed, isFollowersOnly]);

  const label = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return "Followers only";
    }

    if (isDelayed && !isFollowersOnly) {
      return "Slow mode";
    }

    if (isDelayed && isFollowersOnly) {
      return "Followers only and slow mode";
    }

    return "";
  }, [isDelayed, isFollowersOnly]);
  if (!isDelayed && !isFollowersOnly) return null;

  return (
    <div className=" gap-x-2 rounded-t-md border-white/10 bg-white/5 text-muted-foreground flex items-center w-full p-2 border">
      <Hint label={hint}>
        <Info className=" w-4 h-4" />
      </Hint>
      <p className=" text-xs font-semibold">{label}</p>
    </div>
  );
};
