"use client";

import React, { memo } from "react";
import { Info, Pencil } from "lucide-react";
import { Separator } from "@radix-ui/react-select";
import Image from "next/image";
import InfoModal from "./info-modal";

interface InfoCardProps {
  hostIdentity: string;
  viewerIdentity: string;
  name: string;
  thumbnailUrl: string | null;
}

const InfoCard = ({
  hostIdentity,
  viewerIdentity,
  name,
  thumbnailUrl,
}: InfoCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = hostAsViewer === viewerIdentity;

  if (!isHost) return null;

  return (
    <div className=" p-4">
      <div className=" rounded-xl bg-background">
        <div className=" flex items-center  gap-x-2.5 p-4">
          <div className=" w-auto h-auto p-2 bg-blue-600 rounded-md">
            <Pencil className=" w-5 h-5" />
          </div>
          <div>
            <h2 className=" lg:text-lg text-sm font-semibold capitalize">
              Edit your stream info
            </h2>
            <p>Maximize your visibility</p>
          </div>
          {/* todo: add button */}
          <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
        </div>
        <Separator />
        <div className=" lg:p-6 p-4 space-y-4">
          <div>
            <h3 className=" text-muted-foreground mb-2 text-sm">Name</h3>
            <p className=" text-sm font-semibold">{name}</p>
          </div>
          <div>
            <h3 className=" text-muted-foreground mb-2 text-sm">
              ThumbnailUrl
            </h3>
            {thumbnailUrl && (
              <div className=" relative aspect-video w-[200px] overflow-hidden rounded-md border border-white/10">
                <Image fill src={thumbnailUrl} alt={name} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
