import bmwX1 from "@/assets/images/fleet/bmw/bmw-x1.png";
import escalade from "@/assets/images/fleet/cadillac/escalade.png";
import coachBus from "@/assets/images/fleet/coach/coach-bus.png";
import freightLiner from "@/assets/images/fleet/freight-liner/freight.png";
import limo from "@/assets/images/fleet/limo/limo.png";
import luxurySedan from "@/assets/images/fleet/lincoln/luxury-sedan.png";
import mercedesGls from "@/assets/images/fleet/mercedes/mercedes-gls.png";
import rollsRoyce from "@/assets/images/fleet/rolls-royce/rolls-royce.png";
import sprinterVan from "@/assets/images/fleet/sprinter/van.png";


const fleet = [
  {
    title: "CADILLAC ESCALADE ESV",
    type: "Premium SUV",
    passengers: 6,
    suitcases: 6,
    image: escalade,
  },
  {
    title: "MERCEDES GLS",
    type: "Executive SUV",
    passengers: 6,
    suitcases: 6,
    image: mercedesGls,
  },
  {
    title: "CADILLAC CT6 OR SIMILAR",
    type: "Premium Sedan",
    passengers: "1–3",
    suitcases: 2,
    image: luxurySedan,
  },
  {
    title: "BMW X1",
    type: "Executive Sedan",
    passengers: "1–3",
    suitcases: 4,
    image: bmwX1,
  },
  {
    title: "MERCEDES SPRINTER OR SIMILAR",
    type: "Limousine Van",
    passengers: "11–14",
    suitcases: 8,
    image: sprinterVan,
  },
  {
    title: "FORD TRANSIT VAN",
    type: "Executive Van",
    passengers: "7–14",
    suitcases: 14,
    image: sprinterVan,
  },
  {
    title: "SPECIALTY LIMOUSINE",
    type: "Specialty Limo",
    passengers: "up to 15",
    suitcases: "—",
    image: limo,
  },
  {
    title: "FREIGHTLINER MINIBUS",
    type: "Minibus",
    passengers: "24–38",
    suitcases: "25+",
    image: freightLiner,
  },
  {
    title: "PARTY BUS",
    type: "Party Bus",
    passengers: "30",
    suitcases: "—",
    image: coachBus,
  },
  {
    title: "ROLLS-ROYCE GHOST",
    type: "Ultra-Luxury Sedan",
    passengers: "3",
    suitcases: 2,
    image: rollsRoyce,
  },
];


function FleetCard({ item }) {
  return (
    <div className="border border-[#e6ebee] rounded-[6px] h-[521px] relative">
      
      {/* Type */}
      <div className="absolute top-[47px] left-1/2 -translate-x-1/2 text-[#b4c6d0] uppercase text-[19px]">
        {item.type}
      </div>

      {/* Image */}
      <div className="absolute top-[132px] left-1/2 -translate-x-1/2 w-[328px] h-[200px] overflow-hidden">
        <img
          src={item.image.src}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <div className="absolute top-[65px] left-1/2 -translate-x-1/2 text-[#778892] uppercase text-[19px] text-center">
        {item.title}
      </div>

      {/* Capacity */}
      <div className="absolute top-[340px] w-full text-center text-[#393838]">
        <div>Passengers: {item.passengers}</div>
        <div>Suitcases: {item.suitcases}</div>
      </div>

      {/* CTA */}
      <div className="absolute bottom-0 w-full h-[77px] bg-[#e6ebee] flex items-center justify-center uppercase text-[#778892]">
        Reserve now
      </div>
    </div>
  );
}


function FleetGrid() {
  return (
    <div className="grid grid-cols-3 gap-[20px] w-[1140px] mx-auto">
      {fleet.map((item, idx) => (
        <FleetCard key={idx} item={item} />
      ))}
    </div>
  );
}



function Section() {
  return (
    <div className="pt-[120px] pb-[80px]">
      <h1 className="text-center text-[40px] uppercase font-serif mb-[40px]">
        Fleet
      </h1>

      <FleetGrid />
    </div>
  );
}