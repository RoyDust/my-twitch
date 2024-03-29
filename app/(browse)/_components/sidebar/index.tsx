import React, { memo } from "react";
import { Wrapper } from "./wrapper";
import Toggle, { ToggleSkeleton } from "./toggle";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { getRecommended } from "@/lib/recommended-service";
import { getFollowers } from "@/lib/follow-service";
import { Following, FollowingSkeleton } from "./following";

export const Sidebar: any = async () => {
  const recommended = await getRecommended();

  const following = await getFollowers();

  return (
    <Wrapper>
      <Toggle />
      <div className=" lg:pt-0 pt-4 space-y-4">
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2D2E35] bg-background lg:w-60">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
