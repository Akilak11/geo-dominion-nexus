import worldMapImage from "@/assets/world-map.jpg";

const WorldMap = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 gradient-blue-dark"></div>
      <img
        src={worldMapImage}
        alt="World Map"
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/50 to-transparent"></div>
    </div>
  );
};

export default WorldMap;
