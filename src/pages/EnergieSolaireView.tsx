import { ArrowLeft, Sun, Battery, Zap, TrendingUp } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const weeklyData = [
  { day: "Lun", production: 40, consommation: 25 },
  { day: "Mar", production: 45, consommation: 30 },
  { day: "Mer", production: 50, consommation: 35 },
  { day: "Jeu", production: 55, consommation: 30 },
  { day: "Ven", production: 60, consommation: 40 },
  { day: "Sam", production: 65, consommation: 45 },
  { day: "Dim", production: 55, consommation: 35 },
];

const dailyData = [
  { hour: "06h", kw: 0.2 },
  { hour: "08h", kw: 1.5 },
  { hour: "10h", kw: 3.8 },
  { hour: "12h", kw: 5.2 },
  { hour: "14h", kw: 4.8 },
  { hour: "16h", kw: 3.2 },
  { hour: "18h", kw: 1.0 },
  { hour: "20h", kw: 0.1 },
];

interface EnergieSolaireViewProps {
  onBack: () => void;
}

export const EnergieSolaireView = ({ onBack }: EnergieSolaireViewProps) => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={16} className="text-foreground" />
        </button>
        <div>
          <h2 className="text-base font-bold text-foreground">Énergie Solaire</h2>
          <p className="text-[10px] text-muted-foreground">Suivi de la production et consommation</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-2">
        <KpiCard icon={<Sun size={16} />} value="5.2" unit="kW" label="Production actuelle" status="Optimal" statusType="optimal" />
        <KpiCard icon={<Battery size={16} />} value="78" unit="%" label="Batterie" status="Optimal" statusType="optimal" />
        <KpiCard icon={<Zap size={16} />} value="3.1" unit="kW" label="Consommation" status="Actif" statusType="actif" />
        <KpiCard icon={<TrendingUp size={16} />} value="+12" unit="%" label="Rendement" status="Optimal" statusType="optimal" />
      </div>

      {/* Daily production curve */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground">Production aujourd'hui</h3>
        <p className="text-[10px] text-muted-foreground mb-2">Courbe de production solaire (kW)</p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,10%,90%)" />
              <XAxis dataKey="hour" tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" />
              <YAxis tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" unit=" kW" />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Area type="monotone" dataKey="kw" stroke="hsl(40,95%,55%)" fill="hsl(40,95%,55%)" fillOpacity={0.2} strokeWidth={2} name="Production" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly bar chart */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground">Production & Consommation (semaine)</h3>
        <p className="text-[10px] text-muted-foreground mb-2">En kilowatts</p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,10%,90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" />
              <YAxis tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" unit=" kW" />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Bar dataKey="production" fill="hsl(152,69%,40%)" radius={[3, 3, 0, 0]} name="Production" />
              <Bar dataKey="consommation" fill="hsl(30,95%,55%)" radius={[3, 3, 0, 0]} name="Consommation" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-1">
          <span className="flex items-center gap-1 text-[10px] text-primary">■ Production</span>
          <span className="flex items-center gap-1 text-[10px] text-accent">■ Consommation</span>
        </div>
      </div>

      {/* Battery status */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground mb-3">État des Batteries</h3>
        <div className="space-y-3">
          {[
            { name: "Batterie A", level: 78, status: "Charge" },
            { name: "Batterie B", level: 92, status: "Pleine" },
            { name: "Batterie C", level: 45, status: "Décharge" },
          ].map((b) => (
            <div key={b.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{b.name}</span>
                <span className="text-[10px] text-muted-foreground">{b.status} · {b.level}%</span>
              </div>
              <div className="capacity-bar">
                <div
                  className={`capacity-bar-fill ${b.level < 50 ? "warning" : ""}`}
                  style={{ width: `${b.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solar panel info */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground mb-2">Panneaux Solaires</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-xl font-bold text-foreground">24</p>
            <p className="text-[9px] text-muted-foreground">Panneaux installés</p>
          </div>
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-xl font-bold text-foreground">9.6</p>
            <p className="text-[9px] text-muted-foreground">kWc Capacité</p>
          </div>
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-xl font-bold text-primary">98%</p>
            <p className="text-[9px] text-muted-foreground">Rendement moyen</p>
          </div>
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-xl font-bold text-foreground">0</p>
            <p className="text-[9px] text-muted-foreground">Pannes détectées</p>
          </div>
        </div>
      </div>
    </div>
  );
};
