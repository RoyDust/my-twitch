"use client";
import React, { memo, useTransition } from "react";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { onFollow, onUnfollow } from "@/actions/follow";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

interface ActionsProps {
  isFollowing: boolean;
  hostIdentity: string;
  isHost: boolean;
}

const Actions = ({ isFollowing, hostIdentity, isHost }: ActionsProps) => {
  const [isPending, startTransaction] = useTransition();
  const router = useRouter();
  const { userId } = useAuth();

  const handleFollow = () => {
    startTransaction(() => {
      onFollow(hostIdentity)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`),
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnfollow = () => {
    startTransaction(() => {
      onUnfollow(hostIdentity)
        .then((data) =>
          toast.success(`You are now unfollowed ${data.following.username}`),
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const toggleFollow = () => {
    if (!userId) {
      return router.push("/sign-in");
    }
    if (isHost) return;
    if (isFollowing) {
      // unfollow
      handleUnfollow();
    } else {
      // follow
      handleFollow();
    }
  };

  return (
    <Button
      disabled={isPending || isHost}
      onClick={toggleFollow}
      variant="primary"
      size="sm"
      className="sm:w-auto w-full"
    >
      <Heart
        className={
          (cn("mr-2 h-4 w-4"), isFollowing ? "fill-white" : "fill-none")
        }
      />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default Actions;
export const ActionsSkeleton = () => {
  return <Skeleton className="lg:w-24 w-full h-10" />;
};
