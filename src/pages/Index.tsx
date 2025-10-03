import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, Trophy } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gradient-blue-dark p-4">
      <div className="text-center max-w-4xl">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-blue mb-8 animate-pulse">
          <Globe className="h-12 w-12 text-primary-foreground" />
        </div>
        
        <h1 className="text-6xl font-bold text-foreground mb-4">
          Empire Strategy
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Build your empire, forge alliances, dominate the world. A strategic browser-based game where every decision shapes history.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="gradient-blue text-lg px-8 py-6"
            onClick={() => navigate("/login")}
          >
            Start Your Empire
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6"
            onClick={() => navigate("/rankings")}
          >
            View Rankings
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 rounded-lg glass-effect">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Global Strategy</h3>
            <p className="text-sm text-muted-foreground">
              Manage your nation's economy, diplomacy, and military on a global scale
            </p>
          </div>

          <div className="p-6 rounded-lg glass-effect">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Multiplayer</h3>
            <p className="text-sm text-muted-foreground">
              Compete with players worldwide in real-time strategic gameplay
            </p>
          </div>

          <div className="p-6 rounded-lg glass-effect">
            <Trophy className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Achievements</h3>
            <p className="text-sm text-muted-foreground">
              Earn rewards and climb the rankings as you build your empire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
