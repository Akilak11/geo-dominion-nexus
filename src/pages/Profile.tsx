import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Target, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const playerStats = {
    username: "Emperor123",
    level: 42,
    gamesPlayed: 156,
    gamesWon: 89,
    winRate: 57,
    totalScore: 45230,
  };

  const achievements = [
    { name: "First Victory", icon: Trophy, unlocked: true },
    { name: "Economic Master", icon: Star, unlocked: true },
    { name: "Diplomatic Genius", icon: Target, unlocked: false },
    { name: "Military Commander", icon: Trophy, unlocked: true },
  ];

  return (
    <div className="min-h-screen bg-background gradient-blue-dark">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/game")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Game
        </Button>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Player Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl gradient-blue">
                  {playerStats.username.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{playerStats.username}</h2>
                <Badge variant="outline" className="mt-2">Level {playerStats.level}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Games Played</p>
                  <p className="text-2xl font-bold text-foreground">{playerStats.gamesPlayed}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Games Won</p>
                  <p className="text-2xl font-bold text-gold">{playerStats.gamesWon}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <p className="text-2xl font-bold text-accent">{playerStats.winRate}%</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary md:col-span-3">
                  <p className="text-sm text-muted-foreground">Total Score</p>
                  <p className="text-2xl font-bold text-primary">{playerStats.totalScore.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      achievement.unlocked
                        ? "border-gold bg-gold/10"
                        : "border-muted bg-muted/30 opacity-50"
                    }`}
                  >
                    <achievement.icon
                      className={`h-8 w-8 mx-auto mb-2 ${
                        achievement.unlocked ? "text-gold" : "text-muted-foreground"
                      }`}
                    />
                    <p className="text-sm font-medium text-foreground">{achievement.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
