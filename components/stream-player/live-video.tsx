"use client";

import { Participant, RemoteParticipant, Track } from "livekit-client";
import { useRef } from "react";
import { useTracks } from "@livekit/components-react";

interface LiveVideoProps {
  participant: RemoteParticipant | undefined;
}

export const LiveVideo = ({ participant }: LiveVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant?.identity)
    .forEach((track) => {
      if (videoRef.current) {
        track.publication.track?.attach(videoRef.current);
      }
    });

  return (
    <div ref={wrapperRef} className=" relative flex h-full">
      <video width="100%" ref={videoRef} />
    </div>
  );
};
