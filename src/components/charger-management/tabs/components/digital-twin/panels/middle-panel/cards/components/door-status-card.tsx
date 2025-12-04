import React from "react";
import { getIcon } from "@/assets/icons";
import { PanelCard, PanelCardHeader } from "../card-layout";
import { cn } from "@/lib/utils";
import { doorStatus } from "../../../data";
import { DoorStatus } from "../../../types";
import { ShadowSeparator } from "@/components/ui/separator";

export function DoorStatusCard({ className }: { className?: string }) {
  const statusColor = doorStatus.status ? "text-[#87C445]" : "text-gray-500";

  return (
    <PanelCard className={className}>
      <PanelCardHeader
        title="Door Status"
        subtitle="Status of Charger Doors"
        hasToggle
        statusColor={statusColor}
      />

      <div className="flex items-center justify-between">
        {doorStatus.doors.map((door, index) => (
          <React.Fragment key={index}>
            <DoorCard door={door} />
            {index !== doorStatus.doors.length - 1 && <ShadowSeparator />}
          </React.Fragment>
        ))}
      </div>
    </PanelCard>
  );
}

const DoorCard = ({ door }: { door: DoorStatus }) => {
  const { label, status } = door;
  return (
    <div className="m-auto flex flex-col gap-1">
      <p className="text-[11px] text-[#AEAEAE] uppercase">{label}</p>
      <div
        className={cn(
          "flex items-center gap-1",
          status ? "text-[#FFC932]" : ""
        )}
      >
        {getIcon("door", "size-4")}
        <p className="text-lg">{status ? "Open" : "Closed"}</p>
      </div>
    </div>
  );
};
