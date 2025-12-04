export interface Notification {
  type: "warning" | "error" | "info";
  statusID: string;
  message: string;
  timestamp: string;
}

export interface DoorStatus {
  label: string;
  status: boolean;
}

export interface DoorStatusCollection {
  status: boolean;
  doors: Array<DoorStatus>;
}

export interface MCBData {
  status: boolean;
  data: {
    kWh: string;
    Hz: string;
    PF: string;
    Earthing: string;
  };
  power: {
    L1: {
      voltage: number;
      amp: number;
    };
    L2: {
      voltage: number;
      amp: number;
    };
    L3: {
      voltage: number;
      amp: number;
    };
  };
}

export interface TemperatureData {
  external: string;
  charger: string;
  gun1: string;
  gun2: string;
  humidity1: string;
  humidity2: string;
}

export interface GunStatusData {
  [key: string]: boolean;
}
