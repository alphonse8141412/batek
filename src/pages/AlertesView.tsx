import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const alertBarData = [
  { day: "0", val: 3 }, { day: "20", val: 2 }, { day: "30", val: 1 },
  { day: "110", val: 5 }, { day: "130", val: 4 },
];

const critiques = [
  { text: "Défaillance du groupe Frigid – Zone – 880m 3°C min", time: "il y a 2h · SMS envoyé" },
  { text: "Humidité aux limites → 75%", time: "il y a 4h · SMS envoyé" },
  { text: "Éthylène en hausse – Bruit: Détresse", time: "il y a 6h · SMS envoyé" },
];

export const AlertesView = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-foreground">Journal d'Alertes</h2>
          <p className="text-[10px] text-muted-foreground">Saison • Ferme Diallo</p>
        </div>
      </div>

      {/* Summary KPIs */}
      <div className="flex gap-2">
        <div className="bg-card rounded-lg p-2 flex-1 text-center">
          <p className="text-[9px] text-muted-foreground">Temp. moy.</p>
          <p className="text-sm font-bold text-foreground">3,6 °C</p>
        </div>
        <div className="bg-card rounded-lg p-2 flex-1 text-center">
          <p className="text-[9px] text-muted-foreground">Humidité moy.</p>
          <p className="text-sm font-bold text-foreground">80 %</p>
        </div>
        <div className="bg-card rounded-lg p-2 flex-1 text-center">
          <p className="text-[9px] text-muted-foreground">Stocks totaux</p>
          <p className="text-sm font-bold text-foreground">5 800 kg</p>
        </div>
      </div>

      {/* Sensor cards */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Température", val: "1.2 °C", status: "Critique", type: "critique" },
          { label: "Humidité", val: "47 %", status: "Bon", type: "actif" },
          { label: "CO₂", val: "635 ppm", status: "Bon", type: "actif" },
          { label: "Nitrate mg.", val: "251 ppm", status: "Sensible", type: "vigilance" },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-muted-foreground">{s.label}</span>
              <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full badge-${s.type}`}>{s.status}</span>
            </div>
            <p className="text-lg font-bold text-foreground">{s.val}</p>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 items-center">
        <span className="text-[10px] text-muted-foreground">Filtrer</span>
        <button className="px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-medium">Critiques</button>
        <button className="px-2 py-1 rounded-full border border-accent text-accent text-[10px] font-medium">Ouvertes</button>
        <button className="px-2 py-1 rounded-full border border-border text-muted-foreground text-[10px]">Fermetures</button>
      </div>

      {/* Critical alerts */}
      <div className="alert-critique-card rounded-lg p-3 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-destructive text-xs font-semibold">Alertes Critiques</p>
          <button className="px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-[9px]">Résoudre tout</button>
        </div>
        {critiques.map((a, i) => (
          <div key={i} className="bg-destructive/5 rounded-md p-2">
            <p className="text-destructive text-[10px] font-medium">{a.text}</p>
            <p className="text-[9px] text-muted-foreground">{a.time}</p>
          </div>
        ))}
      </div>

      {/* Vigilance */}
      <div className="grid grid-cols-2 gap-2">
        {[1, 2].map((i) => (
          <div key={i} className="alert-vigilance-card rounded-lg p-3">
            <p className="text-accent text-[10px] font-semibold">Alertes Vigilance</p>
            <p className="text-[9px] text-muted-foreground">Zone 3 · Température hors limite</p>
          </div>
        ))}
      </div>

      {/* Recent alerts */}
      <div className="bg-card rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold text-foreground">Alertes Récentes</h3>
          <span className="bg-primary text-primary-foreground text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
        </div>
        <div className="space-y-2">
          <div className="border-l-2 border-accent pl-2">
            <p className="text-accent text-[10px] font-medium">Humidité Pdte Terre à 88% – Zone3</p>
            <p className="text-[9px] text-muted-foreground">il y a 6h</p>
          </div>
          <div className="border-l-2 border-primary pl-2">
            <p className="text-primary text-[10px] font-medium">Ventilation automatique Zone Oignons</p>
            <p className="text-[9px] text-muted-foreground">il y a 8h</p>
          </div>
        </div>
      </div>

      {/* Alert history chart */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-xs font-semibold text-foreground mb-1">Alerte D'alertes</h3>
        <p className="text-[9px] text-muted-foreground mb-2">Alertes récentes (7 jours)</p>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={alertBarData}>
              <XAxis dataKey="day" tick={{ fontSize: 8 }} stroke="hsl(160,8%,50%)" />
              <YAxis tick={{ fontSize: 8 }} stroke="hsl(160,8%,50%)" />
              <Tooltip contentStyle={{ fontSize: 10 }} />
              <Bar dataKey="val" fill="hsl(152,69%,40%)" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
