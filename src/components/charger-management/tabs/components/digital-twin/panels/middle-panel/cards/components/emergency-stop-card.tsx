import { getIcon } from "@/assets/icons";
import { PanelCard, PanelCardHeader } from "../card-layout";

export function EmergencyStopCard({ className }: { className?: string }) {
  return (
    <PanelCard className={className}>
      <PanelCardHeader
        title="Emergency Stop"
        subtitle="Emergency Stop Status"
      />

      <div className="flex flex-col items-end gap-0.5">
        <div className="flex items-center gap-2">
          {getIcon("toggle", "size-3")}
          <h3 className="text-[11px] text-[#AEAEAE] uppercase">Stop button</h3>
        </div>
        <p className="text-sm">Not Engaged</p>
      </div>
    </PanelCard>
  );
}
