import { Wifi, AlertTriangle } from "lucide-react";

const containers = [
  { size: "20 pieds", name: "Oignons", temp: "1,7°C", hum: "75%", status: "Connecté", statusOk: true },
  { size: "40 pieds", name: "P. de Terre", temp: "5,2°C", hum: "88%", status: "Connecté", statusOk: true },
  { size: "40 pieds", name: "Oignons", temp: "1,8°C", hum: "74%", status: "Phase Dégivrage", statusOk: false },
  { size: "vide", name: "VOIR", temp: "", hum: "", status: "Libre", statusOk: true },
];

export const StockageView = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-foreground">Détails par Zone</h2>
        <button className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-medium">
          Ajouter Chambre
        </button>
      </div>

      {/* Container list */}
      <div className="bg-card rounded-lg divide-y divide-border">
        {containers.map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-3">
            <span className="text-[10px] font-medium bg-muted px-2 py-1 rounded text-foreground">{c.size}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground">{c.name}</p>
              {c.temp && <p className="text-[10px] text-muted-foreground">{c.temp}  {c.hum}</p>}
            </div>
            <div className={`flex items-center gap-1 text-[10px] font-medium ${c.statusOk ? "text-primary" : "text-accent"}`}>
              {c.statusOk ? <Wifi size={12} /> : <AlertTriangle size={12} />}
              {c.status}
            </div>
          </div>
        ))}
      </div>

      {/* Global Status */}
      <div className="bg-card rounded-lg p-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Vue d'Ensemble</h3>
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="50" stroke="hsl(150,10%,90%)" strokeWidth="10" fill="none" />
              <circle cx="60" cy="60" r="50" stroke="hsl(152,69%,40%)" strokeWidth="10" fill="none"
                strokeDasharray={`${65 * 3.14} ${100 * 3.14}`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-foreground">65%</span>
              <span className="text-[9px] text-muted-foreground">Occupation</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-xl font-bold text-foreground">26</p>
            <p className="text-[9px] text-muted-foreground">emplacements</p>
            <p className="text-[9px] text-muted-foreground">Capacité Totale</p>
          </div>
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-xl font-bold text-foreground">0</p>
            <p className="text-[9px] text-muted-foreground">Alertes</p>
            <p className="text-[9px] text-muted-foreground">Température</p>
          </div>
        </div>
      </div>

      {/* Inventory */}
      <div className="bg-card rounded-lg p-3">
        <p className="text-[10px] text-muted-foreground mb-1">Inventaire actuel :</p>
        <p className="text-xs text-foreground"><span className="font-bold">12</span> Conteneurs de 20 pieds</p>
        <p className="text-xs text-foreground"><span className="font-bold">5</span> Conteneurs de 40 pieds</p>
      </div>

      <div className="bg-card rounded-lg p-3">
        <p className="text-[10px] text-muted-foreground mb-1">Entrées prévues (24h) :</p>
        <p className="text-lg font-bold text-foreground">+12 tonnes</p>
        <p className="text-[10px] text-muted-foreground">Pommes de terre</p>
      </div>
    </div>
  );
};
