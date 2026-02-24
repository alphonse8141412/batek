import { ReactNode } from "react";

interface KpiCardProps {
  icon: ReactNode;
  value: string;
  unit: string;
  label: string;
  status: string;
  statusType: "optimal" | "actif" | "critique" | "vigilance";
}

export const KpiCard = ({ icon, value, unit, label, status, statusType }: KpiCardProps) => {
  return (
    <div className="bg-card rounded-lg p-3 flex flex-col gap-1 min-w-0">
      <div className="flex items-center justify-between">
        <span className="text-primary">{icon}</span>
        <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full badge-${statusType}`}>
          {status}
        </span>
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="text-xl font-bold text-foreground">{value}</span>
        <span className="text-xs text-muted-foreground">{unit}</span>
      </div>
      <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  );
};
