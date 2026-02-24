import { Thermometer, Droplets, AlertTriangle, Zap } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";

const tempData = [
  { time: "00h", oignon: 3.5, patate: 2.0 },
  { time: "04h", oignon: 3.8, patate: 2.2 },
  { time: "08h", oignon: 4.5, patate: 3.0 },
  { time: "12h", oignon: 5.8, patate: 4.2 },
  { time: "16h", oignon: 5.5, patate: 4.5 },
  { time: "20h", oignon: 5.0, patate: 4.0 },
  { time: "24h", oignon: 6.5, patate: 4.8 },
];

const energyData = [
  { day: "Lun", production: 40, consommation: 25 },
  { day: "Mar", production: 45, consommation: 30 },
  { day: "Mer", production: 50, consommation: 35 },
  { day: "Jeu", production: 55, consommation: 30 },
  { day: "Ven", production: 60, consommation: 40 },
  { day: "Sam", production: 65, consommation: 45 },
  { day: "Dim", production: 55, consommation: 35 },
];

export const AnalytiqueView = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <KpiCard icon={<Thermometer size={16} />} value="2.6" unit="°C" label="Température" status="Optimal" statusType="optimal" />
        <KpiCard icon={<Droplets size={16} />} value="58" unit="%" label="Humidité" status="Actif" statusType="actif" />
        <KpiCard icon={<AlertTriangle size={16} />} value="Moy" unit="" label="Risque Détérioration" status="Optimal" statusType="optimal" />
        <KpiCard icon={<Zap size={16} />} value="$2.7" unit="kW" label="Production Énergie" status="Optimal" statusType="optimal" />
      </div>

      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground">Évolution Température (3 jours)</h3>
        <p className="text-[10px] text-muted-foreground mb-2">Entrepôt Oignon · Entrepôt Patate</p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={tempData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,10%,90%)" />
              <XAxis dataKey="time" tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" />
              <YAxis tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" unit="°C" />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Area type="monotone" dataKey="oignon" stroke="hsl(152,69%,40%)" fill="hsl(152,69%,40%)" fillOpacity={0.15} strokeWidth={2} name="Oignon" />
              <Area type="monotone" dataKey="patate" stroke="hsl(30,95%,55%)" fill="hsl(30,95%,55%)" fillOpacity={0.1} strokeWidth={2} name="Patate" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground">Production & Consommation Énergie</h3>
        <p className="text-[10px] text-muted-foreground mb-2">Recommandations IA</p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,10%,90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" />
              <YAxis tick={{ fontSize: 9 }} stroke="hsl(160,8%,50%)" unit=" kW" />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Bar dataKey="production" fill="hsl(152,69%,40%)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="consommation" fill="hsl(30,95%,55%)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Alerts summary */}
      <div className="space-y-2">
        <div className="alert-critique-card rounded-lg p-3 flex items-center justify-between">
          <div>
            <p className="text-destructive text-xs font-semibold">Alertes Critiques</p>
            <p className="text-[10px] text-muted-foreground">Tour froide n°17 · Temp. hors limite Zone 3</p>
          </div>
          <button className="px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-[9px]">Résoudre</button>
        </div>
        <div className="alert-vigilance-card rounded-lg p-3 flex items-center justify-between">
          <div>
            <p className="text-accent text-xs font-semibold">Alertes Vigilance</p>
            <p className="text-[10px] text-muted-foreground">Haute humidité hors limite Zone 3</p>
          </div>
          <button className="px-2 py-1 rounded-full bg-accent text-accent-foreground text-[9px]">Résoudre</button>
        </div>
      </div>

      {/* Storage */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Statut Zones de Stockage</h3>
        {[
          { name: "Ch. Froide Oignons", status: "Actif", temp: "4.7°C", hum: "90%", thresh: "80%", cap: 61 },
          { name: "Ch. Froide P. de Terre", status: "Vigilance", temp: "4.6°C", hum: "76%", thresh: "81%", cap: 82 },
        ].map((zone) => (
          <div key={zone.name} className="bg-card rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-foreground">{zone.name}</span>
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full badge-${zone.status === "Actif" ? "actif" : "vigilance"}`}>{zone.status}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center mb-2">
              <div><p className="text-sm font-bold text-foreground">{zone.temp}</p><p className="text-[9px] text-muted-foreground">Tm</p></div>
              <div><p className="text-sm font-bold text-foreground">{zone.hum}</p><p className="text-[9px] text-muted-foreground">Humidité</p></div>
              <div><p className="text-sm font-bold text-foreground">{zone.thresh}</p><p className="text-[9px] text-muted-foreground">Threshold</p></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-muted-foreground">Capacité</span>
              <div className="capacity-bar flex-1">
                <div className={`capacity-bar-fill ${zone.cap > 75 ? "warning" : ""}`} style={{ width: `${zone.cap}%` }} />
              </div>
              <span className="text-[9px] text-muted-foreground">{zone.cap}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
