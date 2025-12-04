import { Button } from "@/components/ui/button";
import { PanelCard, PanelCardHeader } from "../card-layout";

export function DiagnoseChargerCard({ className }: { className?: string }) {
  return (
    <PanelCard className={className}>
      <PanelCardHeader
        title="Diagnose Charger"
        subtitle="Scan to Start Diagnosis"
      />

      <Button variant="green" className="h-10 w-full">
        Scan
      </Button>
    </PanelCard>
  );
}
