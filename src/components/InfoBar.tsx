import { DollarSign, Users, TrendingDown, Building2 } from "lucide-react";

interface InfoBarProps {
  countryName: string;
  gdp: string;
  leaderName: string;
  governmentType: string;
  politicalSystem: string;
  budgetDeficit: string;
  population: string;
}

const InfoBar = ({
  countryName,
  gdp,
  leaderName,
  governmentType,
  politicalSystem,
  budgetDeficit,
  population,
}: InfoBarProps) => {
  return (
    <div className="w-full bg-card border-b border-border glass-effect">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {/* Country Name */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Country</p>
              <p className="text-sm font-bold text-foreground">{countryName}</p>
            </div>
          </div>

          {/* GDP */}
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-gold" />
            <div>
              <p className="text-xs text-muted-foreground">GDP</p>
              <p className="text-sm font-bold text-gold">{gdp}</p>
            </div>
          </div>

          {/* Leader */}
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">
                {leaderName.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Leader</p>
              <p className="text-sm font-bold text-foreground">{leaderName}</p>
            </div>
          </div>

          {/* Government Type */}
          <div>
            <p className="text-xs text-muted-foreground">Government</p>
            <p className="text-sm font-bold text-foreground">{governmentType}</p>
          </div>

          {/* Political System */}
          <div>
            <p className="text-xs text-muted-foreground">System</p>
            <p className="text-sm font-bold text-foreground">{politicalSystem}</p>
          </div>

          {/* Budget Deficit */}
          <div className="flex items-center space-x-2">
            <TrendingDown className="h-5 w-5 text-destructive" />
            <div>
              <p className="text-xs text-muted-foreground">Budget</p>
              <p className="text-sm font-bold text-destructive">{budgetDeficit}</p>
            </div>
          </div>

          {/* Population */}
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Population</p>
              <p className="text-sm font-bold text-accent">{population}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
