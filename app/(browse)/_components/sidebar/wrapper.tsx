"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { FollowingSkeleton } from "./following";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const [isClient, setIsClient] = useState(false);
  const { collapsed } = useSidebar((state) => state);
  /**
   * 检测是否是客户端渲染
   * 如果是服务端渲染，则不渲染任何内容
   * 如果是客户端渲染，则正常渲染
   * 因为在服务端渲染时，无法获取到useEffect，所以无法变isClient的值
   * 也可以使用usehooks里的useIsClient
   */
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <aside
        className={cn(
          "fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2D2E35] bg-background lg:w-60",
        )}
      >
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 z-50 flex h-full w-60 flex-col border-r border-[#2D2E35] bg-background ",
        collapsed && "w-[70px]",
      )}
    >
      {children}
    </aside>
  );
};
