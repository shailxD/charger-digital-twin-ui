import type {
  DoorStatusCollection,
  GunStatusData,
  MCBData,
  Notification,
  TemperatureData,
} from "./types";

export const notifications: Array<Notification> = [
  {
    type: "warning",
    statusID: "000004",
    message: "OverCurrentFailure",
    timestamp: "2025-06-13T09:04:34",
  },
  {
    type: "error",
    statusID: "000013",
    message: "The EVSE has no internet connectivity",
    timestamp: "2025-06-13T08:09:13",
  },
  {
    type: "warning",
    statusID: "000015",
    message: "PowerLoss",
    timestamp: "2025-06-13T08:04:11",
  },
  {
    type: "warning",
    statusID: "001004",
    message: "REMOTE_STOP",
    timestamp: "2025-06-13T07:32:46",
  },
  {
    type: "error",
    statusID: "000015",
    message: "Power Loss",
    timestamp: "2025-06-12T22:04:34",
  },
  {
    type: "warning",
    statusID: "001003",
    message: "NFC_STOP",
    timestamp: "2025-06-12T22:01:42",
  },
  {
    type: "warning",
    statusID: "002000",
    message: "UNREGISTERED_THE_CARD",
    timestamp: "2025-06-12T20:48:14",
  },
  {
    type: "warning",
    statusID: "001000",
    message: "UNKNOW_STOP",
    timestamp: "2025-06-12T20:12:52",
  },
  {
    type: "warning",
    statusID: "001004",
    message: "REMOTE STOP",
    timestamp: "2025-06-12T19:39:38",
  },
];

export const doorStatus: DoorStatusCollection = {
  status: true,
  doors: [
    {
      label: "Front Door",
      status: false,
    },
    {
      label: "Left Door",
      status: false,
    },
    { label: "Right Door", status: true },
  ],
};

export const MCB: MCBData = {
  status: true,
  data: {
    kWh: "62 kWh",
    Hz: "60 Hz",
    PF: "0.8 PF",
    Earthing: "Earthing",
  },
  power: {
    L1: {
      voltage: 1000,
      amp: 60,
    },
    L2: {
      voltage: 1000,
      amp: 60,
    },
    L3: {
      voltage: 1000,
      amp: 60,
    },
  },
};

export const temperatureData: TemperatureData = {
  external: "37",
  charger: "42",
  gun1: "29",
  gun2: "39",
  humidity1: "30",
  humidity2: "34",
};

export const gunStatusData: GunStatusData = {
  gun1: false,
  gun2: true,
};
