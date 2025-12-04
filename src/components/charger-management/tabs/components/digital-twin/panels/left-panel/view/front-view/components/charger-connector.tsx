import { getChargerIcon, getIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface ChargerConnectorProps {
  side: "leftside" | "rightside";
  label: string;
  charging: boolean;
  temperature: number;
}

export function ChargerConnector({
  side,
  label,
  charging,
  temperature,
}: ChargerConnectorProps) {
  const isLeft = side === "leftside";

  const tempColor = (temp: number) => {
    if (temp < 30) return "text-[#F0F0F0]";
    if (temp < 40) return "text-[#FEC932]";
    return "text-[#EF4444]";
  };

  return (
    <div
      className={cn(
        "absolute top-1/2 -translate-y-[76%]",
        isLeft ? "left-2 -translate-x-1/2" : "right-2 translate-x-1/2"
      )}
    >
      <div className="relative">
        <span
          className={cn(
            "absolute bottom-full mb-1 -translate-x-1/2 text-sm text-[#EFEFEF]",
            isLeft ? "left-[45%]" : "left-[55%]"
          )}
        >
          {label}
        </span>
        {getChargerIcon(side, charging, "h-28 w-auto")}
        <div
          className={cn(
            "flex items-center gap-1",
            "absolute bottom-0 left-3 translate-y-[-50%]",
            isLeft ? "-translate-x-[40%]" : "-translate-x-[-60%]",
            tempColor(temperature)
          )}
        >
          {getIcon("device_thermostat", "size-4")}
          <div className="flex items-center gap-0.5">
            <p className="text-xs">{temperature}°</p>
            <p className="text-[10px] text-[#AEAEAE]">C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
