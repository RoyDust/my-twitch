"use client";
import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";
import React, { memo } from "react";
import { LiveKitRoom } from "@livekit/components-react";
import Video, { VideoSkeleton } from "./video";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";
import { Chat, ChatSkeleton } from "./chat";
import { ChatToggle } from "./chat-toggle";
import Header, { HeaderSkeleton } from "./header";
import InfoCard from "./info-card";
import AboutCard from "./about-card";

type CustomStream = {
  id: string;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
  isLive: boolean;
  thumbnailUrl: string | null;
  name: string;
};

type CustomUser = {
  id: string;
  username: string;
  bio: string | null;
  stream: CustomStream | null;
  imageUrl: string;
  _count: {
    followedBy: number;
  };
};

interface StreamPlayerProps {
  user: CustomUser;
  stream: CustomStream;
  isFollowing: boolean;
}

const StreamPlayer = ({ user, stream, isFollowing }: StreamPlayerProps) => {
  // 获取观众的token和消息
  const { token, name, identity } = useViewerToken(user.id);

  const { collapsed } = useChatSidebar((state) => state);

  if (!token || !name || !identity) return <StreamPlayerSkeleton />;

  return (
    <>
      {collapsed && (
        <div className=" fixed right-2 top-[100px] z-50  hidden lg:block">
          <HeaderSkeleton />
          <ChatToggle />
        </div>
      )}
      {
        // ! 这个流播放器都包裹在liveKitRoom里面，为其所有子组件提供房间上下文
      }
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          " grid h-full grid-cols-1 lg:grid-cols-3 lg:gap-y-0 xl:grid-cols-3 2xl:grid-cols-6",
          collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2",
        )}
      >
        <div className=" hidden-scrollbar lg:col-span-2 lg:overflow-y-auto xl:col-span-2 2xl:col-span-5 col-span-1 pb-10 space-y-4">
          <Video hostName={user.username} hostIdentity={user.id} />
          <Header
            hostName={user.username}
            hostIdentity={user.id}
            viewerIdentity={identity}
            imageUrl={user.imageUrl}
            isFollowing={isFollowing}
            name={stream.name}
          />
          <InfoCard
            hostIdentity={user.id}
            viewerIdentity={identity}
            name={stream.name}
            thumbnailUrl={stream.thumbnailUrl}
          />
          <AboutCard
            hostName={user.username}
            hostIdentity={user.id}
            viewerIdentity={identity}
            bio={user.bio}
            followedByCount={user._count.followedBy}
          />
        </div>
        <div className={cn("col-span-1", collapsed && "hidden")}>
          <Chat
            viewerName={name}
            hostName={user.username}
            hostIdentity={user.id}
            isFollowing={isFollowing}
            isChatEnabled={stream.isChatEnabled}
            isChatDelayed={stream.isChatDelayed}
            isChatFollowersOnly={stream.isChatFollowersOnly}
          />
        </div>
      </LiveKitRoom>
    </>
  );
};

export default StreamPlayer;

export const StreamPlayerSkeleton = () => {
  return (
    <div className=" lg:grid-cols-3 lg:gap-y-0 xl:grid-cols-3 2xl:grid-cols-5 grid h-full grid-cols-1">
      <div className=" hidden-scrollbar lg:col-span-2 lg:overflow-y-auto xl:col-span-2 2xl:col-span-5 col-span-1 pb-10 space-y-4">
        <VideoSkeleton />
      </div>
      <div className=" bg-background col-span-1">
        <ChatSkeleton />
      </div>
    </div>
  );
};
