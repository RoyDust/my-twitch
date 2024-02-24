"use client";
import { useSidebar } from "@/store/use-sidebar";
import { Stream, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommendedProps {
  data: (User & {
    stream: Stream | null;
  })[];
}

export const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;

  return (
    <div className=" flex flex-col mb-4">
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-muted-foreground text-sm">Recommended</p>
        </div>
      )}
      <ul className="px-2 space-y-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={user.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};
export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
