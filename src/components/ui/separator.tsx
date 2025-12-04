"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

function ShadowSeparator({
  className,
  orientation = "vertical",
  side = "right",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
  side?: "left" | "right" | "top" | "bottom";
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden",
        orientation === "horizontal" ? "h-5 w-full" : "h-full w-5",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute rounded-[100%] bg-transparent shadow-[0_0_8px_black] dark:shadow-[0_0_8px_rgba(255,255,255,0.5)]",
          orientation === "horizontal" ? "h-5 w-full" : "h-full w-5",
          orientation === "vertical" && side === "right" && "left-5",
          orientation === "vertical" && side === "left" && "right-5",
          orientation === "horizontal" && side === "bottom" && "top-5",
          orientation === "horizontal" && side === "top" && "bottom-5"
        )}
      />
    </div>
  );
}

export { Separator, ShadowSeparator };
