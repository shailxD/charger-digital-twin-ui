import { cn } from "@/lib/utils";
import { getChargerConnectionIcon } from "@/assets/icons";
import type { ChargerConnectionItem } from "./types";

interface ChargerConnectionProps {
  connections: ChargerConnectionItem[];
}

export function ChargerConnection({ connections }: ChargerConnectionProps) {
  return (
    <div className="flex justify-between gap-2">
      {connections.map((conn) => {
        const isConnected = conn.status === "connected";
        return (
          <div
            key={conn.label}
            className={cn(
              "rounded-sm border",
              "min-w-0 flex-1",
              "flex flex-col items-center justify-center gap-0.5 pt-1",
              "[&_svg]:h-4 [&_svg]:w-auto",
              isConnected
                ? "border-[#18871E] bg-[radial-gradient(879.41%_98.61%_at_49.12%_1.33%,rgba(62,255,77,0)_0%,#1ABB22_100%)] text-[#60DD68] [&_svg]:text-[#60DD68]"
                : "border-[#3E4D6A] bg-[#0B0E18] text-[#3E4D6A] [&_svg]:text-[#3E4D6A]"
            )}
          >
            {getChargerConnectionIcon(conn.label, conn.status)}
            <p
              className={cn(
                "text-[10px] uppercase",
                isConnected ? "text-[#F8FEF9]" : "text-[#3E4D6A]"
              )}
            >
              {conn.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
