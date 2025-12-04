import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Tab } from "./types";
import { getIcon } from "@/assets/icons";
import { DigitalTwinTab } from "./components";

const tabs: Array<Tab> = [
  {
    name: "Info",
    icon: "info",
    value: "info",
    content: <div></div>,
  },
  {
    name: "Digital Twin",
    icon: "ev_station",
    value: "digital-twin",
    content: <DigitalTwinTab />,
  },
  {
    name: "Fault",
    icon: "notification_important_outline",
    value: "fault",
    content: <div></div>,
  },
  {
    name: "Alarm",
    icon: "info",
    value: "alarm",
    content: <div></div>,
  },
  {
    name: "Configuration",
    icon: "configuration",
    value: "configuration",
    content: <div></div>,
  },
  {
    name: "Maintenance",
    icon: "settings_alert",
    value: "maintenance",
    content: <div></div>,
  },
];

export function ChargerManagementTabs() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Tabs
        defaultValue="digital-twin"
        className="flex min-h-0 flex-1 flex-col gap-4"
      >
        <TabsList className="w-full shrink-0">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {getIcon(tab.icon, "size-4.5")}
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="min-h-0 flex-1 overflow-y-auto"
            style={{
              overscrollBehavior: "contain",
            }}
          >
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
