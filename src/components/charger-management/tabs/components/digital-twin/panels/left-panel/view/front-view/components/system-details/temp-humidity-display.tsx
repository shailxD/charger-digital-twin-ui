import { getIcon } from "@/assets/icons";
import { TempHumidityData } from "./types";

interface MetricDisplayProps {
  icon: string;
  value: number;
  unit: string;
  iconColor?: string;
}

const tempColor = (temp: number) => {
  if (temp < 30) return "text-[#F0F0F0]";
  if (temp < 40) return "text-[#FEC932]";
  return "text-[#EF4444]";
};

function MetricDisplay({ icon, value, unit, iconColor }: MetricDisplayProps) {
  return (
    <div className="flex items-center gap-0.5">
      <span className={iconColor}>{getIcon(icon, "size-3")}</span>
      <div className="flex items-center gap-0.5">
        <p className="text-[9px]">
          {value}
          {unit === "C" && "°"}
        </p>
        <p className="text-[8px] text-[#AEAEAE]">{unit}</p>
      </div>
    </div>
  );
}

export function TempHumidityDisplay({ data }: { data: TempHumidityData }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <MetricDisplay
        icon="device_thermostat"
        value={data.temperature1}
        unit="C"
        iconColor={tempColor(data.temperature1)}
      />
      <MetricDisplay icon="device_humidity" value={data.humidity} unit="%" />
      <MetricDisplay
        icon="device_thermostat"
        value={data.temperature2}
        unit="C"
        iconColor={tempColor(data.temperature2)}
      />
    </div>
  );
}
