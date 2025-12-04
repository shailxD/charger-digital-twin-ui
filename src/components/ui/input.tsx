import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & {
  variant?: "default" | "unstyled";
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-sm placeholder:text-muted-foreground",
        "selection:bg-primary selection:text-primary-foreground",
        variant === "unstyled"
          ? "bg-transparent outline-none"
          : [
              "h-9 w-full min-w-0",
              "px-3 py-1",
              "rounded-md",
              "bg-transparent dark:bg-input/30",
              "border border-input",
              "shadow-xs",
              "transition-[color,box-shadow]",
              "outline-none",
              "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
              "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
              "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            ],
        className
      )}
      {...props}
    />
  );
}

export { Input };
