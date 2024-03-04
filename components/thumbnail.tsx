import Image from "next/image";
import { UserAvatar } from "./user-avatar";
import { Skeleton } from "./ui/skeleton";
import { LiveBadge } from "./live-badge";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail = ({
  src,
  fallback,
  isLive,
  username,
}: ThumbnailProps) => {
  let content;

  if (!src) {
    content = (
      <div className=" gap-y-4 bg-background group-hover:-translate-y-2 group-hover:translate-x-2 flex flex-col items-center justify-center w-full h-full transition-transform rounded-md">
        <UserAvatar
          size="lg"
          showBadge
          username={username}
          imageUrl={fallback}
          isLive={isLive}
        />
      </div>
    );
  } else {
    content = (
      <Image
        src={src}
        fill
        alt="Thumbnail"
        className=" group-hover:-translate-y-2 group-hover:translate-x-2 object-cover transition-transform rounded-md"
      />
    );
  }

  // ! 项目中css最复杂的一个组件
  return (
    <div className=" group aspect-video relative rounded-md cursor-pointer">
      <div className=" bg-blue-600/80 group-hover:opacity-100 absolute inset-0 flex items-center transition-opacity rounded-md opacity-0" />
      {content}
      {isLive && src && (
        <div className=" left-2 top-2 group-hover:-translate-y-2 group-hover:translate-x-2 absolute transition-transform">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className=" group aspect-video rounded-xl relative cursor-pointer">
      <Skeleton className=" w-full h-full" />
    </div>
  );
};
