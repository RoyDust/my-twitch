"use client";
import React, { memo } from "react";
import { UserAvatar, UserAvatarSkeleton } from "../user-avatar";
import VerifiedMark from "../verified-mark";
import {
  useParticipants,
  useRemoteParticipant,
} from "@livekit/components-react";
import { UserIcon } from "lucide-react";
import Actions, { ActionsSkeleton } from "./actions";
import { Skeleton } from "../ui/skeleton";

interface HeaderProps {
  // 主播房间名
  hostName: string;
  // 主播ID
  hostIdentity: string;
  // 观众ID
  viewerIdentity: string;
  // 主播头像
  imageUrl: string;
  // 是否关注主播
  isFollowing: boolean;
  // 直播间名
  name: string;
}

const Header = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  imageUrl,
  isFollowing,
  name,
}: HeaderProps) => {
  // 获取所有观众信息
  const participants = useParticipants();
  // 获取主播信息
  const participant = useRemoteParticipant(hostIdentity);

  const isLive = !!participant;
  const participantCount = participants.length;

  const hostAsViewer = `host-${viewerIdentity}`;
  const isHost = hostAsViewer === viewerIdentity;

  return (
    <div className="gap-y-4 sm:flex-row lg:gap-y-0 flex flex-col items-start justify-between px-4">
      <div className="gap-x-3 flex items-center">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size="lg"
          isLive={isLive}
          showBadge
        />
        <div className="space-y-1">
          <div className="gap-x-2 flex items-center">
            <h2 className="text-lg font-semibold">{hostName}</h2>
            <VerifiedMark />
          </div>
          <p className="text-sm font-semibold">{name}</p>
          {isLive ? (
            <div className="gap-x-1 text-rose-500 flex items-center text-xs font-semibold">
              <UserIcon className="w-4 h-4" />
              <p>
                {participantCount}{" "}
                {participantCount === 1 ? "viewer" : "viewers"}
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground text-xs font-semibold">
              Offline
            </p>
          )}
        </div>
      </div>
      <Actions
        isFollowing={isFollowing}
        hostIdentity={hostIdentity}
        isHost={isHost}
      />
    </div>
  );
};

export default Header;

export const HeaderSkeleton = () => {
  return (
    <div className="gap-y-4 lg:flex-row lg:gap-y-0 flex flex-col items-start justify-between px-4">
      <div className="gap-x-2 flex items-center">
        <UserAvatarSkeleton size="lg" />
        <div className="space-y-2">
          <Skeleton className="w-32 h-6" />
          <Skeleton className="w-24 h-4" />
        </div>
      </div>
      <ActionsSkeleton />
    </div>
  );
};
