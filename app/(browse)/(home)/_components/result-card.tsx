import React, { memo } from "react";

import { Stream, User } from "@prisma/client";
import Link from "next/link";
import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { LiveBadge } from "@/components/live-badge";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultCardProps {
  data: {
    isLive: boolean;
    id: string;
    user: User;
    name: string;
    thumbnailUrl: string | null;
  };
}

const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className=" w-full h-full space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.imageUrl}
          isLive={data.isLive}
          username={data.user.username}
        />
        <div className=" gap-x-3 flex">
          <UserAvatar
            username={data.user.username}
            imageUrl={data.user.imageUrl}
            isLive={data.isLive}
          />
          <div className=" flex flex-col overflow-hidden text-sm">
            <p className=" hover:text-blue-500 font-semibold truncate">
              {data.name}
            </p>
            <p className=" text-muted-foreground">{data.user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ResultCard;

export const ResultsCardSkeleton = () => {
  return (
    <div className=" w-full h-full space-y-4">
      <ThumbnailSkeleton />
      <div className=" gap-x-3 flex">
        <UserAvatarSkeleton />
        <div className=" gap-y-1 flex flex-col">
          <Skeleton className=" w-32 h-4" />
          <Skeleton className=" w-24 h-3" />
        </div>
      </div>
    </div>
  );
};
