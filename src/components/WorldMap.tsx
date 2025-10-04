import { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface CountryData {
  name: string;
  gdp?: string;
  power?: number;
  owner?: string;
  status?: "owned" | "neutral" | "enemy" | "ally";
}

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState<CountryData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const mockCountryData: Record<string, CountryData> = {
    USA: { name: "United States", gdp: "$23T", power: 95, status: "owned" },
    RUS: { name: "Russia", gdp: "$1.8T", power: 88, status: "ally" },
    CHN: { name: "China", gdp: "$17T", power: 92, status: "enemy" },
    DEU: { name: "Germany", gdp: "$4T", power: 75, status: "neutral" },
    FRA: { name: "France", gdp: "$2.9T", power: 72, status: "ally" },
    GBR: { name: "United Kingdom", gdp: "$3.1T", power: 78, status: "ally" },
    JPN: { name: "Japan", gdp: "$5T", power: 80, status: "neutral" },
    IND: { name: "India", gdp: "$3.5T", power: 85, status: "neutral" },
  };

  const getCountryFill = (countryCode: string, isHovered: boolean) => {
    const data = mockCountryData[countryCode];
    
    if (selectedCountry === countryCode) {
      return "#fbbf24";
    }
    
    if (isHovered) {
      if (!data) return "#3b82f6";
      switch (data.status) {
        case "owned": return "#10b981";
        case "ally": return "#6366f1";
        case "enemy": return "#f87171";
        default: return "#3b82f6";
      }
    }

    if (!data) return "#1e293b";
    
    switch (data.status) {
      case "owned": return "#059669";
      case "ally": return "#4f46e5";
      case "enemy": return "#dc2626";
      default: return "#334155";
    }
  };

  const handleCountryHover = (
    geo: any,
    event: React.MouseEvent<SVGPathElement>
  ) => {
    const countryCode = geo.properties.ISO_A3;
    const countryName = geo.properties.NAME;
    setHoveredCountry(countryCode);
    
    const data = mockCountryData[countryCode] || {
      name: countryName,
      status: "neutral" as const,
    };
    
    setTooltipContent(data);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleCountryLeave = () => {
    setHoveredCountry(null);
    setTooltipContent(null);
  };

  const handleCountryClick = (geo: any) => {
    const countryCode = geo.properties.ISO_A3;
    setSelectedCountry(countryCode === selectedCountry ? null : countryCode);
    console.log("Selected country:", geo.properties.NAME, countryCode);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140,
          center: [0, 20],
        }}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup zoom={1} minZoom={1} maxZoom={8}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryCode = geo.properties.ISO_A3;
                const isHovered = hoveredCountry === countryCode;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(event) => handleCountryHover(geo, event)}
                    onMouseLeave={handleCountryLeave}
                    onClick={() => handleCountryClick(geo)}
                    style={{
                      default: {
                        fill: getCountryFill(countryCode, false),
                        stroke: "#0f172a",
                        strokeWidth: 0.5,
                        outline: "none",
                        transition: "all 0.2s ease-in-out",
                      },
                      hover: {
                        fill: getCountryFill(countryCode, true),
                        stroke: "#60a5fa",
                        strokeWidth: 1.5,
                        outline: "none",
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                      },
                      pressed: {
                        fill: "#fbbf24",
                        stroke: "#f59e0b",
                        strokeWidth: 2,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {tooltipContent && (
        <div
          className="absolute z-50 pointer-events-none bg-slate-900/95 border border-slate-700 rounded-lg px-4 py-3 shadow-2xl backdrop-blur-sm"
          style={{
            left: `${tooltipPosition.x + 15}px`,
            top: `${tooltipPosition.y + 15}px`,
          }}
        >
          <div className="space-y-1">
            <h3 className="font-bold text-white text-sm">
              {tooltipContent.name}
            </h3>
            {tooltipContent.gdp && (
              <p className="text-xs text-slate-300">GDP: {tooltipContent.gdp}</p>
            )}
            {tooltipContent.power && (
              <p className="text-xs text-slate-300">
                Power: {tooltipContent.power}
              </p>
            )}
            {tooltipContent.status && (
              <div className="flex items-center gap-2 pt-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    tooltipContent.status === "owned"
                      ? "bg-green-500"
                      : tooltipContent.status === "ally"
                      ? "bg-indigo-500"
                      : tooltipContent.status === "enemy"
                      ? "bg-red-500"
                      : "bg-slate-500"
                  }`}
                />
                <span className="text-xs text-slate-400 capitalize">
                  {tooltipContent.status}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 z-40 bg-slate-900/90 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-700">
        <h4 className="text-xs font-bold text-white mb-2">Легенда:</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-600" />
            <span className="text-slate-300">Ваша территория</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-indigo-600" />
            <span className="text-slate-300">Союзники</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-600" />
            <span className="text-slate-300">Враги</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-slate-700" />
            <span className="text-slate-300">Нейтральные</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/30 to-transparent"></div>
    </div>
  );
};

export default memo(WorldMap);
