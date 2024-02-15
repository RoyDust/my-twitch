"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { memo, useEffect } from "react";

interface NavItemProps {
  icon: LucideIcon;
  href: string;
  label: string;
  isActive: boolean;
}

const NavItem = ({ icon: Icon, label, href, isActive }: NavItemProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        " h-12 w-full",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent",
      )}
    >
      <Link href={href}>
        <div className=" gap-x-4 flex items-center">
          <Icon className={cn(" h-4 w-4", collapsed ? "mr-0 " : "mr-2")} />
          {!collapsed && <span>{label}</span>}
        </div>
      </Link>
    </Button>
  );
};

export default NavItem;

export const NavItemSkeleton = () => {
  return (
    <li className=" gap-x-4 flex items-center px-3 py-2">
      <Skeleton className=" min-h-[48px] min-w-[48px] rounded-md" />

      <div className=" lg:block flex-1 hidden">
        <Skeleton className=" h-6" />
      </div>
    </li>
  );
};
