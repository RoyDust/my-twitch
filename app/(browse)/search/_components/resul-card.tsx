import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import VerifiedMark from "@/components/verified-mark";
import { Stream, User } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import React, { memo } from "react";

interface ResultCardProps {
  data: {
    user: User;
    id: string;
    name: string;
    isLive: boolean;
    thumbnailUrl: string | null;
    updatedAt: Date;
  };
}

const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className=" gap-x-4 flex w-full">
        <div className=" relative h-[9rem] w-[16rem]">
          <Thumbnail
            src={data.thumbnailUrl}
            fallback={data.user.imageUrl}
            isLive={data.isLive}
            username={data.user.username}
          />
        </div>
        <div className=" space-y-1">
          <div className=" gap-x-2 flex items-center">
            <p className=" hover:text-blue-500 text-lg font-bold cursor-pointer">
              {data.user.username}
            </p>
            <VerifiedMark />
          </div>
          <p className=" text-muted-foreground text-sm">{data.name}</p>
          <p className=" text-muted-foreground text-sm">
            {formatDistanceToNow(new Date(data.updatedAt), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;

export const ResultCardSkeleton = () => {
  return (
    <div className=" gap-x-4 flex w-full">
      <div className=" relative h-[9rem] w-[16rem]">
        <ThumbnailSkeleton />
      </div>
      <div className=" space-y-2">
        <Skeleton className=" w-32 h-4" />
        <Skeleton className=" w-24 h-3" />
        <Skeleton className=" w-12 h-3" />
      </div>
    </div>
  );
};
