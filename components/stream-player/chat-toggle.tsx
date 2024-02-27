import { useChatSidebar } from "@/store/use-chat-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "../hint";
import { Button } from "../ui/button";

// 切换聊天栏的按钮
export const ChatToggle = () => {
  const { collapsed, onExpand, onCollapsed } = useChatSidebar((state) => state);

  const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

  const onToggle = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapsed();
    }
  };

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <Hint label={label} side="left" asChild>
      <Button
        onClick={onToggle}
        variant="ghost"
        className=" hover:bg-white/10 hover:text-primary h-auto p-2 bg-transparent"
      >
        <Icon className="w-5 h-5" />
      </Button>
    </Hint>
  );
};
