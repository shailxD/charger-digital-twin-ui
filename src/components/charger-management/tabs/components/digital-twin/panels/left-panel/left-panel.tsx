"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FrontView, RearView, LeftView, RightView } from "./view";
import { getIcon } from "@/assets/icons";

const views = ["Front View", "Rear View", "Left View", "Right View"] as const;

export function LeftPanel({ className }: { className?: string }) {
  const [viewIndex, setViewIndex] = useState(0);
  const view = views[viewIndex];

  const isFirst = viewIndex === 0;
  const isLast = viewIndex === views.length - 1;

  const handlePrev = () => {
    if (!isFirst) setViewIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isLast) setViewIndex((prev) => prev + 1);
  };

  return (
    <div className={cn("flex flex-col gap-4", "min-h-0", className)}>
      {view === "Front View" && <FrontView />}
      {view === "Rear View" && <RearView />}
      {view === "Left View" && <LeftView />}
      {view === "Right View" && <RightView />}
      <div
        className={cn(
          "rounded-sm bg-[#151727]/30",
          "flex items-center justify-between gap-4",
          "mx-auto px-6 py-3",
          "w-full max-w-[350px]"
        )}
      >
        <button
          onClick={handlePrev}
          disabled={isFirst}
          className="cursor-pointer"
        >
          {getIcon(
            "longarrow_left",
            cn("size-5", isFirst ? "text-[#444851]" : "text-[#ADB7D2]")
          )}
        </button>
        <p className="text-sm text-[#AEAEAE]">{view}</p>
        <button
          onClick={handleNext}
          disabled={isLast}
          className="cursor-pointer"
        >
          {getIcon(
            "longarrow_right",
            cn("size-5", isLast ? "text-[#444851]" : "text-[#ADB7D2]")
          )}
        </button>
      </div>
    </div>
  );
}
