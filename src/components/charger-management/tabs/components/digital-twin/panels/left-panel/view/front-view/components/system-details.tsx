import { cn } from "@/lib/utils";
import { fontDmSans } from "@/lib/fonts";
import type {
  ChargerConnectionItem,
  SystemStatusItem,
  TempHumidityData,
} from "./system-details/types";
import {
  ChargerConnection,
  SystemStatus,
  ChargerStructure,
  KMFuseStructure,
  EmergencyStopStructure,
  TempHumidityDisplay,
} from "./system-details/index";

const chargerConnections: ChargerConnectionItem[] = [
  { label: "sim", status: "disconnected" },
  { label: "lan", status: "disconnected" },
  { label: "wifi", status: "connected" },
];

const systemStatusItems: SystemStatusItem[][] = [
  [
    { label: "CCU1", status: "offline" },
    { label: "TCU", status: "fine" },
    { label: "CCU2", status: "warning" },
  ],
  [
    { label: "PLC 1", status: "offline" },
    { label: "UP1", status: "fine", icon: true },
    { label: "UP1", status: "fine", icon: true },
    { label: "PLC 2", status: "error" },
  ],
];

const tempHumidityData: TempHumidityData = {
  temperature1: 45,
  humidity: 30,
  temperature2: 45,
};

export function SystemDetails() {
  return (
    <div
      className={cn(
        fontDmSans.className,
        "rounded-md bg-[#0F111D] p-2",
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "h-[80%] w-[58%]",
        "flex flex-col gap-2",
        "[&>div]:rounded-sm [&>div]:bg-[#141824] [&>div]:p-1.5"
      )}
    >
      <ChargerConnection connections={chargerConnections} />
      <SystemStatus items={systemStatusItems} />
      <ChargerStructure />
      <KMFuseStructure />
      <EmergencyStopStructure />
      <TempHumidityDisplay data={tempHumidityData} />
    </div>
  );
}
