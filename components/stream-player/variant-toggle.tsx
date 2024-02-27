import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
import { MessageSquare, User } from "lucide-react";
import { Hint } from "../hint";
import { Button } from "../ui/button";

// 切换聊天和社区
export const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state);

  const isChat = variant === ChatVariant.CHAT;

  const Icon = isChat ? User : MessageSquare;

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    onChangeVariant(newVariant);
  };

  const label = isChat ? "Community" : "Go back to chat";

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
