import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface UnblockButtonProps {
  userId: string;
}

export const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((res) => toast.success(`User ${res.blocked.username} unblocked`))
        .catch(() => toast.error("Error unblocking user"));
    });
  };

  return (
    <Button
      disabled={isPending}
      variant="link"
      size="sm"
      className=" w-full text-blue-500"
      onClick={onClick}
    >
      Unblock
    </Button>
  );
};
