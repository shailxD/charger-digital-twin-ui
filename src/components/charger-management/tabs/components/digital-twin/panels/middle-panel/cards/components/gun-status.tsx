import { PanelCard, PanelCardHeader } from "../card-layout";
import { gunStatusData } from "../../../data";
import { getIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

function splitAlphaNumeric(input: string): string {
  return input.replace(/^([a-zA-Z]+)(\d+)$/, "$1 $2");
}

export function GunStatusCard({ className }: { className?: string }) {
  return (
    <PanelCard className={className}>
      <PanelCardHeader
        title="Gun Status"
        subtitle="Gun Armed/Charging Status"
      />

      {Object.entries(gunStatusData).map(([gunKey, status]) => (
        <div key={gunKey} className="flex items-center gap-3">
          {getIcon("charging_socket", "size-8")}
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-[#AEAEAE] uppercase">
              {splitAlphaNumeric(gunKey)}
            </span>
            <span
              className={cn(
                "text-sm uppercase",
                status ? "text-[#46EB4F]" : "text-[#F0F0F0]"
              )}
            >
              {status ? "Charging" : "Armed"}
            </span>
          </div>
        </div>
      ))}
    </PanelCard>
  );
}
