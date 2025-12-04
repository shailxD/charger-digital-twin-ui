import { getIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";

export function ChargerInfo() {
  return (
    <div className="flex items-center justify-between rounded-t-3xl bg-[#151727]/50 px-8 py-3">
      <div className="flex items-center gap-4">
        {getIcon("arrow_left", "size-5")}
        <div className="flex items-center gap-2">
          {getIcon("ev_station", "size-7")}
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-[#F0F0F0]">ZYNIND001</h3>
            <p className="text-xs text-[#ADB7D2]">80 kW-Dual Gun</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" className="text-[#ADB7D2]">
          {getIcon("plus", "size-4")}
          Add Charger
        </Button>
        <Button variant="outline" size="icon" className="text-[#ADB7D2]">
          {getIcon("arrow_down", "size-4")}
        </Button>
      </div>
    </div>
  );
}
