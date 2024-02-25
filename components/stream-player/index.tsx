"use client";
import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";
import React, { memo } from "react";
import { LiveKitRoom } from "@livekit/components-react";
import Video from "./video";

interface StreamPlayerProps {
  user: User & {
    stream: Stream | null;
  };
  stream: Stream;
  isFollowing: boolean;
}

const StreamPlayer = ({ user, stream, isFollowing }: StreamPlayerProps) => {
  // 获取观众的token和消息
  const { token, name, identity } = useViewerToken(user.id);

  if (!token || !name || !identity) return <div>Cannot watch the stream</div>;

  return (
    <>
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className=" lg:grid-cols-3 lg:gap-y-0 xl:grid-cols-3 2xl:grid-cols-6 grid h-full grid-cols-1"
      >
        <div className=" hidden-scrollbar lg:col-span-2 lg:overflow-y-auto xl:col-span-2 2xl:col-span-5 col-span-1 pb-10 space-y-4">
          <Video hostName={user.username} hostIdentity={user.id} />
        </div>
      </LiveKitRoom>
    </>
  );
};

export default StreamPlayer;
