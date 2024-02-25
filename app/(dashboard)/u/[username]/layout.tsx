import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";

import React, { memo } from "react";
import Navbar from "./_components/navbar";
import { Sidebar } from "./_components/siderbar";
interface CreatorLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className=" flex w-full h-full pt-20">
        <Sidebar/>
        {children}</div>
    </>
  );
};

export default CreatorLayout;
