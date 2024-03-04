"use client";

import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "@/actions/follow";
import { useTransition } from "react";
import { toast } from "sonner";
import { onBlock, onUnblock } from "@/actions/block";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();
  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          toast.success(`你现在关注了 ${data.following.username}`);
        })
        .catch((err) => {
          toast.error("Error");
        });
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => {
          toast.success(`你现在取消关注了 ${data.following.username}`);
        })
        .catch((err) => {
          toast.error("Error");
        });
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((res) => {
          toast.success(`Blocked the user ${res?.blocked.username}`);
        })
        .catch(() => toast.error("Error"));
    });
  };

  const handleUnBlock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) => {
          toast.success(`Unblocked the user ${data.blocked.username}`);
        })
        .catch(() => toast.error("Error"));
    });
  };

  const onBlockClick = () => {};

  return (
    <>
      <Button disabled={isPending} variant="primary" onClick={onClick}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button disabled={isPending} onClick={handleBlock}>
        handleBlock
      </Button>
      <Button onClick={handleUnBlock}>handleUnBlock</Button>
    </>
  );
};
