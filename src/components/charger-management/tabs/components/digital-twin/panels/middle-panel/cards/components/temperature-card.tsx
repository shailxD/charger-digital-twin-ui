import { PanelCard, PanelCardHeader } from "../card-layout";
import { temperatureData } from "../../../data";
import type { TemperatureData } from "../../../types";
import React from "react";
import { ShadowSeparator } from "@/components/ui/separator";
import { getThermostatIcon } from "@/assets/icons";

const temperatureGroups: Array<{
  items: Array<{ key: keyof TemperatureData; label: string }>;
}> = [
  {
    items: [
      { key: "external", label: "External" },
      { key: "humidity1", label: "Humidity" },
    ],
  },
  {
    items: [
      { key: "charger", label: "Charger" },
      { key: "humidity2", label: "Humidity" },
    ],
  },
  {
    items: [
      { key: "gun1", label: "Gun 1" },
      { key: "gun2", label: "Gun 2" },
    ],
  },
];

export function TemperatureCard({ className }: { className?: string }) {
  return (
    <PanelCard className={className}>
      <PanelCardHeader
        title="Temperature"
        subtitle="Temperature and Humidity in and around Charger"
      />
      <div className="flex items-center justify-between">
        {temperatureGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <div className="flex flex-col gap-3">
              {group.items.map((item) => (
                <div key={item.key} className="flex gap-1">
                  {getThermostatIcon(item.key)}
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase dark:text-[#AEAEAE]">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-base">
                        {temperatureData[item.key]}
                        {item.key.toString().includes("humidity") ? "" : "°"}
                      </span>
                      <span className="text-[11px] font-light text-[#AEAEAE]">
                        {item.key.toString().includes("humidity") ? "%" : "C"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {groupIndex < temperatureGroups.length - 1 && <ShadowSeparator />}
          </React.Fragment>
        ))}
      </div>
    </PanelCard>
  );
}
