"use client";

import React, { memo } from "react";
import VerifiedMark from "../verified-mark";
import { BioModal } from "./bio-modal";



interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string | null;
  followedByCount: number;
}

const AboutCard = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  bio,
  followedByCount,
}: AboutCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  const followedByLabel = followedByCount === 1 ? `follower` : "followers";

  return (
    <div className=" px-4">
      <div className=" group gap-y-3 rounded-xl bg-background lg:p-10 flex flex-col p-6">
        <div className=" flex items-center justify-between">
          <div className=" gap-x-2 lg:text-2xl flex items-center text-lg font-semibold">
            About {hostName}
            <VerifiedMark />
          </div>
          {isHost && <BioModal initialValue={bio}/> }
        </div>
        <div className=" text-muted-foreground text-sm">
          <span className=" text-primary font-semibold">{followedByCount}</span>{" "}
          {followedByLabel}
        </div>
        <p className=" text-sm">{bio || "This user no bio"}</p>
      </div>
    </div>
  );
};

export default AboutCard;
