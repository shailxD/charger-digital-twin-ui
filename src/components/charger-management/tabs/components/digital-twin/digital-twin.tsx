import { LeftPanel, MiddlePanel, RightPanel } from "./panels";

export function DigitalTwinTab() {
  return (
    <div className="grid h-full min-h-0 grid-cols-9 gap-3">
      <LeftPanel className="col-span-3" />
      <MiddlePanel className="col-span-4" />
      <RightPanel className="col-span-2" />
    </div>
  );
}
