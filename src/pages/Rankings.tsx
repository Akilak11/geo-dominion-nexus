import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Rankings = () => {
  const navigate = useNavigate();

  const countryRankings = [
    { rank: 1, name: "Golden Empire", gdp: "$5.2T", power: 98 },
    { rank: 2, name: "United Federation", gdp: "$4.8T", power: 95 },
    { rank: 3, name: "Northern Alliance", gdp: "$3.9T", power: 89 },
    { rank: 4, name: "Eastern Coalition", gdp: "$3.5T", power: 85 },
    { rank: 5, name: "Western Union", gdp: "$3.2T", power: 82 },
  ];

  const playerRankings = [
    { rank: 1, username: "StrategyKing", score: 89500, wins: 245 },
    { rank: 2, username: "Emperor_Pro", score: 87200, wins: 231 },
    { rank: 3, username: "Commander_X", score: 82100, wins: 198 },
    { rank: 4, username: "DiplomatMaster", score: 79800, wins: 187 },
    { rank: 5, username: "WarLord88", score: 75600, wins: 176 },
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-gold" />;
    if (rank === 2) return <Trophy className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Trophy className="h-5 w-5 text-amber-700" />;
    return <span className="text-muted-foreground">#{rank}</span>;
  };

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

        <h1 className="text-4xl font-bold text-foreground mb-8">Global Rankings</h1>

        <Tabs defaultValue="countries" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="countries">Countries</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
          </TabsList>

          <TabsContent value="countries">
            <Card>
              <CardHeader>
                <CardTitle>Top Countries by Power</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {countryRankings.map((country) => (
                    <div
                      key={country.rank}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 flex justify-center">
                          {getRankBadge(country.rank)}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">{country.name}</h3>
                          <p className="text-sm text-muted-foreground">GDP: {country.gdp}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-lg">
                        Power: {country.power}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players">
            <Card>
              <CardHeader>
                <CardTitle>Top Players by Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playerRankings.map((player) => (
                    <div
                      key={player.rank}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 flex justify-center">
                          {getRankBadge(player.rank)}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">{player.username}</h3>
                          <p className="text-sm text-muted-foreground">Wins: {player.wins}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-lg">
                        {player.score.toLocaleString()}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Rankings;
