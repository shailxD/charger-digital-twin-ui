"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-11 w-fit items-center justify-center rounded-none border-b border-[#ADB7D2] bg-transparent p-0 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-full flex-1 items-center justify-center gap-2",
        "cursor-pointer px-2 py-1",
        "text-sm font-medium whitespace-nowrap",
        "text-muted-foreground dark:text-[#ADB7D2]",
        "rounded-none border-0 border-b-3 border-transparent",
        "transition-[color,box-shadow]",
        "hover:text-foreground dark:hover:text-foreground",
        "hover:border-muted-foreground/30",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring",
        "focus-visible:ring-[3px] focus-visible:outline-1",
        "data-[state=active]:text-foreground dark:data-[state=active]:text-[#87C445]",
        "data-[state=active]:border-primary dark:data-[state=active]:border-[#87C445]",
        "data-[state=active]:shadow-none",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
