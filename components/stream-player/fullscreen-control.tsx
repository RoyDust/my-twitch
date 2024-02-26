"use client";

import { Maximize, Minimize, Fullscreen } from "lucide-react";
import { Hint } from "../hint";

interface FullscreenProps {
  isFullscreen: boolean;
  onToggle: () => void;
}

export const FullscreenControl = ({
  isFullscreen,
  onToggle,
}: FullscreenProps) => {
  const Icon = isFullscreen ? Minimize : Maximize;
  const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";

  return (
    <div className=" flex items-center justify-center gap-4">
      <Hint label={label} asChild>
        <button
          onClick={onToggle}
          className=" rounded-lg p-1.5 text-white hover:bg-white/10"
        >
          <Icon className="w-5 h-5" />
        </button>
      </Hint>
    </div>
  );
};
