"use client";

import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react";
import { ConnectionState, Track } from "livekit-client";
import React, { memo } from "react";

interface VideoProps {
  hostName: string;
  hostIdentity: string;
}

const Video = ({ hostIdentity, hostName }: VideoProps) => {
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]).filter((track) => track.participant.identity === hostIdentity);

  let content;

  if (!participant && connectionState === ConnectionState.Connected) {
    content = <p>Host is offline</p>;
  } else if (!participant && tracks.length === 0) {
    content = <p>Loading...</p>;
  } else {
    content = <p>Live video</p>;
  }

  return <div className=" group aspect-video relative border-b">{content}</div>;
};

export default Video;
