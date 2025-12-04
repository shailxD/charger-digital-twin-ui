import { getMCPPowerLevelIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { MCB } from "../../../data";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { PanelCard, PanelCardHeader } from "../card-layout";

export function MCBCard({ className }: { className?: string }) {
  const statusColor = MCB.status ? "text-[#87C445]" : "text-gray-500";

  return (
    <PanelCard className={className}>
      <div className="flex h-full justify-between gap-1">
        <div className="flex flex-col justify-between gap-2">
          <PanelCardHeader title="MCB" hasToggle statusColor={statusColor} />
          <Table>
            <TableBody>
              {Object.entries(MCB.data).map(([key, value]) => (
                <TableRow key={key} className="border-b-0 hover:bg-transparent">
                  <TableCell className="py-1 pl-0 text-xs text-muted-foreground">
                    {key}
                  </TableCell>
                  <TableCell className="py-1 pr-0 text-right text-xs">
                    {value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center gap-2">
          {Object.entries(MCB.power).map(([key, value]) => (
            <PowerLevelCard key={key} value={value} label={key} />
          ))}
        </div>
      </div>
    </PanelCard>
  );
}

export const PowerLevelCard = ({
  value,
  label,
}: {
  value: { voltage: number; amp: number };
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <p className="text-sm">{label}</p>
      {getMCPPowerLevelIcon(label)}
      <div className={cn("flex flex-col items-center", "[&>p]:text-[11px]")}>
        <p>{value.voltage} V</p>
        <p>{value.amp} A</p>
      </div>
    </div>
  );
};
