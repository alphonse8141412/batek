import { Sun, Plus } from "lucide-react";

interface AppHeaderProps {
  onEnergie?: () => void;
  onAjouter?: () => void;
}

export const AppHeader = ({ onEnergie, onAjouter }: AppHeaderProps) => {
  return (
    <div className="bg-card px-4 py-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-bold">BK</span>
        </div>
        <span className="font-bold text-foreground text-sm">BATEK</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-bold">MO</div>
          <div>
            <p className="text-xs font-semibold text-foreground">Ferme Diallo</p>
            <p className="text-[10px] text-muted-foreground">Toussart 2012 2V22</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onEnergie}
            className="flex items-center gap-1 px-2 py-1 rounded-full border border-border text-[10px] text-foreground"
          >
            <Sun size={12} className="text-accent" />
            Énergie Solaire
          </button>
          <button
            onClick={onAjouter}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-medium"
          >
            <Plus size={12} />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};
