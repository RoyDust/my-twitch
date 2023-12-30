import React, { memo } from "react";
import { clsx } from "clsx";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className=" gap-y-4 flex flex-col items-center">
      <div className=" right-full p-1 bg-white">
        <Image src="/spooky.svg" alt="Gamehub" height={80} width={80} />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">Gamehub</p>
        <p className="to-muted-foreground text-sm">Let&apos;s Play</p>
      </div>
    </div>
  );
};
export default Logo;
