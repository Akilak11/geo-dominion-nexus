import { useState } from "react";
import { ChevronRight, Settings, DollarSign, Handshake, Swords, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameMenu = ({ isOpen, onClose }: GameMenuProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems = [
    {
      id: "settings",
      label: "Game Options",
      icon: Settings,
      submenu: ["Save Game", "Load Game", "Game Settings", "Exit to Main Menu"],
    },
    {
      id: "economy",
      label: "Economy",
      icon: DollarSign,
      submenu: ["Budget Overview", "Trade", "Resources", "Infrastructure"],
    },
    {
      id: "diplomacy",
      label: "Diplomacy",
      icon: Handshake,
      submenu: ["Treaties", "Relations", "Alliances", "Negotiations"],
    },
    {
      id: "military",
      label: "Military",
      icon: Swords,
      submenu: ["Army Overview", "Navy", "Air Force", "Recruit Units"],
    },
  ];

  const toggleSubmenu = (menuId: string) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-card border-r border-border glass-effect z-50 animate-slide-in-left overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Game Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => toggleSubmenu(item.id)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight
                  className={`h-4 w-4 text-muted-foreground transition-transform ${
                    expandedMenu === item.id ? "rotate-90" : ""
                  }`}
                />
              </button>

              {expandedMenu === item.id && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem}
                      className="w-full text-left p-2 rounded hover:bg-muted transition-colors text-sm text-muted-foreground hover:text-foreground"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameMenu;
