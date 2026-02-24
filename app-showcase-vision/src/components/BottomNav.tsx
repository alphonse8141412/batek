import { LayoutGrid, Container, Bell, BarChart3, Settings } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Tableau de…", icon: LayoutGrid },
  { id: "stockage", label: "Conteneurs", icon: Container },
  { id: "alertes", label: "Alertes", icon: Bell },
  { id: "analytique", label: "Analytique", icon: BarChart3 },
  { id: "parametres", label: "Paramètres", icon: Settings },
];

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <div className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`bottom-nav-item ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          <div className="nav-icon-bg">
            <tab.icon size={18} />
          </div>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
