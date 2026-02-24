import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { DashboardView } from "./DashboardView";
import { StockageView } from "./StockageView";
import { AlertesView } from "./AlertesView";
import { AnalytiqueView } from "./AnalytiqueView";
import { ParametresView } from "./ParametresView";
import { EnergieSolaireView } from "./EnergieSolaireView";
import { AjouterChambreView } from "./AjouterChambreView";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [subView, setSubView] = useState<string | null>(null);

  const renderView = () => {
    if (subView === "energie") return <EnergieSolaireView onBack={() => setSubView(null)} />;
    if (subView === "ajouter") return <AjouterChambreView onBack={() => setSubView(null)} />;

    switch (activeTab) {
      case "dashboard": return <DashboardView />;
      case "stockage": return <StockageView />;
      case "alertes": return <AlertesView />;
      case "analytique": return <AnalytiqueView />;
      case "parametres": return <ParametresView />;
      default: return <DashboardView />;
    }
  };

  const handleTabChange = (tab: string) => {
    setSubView(null);
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!subView && (
        <AppHeader
          onEnergie={() => setSubView("energie")}
          onAjouter={() => setSubView("ajouter")}
        />
      )}
      <main className="flex-1 overflow-y-auto pb-20">
        {renderView()}
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
};

export default Index;
