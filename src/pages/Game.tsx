import { useState } from "react";
import { Menu, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InfoBar from "@/components/InfoBar";
import GameMenu from "@/components/GameMenu";
import WorldMap from "@/components/WorldMap";

const Game = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Mock data - in real app this would come from game state
  const playerData = {
    countryName: "United Empire",
    gdp: "$2.5T",
    leaderName: "Alexander IV",
    governmentType: "Democracy",
    politicalSystem: "Federal",
    budgetDeficit: "-$150B",
    population: "45.2M",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <InfoBar {...playerData} />

      <div className="flex-1 relative">
        <GameMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="absolute top-4 left-4 z-40">
          <Button
            onClick={() => setIsMenuOpen(true)}
            size="lg"
            className="gradient-blue shadow-lg hover:shadow-xl transition-shadow"
          >
            <Menu className="mr-2 h-5 w-5" />
            Menu
          </Button>
        </div>

        <div className="absolute top-4 right-4 z-40">
          <Button
            onClick={() => navigate("/")}
            size="lg"
            variant="outline"
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Home className="mr-2 h-5 w-5" />
            На главную
          </Button>
        </div>

        <WorldMap />
      </div>
    </div>
  );
};

export default Game;
