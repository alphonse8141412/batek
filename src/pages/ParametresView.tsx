import { User, Thermometer, Box, Settings } from "lucide-react";

const entities = [
  { icon: <User size={14} />, name: "Moussa Diop", type: "Administrateur", typeCol: "", date: "12 Jan 2026", zone: "", status: "ACTIF", statusType: "actif" },
  { icon: <Thermometer size={14} />, name: "Capteur Zone 3 A", type: "Température/Humidité", typeCol: "", date: "05 Fév 2026", zone: "1A", status: "ACTIF", statusType: "actif" },
  { icon: <Box size={14} />, name: "Chambre Froide B", type: "Stockage Oignons", typeCol: "", date: "20 Feb 2026", zone: "1AB", status: "MAINTENANCE", statusType: "maintenance" },
];

const alertSettings = [
  { label: "Email pour critiques", on: true },
  { label: "SMS pour urgences", on: true },
  { label: "Notifications", on: true },
  { label: "Seuils personnalisés", on: true },
  { label: "Mode personnalisés", on: true },
];

const energySettings = [
  { label: "Capacité Panneaux (kWc)", value: "Nombre total" },
  { label: "Seuil Batterie", value: "Contresigne" },
  { label: "Seuil Batterie (%)", value: "" },
  { label: "Mode Prioritaire", value: "Stockage / Réseau" },
];

export const ParametresView = () => {
  return (
    <div className="p-3 space-y-3">
      <div>
        <h2 className="text-base font-bold text-foreground">Gestion des Paramètres</h2>
        <p className="text-[10px] text-muted-foreground">Gestion des Zones de fonctionnement</p>
      </div>

      {/* Entity table */}
      <div className="bg-card rounded-lg overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 px-3 py-2 border-b border-border text-[9px] text-muted-foreground">
          <span>Entité</span>
          <span>Statut</span>
          <span></span>
        </div>
        {entities.map((e, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-2 items-center px-3 py-3 border-b border-border last:border-b-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-muted-foreground">{e.icon}</span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground truncate">{e.name}</p>
                <p className="text-[9px] text-muted-foreground truncate">{e.type}</p>
              </div>
            </div>
            <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full badge-${e.statusType}`}>{e.status}</span>
            <Settings size={14} className="text-muted-foreground" />
          </div>
        ))}
      </div>

      {/* Alert settings */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground mb-3">Paramètres Alertes</h3>
        <div className="space-y-3">
          {alertSettings.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-[11px] text-primary">{s.label}</span>
              <div className={`w-10 h-5 rounded-full relative cursor-pointer ${s.on ? "bg-primary" : "bg-muted"}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-card shadow transition-transform ${s.on ? "right-0.5" : "left-0.5"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Energy settings */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground mb-3">Paramètres Énergie Solaire</h3>
        <div className="space-y-3">
          {energySettings.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-2">
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
              <input
                type="text"
                placeholder={s.value}
                className="w-28 text-[11px] px-2 py-1.5 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground"
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
