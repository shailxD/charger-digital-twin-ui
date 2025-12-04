import { getIcon } from "@/assets/icons";
import { ShadowSeparator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface MetricDisplayProps {
  icon: string;
  value: number;
  unit: string;
}

function MetricDisplay({ icon, value, unit }: MetricDisplayProps) {
  return (
    <div className="flex items-center gap-0.5">
      {getIcon(icon, "size-4 text-yellow-400")}
      <div className="flex items-center gap-0.5">
        <p className="text-xs">
          {value}
          {unit === "C" && "°"}
        </p>
        <p className="text-[10px] text-[#AEAEAE]">{unit}</p>
      </div>
    </div>
  );
}

interface WeatherDisplayProps {
  type: "sunny" | "cloudy" | "rainy" | "stormy" | "snowy";
  temp: number;
  humidity: number;
}

export const WeatherDisplay = ({
  type,
  temp,
  humidity,
}: WeatherDisplayProps) => {
  return (
    <div
      className={cn(
        "w-fit rounded-sm bg-[#141824] p-3 py-2",
        "flex flex-col items-center gap-2",
        "absolute bottom-12 left-[-36]"
      )}
    >
      <div className="flex flex-col items-center gap-0.5">
        {getIcon(type, "size-4.5")}
        <p className="text-xs capitalize">{type}</p>
      </div>

      <ShadowSeparator orientation="horizontal" side="top" />

      <div className="flex flex-col items-center gap-2">
        <MetricDisplay icon="device_thermostat" value={temp} unit="C" />
        <MetricDisplay icon="device_humidity" value={humidity} unit="%" />
      </div>
    </div>
  );
};
