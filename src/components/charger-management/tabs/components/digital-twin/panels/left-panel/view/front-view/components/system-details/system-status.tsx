import { getIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import type { SystemStatusItem, SystemStatusType } from "./types";

interface SystemStatusProps {
  items: SystemStatusItem[][];
}

const statusStyles: Record<SystemStatusType, string> = {
  fine: "border-[#18871E] bg-[radial-gradient(879.41%_98.61%_at_49.12%_1.33%,rgba(62,255,77,0)_0%,#1ABB22_100%)] text-[#F8FEF9]",
  warning:
    "border-[#FFC933] bg-[radial-gradient(879.41%_98.61%_at_49.12%_1.33%,rgba(201,162,39,0)_0%,#FFC933_100%)] text-[#F8FEF9]",
  error:
    "border-[#E74739] bg-[radial-gradient(879.41%_98.61%_at_49.12%_1.33%,rgba(185,28,28,0)_0%,#E74739_100%)] text-[#F8FEF9]",
  offline: "border-[#3E4D6A] bg-[#212637] text-[#3E4D6A]",
};

export function SystemStatus({ items }: SystemStatusProps) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((item, itemIndex) => (
            <div
              key={`${item.label}-${itemIndex}`}
              className={cn(
                "rounded-[4px] border",
                "min-w-0 flex-1",
                "flex flex-col items-center justify-center gap-0.5",
                item.icon ? "px-1 pt-1" : "p-1",
                statusStyles[item.status]
              )}
            >
              {item.icon && getIcon("memory_alt", "size-3 text-[#60DD68]")}
              <p className="text-[8px] font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
