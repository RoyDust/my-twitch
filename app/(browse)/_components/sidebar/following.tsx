"use client";

import { useSidebar } from "@/store/use-sidebar";
import { Follow, Stream, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-item";

interface FollowingProps {
  data: (Follow & {
    following: User & {
      // ! 这里是涉及到了网络安全问题，不能直接将 stream 暴露出去，只暴露需要的内容
      stream: { isLive: boolean } | null;
    };
  })[];
}

export const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) {
    return null;
  }

  return (
    <div>
      {!collapsed && (
        <div className=" pl-6 mb-4">
          <p className=" text-muted-foreground text-sm">Following</p>
        </div>
      )}

      <ul className=" px-2 space-y-2">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imageUrl={follow.following.imageUrl}
            isLive={follow.following.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export const FollowingSkeleton = () => {
  return (
    <ul className=" lg:pt-0 px-2 pt-2">
      {[...Array(5)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
