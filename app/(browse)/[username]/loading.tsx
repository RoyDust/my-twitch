import { StreamPlayerSkeleton } from "@/components/stream-player";
import React, { memo } from "react";

const UserLoading = () => {
  return (
    <div className=" h-full">
      <StreamPlayerSkeleton />
    </div>
  );
};

export default UserLoading;
