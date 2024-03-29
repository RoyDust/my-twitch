import React, { memo } from "react";
import { clsx } from "clsx";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className=" gap-x-4 hover:opacity-75 lg:flex flex items-center transition">
        <div className=" shrink-0 lg:mr-0 lg:shrink p-1 mr-12 bg-white rounded-full">
          <Image src="/spooky.svg" alt="GameHub" height={32} width={32} />
        </div>
        <div className={cn(" hidden lg:block", font.className)}>
          <p className=" text-lg font-semibold">GameHub</p>
          <p className=" to-muted-foreground text-xs">Creator dashboard</p>
        </div>
      </div>
    </Link>
  );
};
export default Logo;
