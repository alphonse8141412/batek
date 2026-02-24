import { ArrowLeft, Thermometer, Droplets, Box } from "lucide-react";
import { useState } from "react";

interface AjouterChambreViewProps {
  onBack: () => void;
}

export const AjouterChambreView = ({ onBack }: AjouterChambreViewProps) => {
  const [size, setSize] = useState("20");
  const [product, setProduct] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [humidity, setHumidity] = useState("");
  const [zone, setZone] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={16} className="text-foreground" />
        </button>
        <div>
          <h2 className="text-base font-bold text-foreground">Ajouter Chambre Froide</h2>
          <p className="text-[10px] text-muted-foreground">Configurer une nouvelle chambre de stockage</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-card rounded-lg p-4 space-y-4">
        <div>
          <label className="text-xs font-medium text-foreground mb-1 block">Nom de la chambre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Chambre Froide C"
            className="w-full text-xs px-3 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-foreground mb-2 block">Taille du conteneur</label>
          <div className="flex gap-2">
            {["20", "40"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  size === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <Box size={14} className="inline mr-1" />
                {s} pieds
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-foreground mb-1 block">Produit stocké</label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full text-xs px-3 py-2.5 rounded-lg border border-border bg-background text-foreground"
          >
            <option value="">Sélectionner un produit</option>
            <option value="oignons">Oignons</option>
            <option value="patates">Pommes de terre</option>
            <option value="carottes">Carottes</option>
            <option value="tomates">Tomates</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-foreground mb-1 block">Zone</label>
          <input
            type="text"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            placeholder="Ex: Zone 1A"
            className="w-full text-xs px-3 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-foreground mb-1 flex items-center gap-1">
              <Thermometer size={12} /> Temp. Min (°C)
            </label>
            <input
              type="number"
              value={tempMin}
              onChange={(e) => setTempMin(e.target.value)}
              placeholder="0"
              className="w-full text-xs px-3 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 flex items-center gap-1">
              <Thermometer size={12} /> Temp. Max (°C)
            </label>
            <input
              type="number"
              value={tempMax}
              onChange={(e) => setTempMax(e.target.value)}
              placeholder="8"
              className="w-full text-xs px-3 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-foreground mb-1 flex items-center gap-1">
            <Droplets size={12} /> Humidité cible (%)
          </label>
          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            placeholder="75"
            className="w-full text-xs px-3 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Summary preview */}
      <div className="bg-card rounded-lg p-3">
        <h3 className="text-sm font-semibold text-foreground mb-2">Résumé</h3>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Nom</span>
            <span className="font-medium text-foreground">{name || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Conteneur</span>
            <span className="font-medium text-foreground">{size} pieds</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Produit</span>
            <span className="font-medium text-foreground">{product || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Zone</span>
            <span className="font-medium text-foreground">{zone || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Température</span>
            <span className="font-medium text-foreground">{tempMin || "—"}°C → {tempMax || "—"}°C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Humidité</span>
            <span className="font-medium text-foreground">{humidity || "—"}%</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button onClick={onBack} className="flex-1 py-3 rounded-lg border border-border text-xs font-medium text-foreground">
          Annuler
        </button>
        <button className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
          Enregistrer
        </button>
      </div>
    </div>
  );
};
