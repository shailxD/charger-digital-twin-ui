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
        <NavButton
          icon="longarrow_left"
          onClick={handlePrev}
          disabled={isFirst}
        />
        <p className="text-sm text-[#AEAEAE]">{view}</p>
        <NavButton
          icon="longarrow_right"
          onClick={handleNext}
          disabled={isLast}
        />
      </div>
    </div>
  );
}

const NavButton = ({
  icon,
  onClick,
  disabled,
}: {
  icon: string;
  onClick: () => void;
  disabled: boolean;
}) => (
  <button onClick={onClick} disabled={disabled} className="cursor-pointer">
    {getIcon(
      icon,
      cn("size-5", disabled ? "text-[#444851]" : "text-[#ADB7D2]")
    )}
  </button>
);
