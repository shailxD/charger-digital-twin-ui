export interface ChargerConnectionItem {
  label: string;
  status: "connected" | "disconnected";
}

export type SystemStatusType = "fine" | "warning" | "error" | "offline";

export interface SystemStatusItem {
  label: string;
  status: SystemStatusType;
  icon?: boolean;
}

export interface TempHumidityData {
  temperature1: number;
  humidity: number;
  temperature2: number;
}
