import { cn } from "@/lib/utils";
import {
  DiagnoseChargerCard,
  DoorStatusCard,
  EmergencyStopCard,
  GunStatusCard,
  MCBCard,
  TemperatureCard,
} from "./cards";

export function MiddlePanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        "grid grid-cols-6 grid-rows-[0.8fr_auto_1fr] gap-3"
      )}
    >
      <DiagnoseChargerCard className="col-span-2" />
      <DoorStatusCard className="col-span-4" />
      <MCBCard className="col-span-3" />
      <EmergencyStopCard className="col-span-3" />
      <TemperatureCard className="col-span-4" />
      <GunStatusCard className="col-span-2" />
    </div>
  );
}
