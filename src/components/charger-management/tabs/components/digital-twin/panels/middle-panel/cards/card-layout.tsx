import React from "react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/assets/icons";

function PanelCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-[#0D111D]",
        "rounded-sm px-5 py-4",
        "flex flex-col justify-between gap-5",
        className
      )}
    >
      {children}
    </div>
  );
}

function PanelCardHeader({
  title,
  subtitle,
  hasToggle = false,
  statusColor = "text-gray-500",
}: {
  title: string;
  subtitle?: string;
  hasToggle?: boolean;
  statusColor?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-2">
        <h3 className="text-[15px]">{title}</h3>
        {hasToggle && getIcon("toggle", cn("size-3", statusColor))}
      </div>
      {subtitle && <p className="text-[11px] text-[#AEAEAE]">{subtitle}</p>}
    </div>
  );
}

export { PanelCard, PanelCardHeader };
