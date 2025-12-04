import {
  ChargerInfo,
  ChargerManagementHeader,
  ChargerManagementTabs,
} from "@/components/charger-management";

export default function ChargerManagementPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6">
      <ChargerManagementHeader />
      <div className="flex min-h-0 flex-1 flex-col gap-3">
        <ChargerInfo />
        <ChargerManagementTabs />
      </div>
    </div>
  );
}
