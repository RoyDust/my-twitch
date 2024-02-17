"use client";

import { updateStream } from "@/actions/stream";
import { Switch } from "@/components/ui/switch";
import React, { useTransition } from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  field: FieldTypes;
  label: string;
  value: boolean;
}

const ToggleCard = ({ field, label, value = false }: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({
        [field]: !value,
      })
        .then(() => {
          toast.success("Chat settings updated");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <div className=" rounded-xl bg-muted p-6">
      <div className=" flex items-center justify-between">
        <p className=" shrink-0 font-semibold">{label}</p>
        <div className=" space-y-2">
          <Switch
            disabled={isPending}
            checked={value}
            onCheckedChange={onChange}
          >
            {value ? "ON" : "OFF"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;

export const ToggleCardSkeleton = () => {
  return <Skeleton className=" rounded-xl w-full p-10" />;
};
