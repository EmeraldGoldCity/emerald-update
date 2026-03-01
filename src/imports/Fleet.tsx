const imgCarCadillacEscalade328X194Jpg = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop&q=75&fm=webp";
const imgCarMersedesGlsPng = "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop&q=75&fm=webp";
const imgCarCadillacCt6328X158Jpg = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop&q=75&fm=webp";
const imgBmwX1328X198Jpg = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&q=75&fm=webp";
const imgCarMercedesSprinter328X202Jpg = "https://images.unsplash.com/photo-1538391912490-304338a7f94c?w=600&h=400&fit=crop&q=75&fm=webp";
const imgCarFordTransit328X185Jpg = "https://images.unsplash.com/photo-1538391912490-304338a7f94c?w=600&h=400&fit=crop&q=75&fm=webp";
const imgSpecialtyLimo328X164Jpg = "https://images.unsplash.com/photo-1562822641-8b8f2b8c5e33?w=600&h=400&fit=crop&q=75&fm=webp";
const imgFlt1328X181Jpg = "https://images.unsplash.com/photo-1562822641-8b8f2b8c5e33?w=600&h=400&fit=crop&q=75&fm=webp";
const imgFreightlinerBlD181328X154Png = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop&q=75&fm=webp";
const imgPartyBusJpg = "https://images.unsplash.com/photo-1562822641-8b8f2b8c5e33?w=600&h=400&fit=crop&q=75&fm=webp";
const imgMotorcoach328X203Png = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop&q=75&fm=webp";
const imgLinkLogo170X41Png = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=170&h=41&fit=crop&q=75&fm=webp";
const imgHeader = "https://images.unsplash.com/photo-1562822641-8b8f2b8c5e33?w=1200&h=400&fit=crop&q=75&fm=webp";

function DivKamaBreadcrumbs() {
  return (
    <div className="absolute font-['Casanova_Scotia:Regular',sans-serif] h-[17.44px] leading-[0] left-[381.5px] not-italic text-[16px] top-[234px] w-[1140px]" data-name="div.kama_breadcrumbs">
      <div className="absolute flex flex-col h-[16px] justify-center left-0 text-[#cdd5da] top-[8px] translate-y-[-50%] w-[41.61px]">
        <p className="css-4hzbpn leading-[17.44px]">Main</p>
      </div>
      <div className="absolute flex flex-col h-[16px] justify-center left-[49.41px] text-[#cdd5da] top-[8px] translate-y-[-50%] w-[20.64px]">
        <p className="css-4hzbpn leading-[17.44px]">{` / `}</p>
      </div>
      <div className="absolute flex flex-col h-[16px] justify-center left-[77.84px] text-[#778892] top-[8px] translate-y-[-50%] w-[62.7px]">
        <p className="css-4hzbpn leading-[17.44px]">Fleet</p>
      </div>
    </div>
  );
}

function CarCadillacEscalade328X194Jpg() {
  return (
    <div className="absolute h-[194.17px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="car_cadillac_escalade-328x194.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCarCadillacEscalade328X194Jpg} />
      </div>
    </div>
  );
}

function DivCarPassengers() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[174.86px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[241.96px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">6</p>
      </div>
    </div>
  );
}

function DivCarSuitcases() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[174.64px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[233.66px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">6</p>
      </div>
    </div>
  );
}

function DivCarCapacity() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 not-italic pb-[42px] text-[#393838] text-center top-[340px]" data-name="div.car__capacity">
      <DivCarPassengers />
      <DivCarSuitcases />
    </div>
  );
}

function DivCarName() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-[40.77px] pr-[42.03px] top-[65px]" data-name="div.car__name">
      <div className="css-g0mm18 flex flex-col font-['Casanova_Scotia:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#778892] text-[19px] text-center uppercase">
        <p className="css-ew64yg leading-[22px]">CADILLAC ESCALADE ESV</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[442px] left-1/2 top-0 translate-x-[-50%] w-[364.8px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center leading-[0] left-[182.05px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[23px]">PREMIUM SUV</p>
      </div>
      <CarCadillacEscalade328X194Jpg />
      <DivCarCapacity />
      <DivCarName />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivFleetCar() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[6.59px] right-[766.61px] rounded-[6px] top-0" data-name="div.fleet__car">
      <Link />
      <Link1 />
    </div>
  );
}

function CarMersedesGlsPng() {
  return (
    <div className="absolute h-[218.88px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="car_mersedes_gls.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCarMersedesGlsPng} />
      </div>
    </div>
  );
}

function DivCarPassengers1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[174.86px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[241.96px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">6</p>
      </div>
    </div>
  );
}

function DivCarSuitcases1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[174.64px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[233.66px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">6</p>
      </div>
    </div>
  );
}

function DivCarCapacity1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 not-italic pb-[42px] text-[#393838] text-center top-[340px]" data-name="div.car__capacity">
      <DivCarPassengers1 />
      <DivCarSuitcases1 />
    </div>
  );
}

function DivCarName1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-[98.39px] pr-[98.41px] top-[65px]" data-name="div.car__name">
      <div className="css-g0mm18 flex flex-col font-['Casanova_Scotia:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#778892] text-[19px] text-center uppercase">
        <p className="css-ew64yg leading-[22px]">MERCEDES GLS</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[442px] left-1/2 top-0 translate-x-[-50%] w-[364.8px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center leading-[0] left-[181.94px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[23px]">EXECUTIVE SUV</p>
      </div>
      <CarMersedesGlsPng />
      <DivCarCapacity1 />
      <DivCarName1 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivFleetCar1() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[386.59px] right-[386.61px] rounded-[6px] top-0" data-name="div.fleet__car">
      <Link2 />
      <Link3 />
    </div>
  );
}

function CarCadillacCt6328X158Jpg() {
  return (
    <div className="absolute h-[158.14px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="car_cadillac_ct6-328x158.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCarCadillacCt6328X158Jpg} />
      </div>
    </div>
  );
}

function DivCarPassengers2() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[163.69px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[120.79px]">
        <p className="css-4hzbpn leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[30px] justify-center left-[242.8px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%] w-[37.83px]">
        <p className="css-4hzbpn leading-[30px]">1-3</p>
      </div>
    </div>
  );
}

function DivCarSuitcases2() {
  return (
    <div className="absolute h-[30px] left-0 top-[30px] w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[174.85px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[104.22px]">
        <p className="css-4hzbpn leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[30px] justify-center left-[234.51px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%] w-[15.51px]">
        <p className="css-4hzbpn leading-[30px]">2</p>
      </div>
    </div>
  );
}

function DivCarCapacity2() {
  return (
    <div className="absolute h-[102px] leading-[0] left-0 not-italic text-[#393838] text-center top-[340px] w-[364.8px]" data-name="div.car__capacity">
      <DivCarPassengers2 />
      <DivCarSuitcases2 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivCarName2() {
  return (
    <div className="absolute h-[22px] left-0 top-[65px] w-[364.8px]" data-name="div.car__name">
      <div className="absolute flex flex-col font-['Casanova_Scotia:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[182.49px] not-italic text-[#778892] text-[19px] text-center top-[11px] translate-x-[-50%] translate-y-[-50%] uppercase w-[280.61px]">
        <p className="css-4hzbpn leading-[22px]">CADILLAC CT6 OR SIMILAR</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function DivFleetCar2() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[766.59px] right-[6.61px] rounded-[6px] top-0" data-name="div.fleet__car">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[23px] justify-center leading-[0] left-[182.5px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase w-[157.59px]">
        <p className="css-4hzbpn leading-[23px]">PREMIUM SEDAN</p>
      </div>
      <CarCadillacCt6328X158Jpg />
      <DivCarCapacity2 />
      <Link4 />
      <DivCarName2 />
    </div>
  );
}

function BmwX1328X198Jpg() {
  return (
    <div className="absolute h-[198.19px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="bmw_x1-328x198.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBmwX1328X198Jpg} />
      </div>
    </div>
  );
}

function DivCarPassengers3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[163.79px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[241.88px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">1-3</p>
      </div>
    </div>
  );
}

function DivCarSuitcases3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[174.33px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[234.85px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">4</p>
      </div>
    </div>
  );
}

function DivCarCapacity3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 not-italic pb-[42px] text-[#393838] text-center top-[340px]" data-name="div.car__capacity">
      <DivCarPassengers3 />
      <DivCarSuitcases3 />
    </div>
  );
}

function DivCarName3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-[147.1px] pr-[146.7px] top-[65px]" data-name="div.car__name">
      <div className="css-g0mm18 flex flex-col font-['Casanova_Scotia:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#778892] text-[19px] text-center uppercase">
        <p className="css-ew64yg leading-[22px]">BMW X1</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[442px] left-1/2 top-0 translate-x-[-50%] w-[364.8px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center leading-[0] left-[182.1px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[23px]">EXECUTIVE SEDAN</p>
      </div>
      <BmwX1328X198Jpg />
      <DivCarCapacity3 />
      <DivCarName3 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivFleetCar3() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[6.59px] right-[766.61px] rounded-[6px] top-[541px]" data-name="div.fleet__car">
      <Link5 />
      <Link6 />
    </div>
  );
}

function CarMercedesSprinter328X202Jpg() {
  return (
    <div className="absolute h-[202.19px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="car_mercedes_sprinter-328x202.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCarMercedesSprinter328X202Jpg} />
      </div>
    </div>
  );
}

function DivCarPassengers4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[153.33px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[242.93px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">11-14</p>
      </div>
    </div>
  );
}

function DivCarSuitcases4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[174.72px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[233.74px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">8</p>
      </div>
    </div>
  );
}

function DivCarCapacity4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 not-italic pb-[42px] text-[#393838] text-center top-[340px]" data-name="div.car__capacity">
      <DivCarPassengers4 />
      <DivCarSuitcases4 />
    </div>
  );
}

function DivCarName4() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-[5.08px] pr-[4.72px] top-[65px]" data-name="div.car__name">
      <div className="css-g0mm18 flex flex-col font-['Casanova_Scotia:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#778892] text-[19px] text-center uppercase">
        <p className="css-ew64yg leading-[22px]">MERCEDES SPRINTER OR SIMILAR</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[442px] left-1/2 top-0 translate-x-[-50%] w-[364.8px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center leading-[0] left-[181.99px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[23px]">LIMOUSINE VAN</p>
      </div>
      <CarMercedesSprinter328X202Jpg />
      <DivCarCapacity4 />
      <DivCarName4 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivFleetCar4() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[386.59px] right-[386.61px] rounded-[6px] top-[541px]" data-name="div.fleet__car">
      <Link7 />
      <Link8 />
    </div>
  );
}

function CarFordTransit328X185Jpg() {
  return (
    <div className="absolute h-[185.17px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="car_ford_transit-328x185.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCarFordTransit328X185Jpg} />
      </div>
    </div>
  );
}

function DivCarPassengers5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[156.47px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[243.07px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">7-14</p>
      </div>
    </div>
  );
}

function DivCarSuitcases5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[169.3px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[234.82px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">14</p>
      </div>
    </div>
  );
}

function DivCarCapacity5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 not-italic pb-[42px] text-[#393838] text-center top-[340px]" data-name="div.car__capacity">
      <DivCarPassengers5 />
      <DivCarSuitcases5 />
    </div>
  );
}

function DivCarName5() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-[78.8px] pr-[80px] top-[65px]" data-name="div.car__name">
      <div className="css-g0mm18 flex flex-col font-['Casanova_Scotia:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#778892] text-[19px] text-center uppercase">
        <p className="css-ew64yg leading-[22px]">FORD TRANSIT VAN</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[442px] left-1/2 top-0 translate-x-[-50%] w-[364.8px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center leading-[0] left-[181.63px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[23px]">EXECUTIVE VAN</p>
      </div>
      <CarFordTransit328X185Jpg />
      <DivCarCapacity5 />
      <DivCarName5 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivFleetCar5() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[766.59px] right-[6.61px] rounded-[6px] top-[541px]" data-name="div.fleet__car">
      <Link9 />
      <Link10 />
    </div>
  );
}

function SpecialtyLimo328X164Jpg() {
  return (
    <div className="absolute h-[164.16px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="SPECIALTY_LIMO-328x164.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSpecialtyLimo328X164Jpg} />
      </div>
    </div>
  );
}

function DivCarPassengers6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[131.75px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[241.85px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">up to 15</p>
      </div>
    </div>
  );
}

function DivCarSuitcases6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[173.16px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[234.68px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">—</p>
      </div>
    </div>
  );
}

function DivCarCapacity6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 not-italic pb-[42px] text-[#393838] text-center top-[340px]" data-name="div.car__capacity">
      <DivCarPassengers6 />
      <DivCarSuitcases6 />
    </div>
  );
}

function DivCarName6() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-[6.86px] pr-[7.94px] top-[65px]" data-name="div.car__name">
      <div className="css-g0mm18 flex flex-col font-['Casanova_Scotia:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#778892] text-[19px] text-center uppercase">
        <p className="css-ew64yg leading-[22px]">CADILLAC LIMOUSINE OR SIMILAR</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[442px] left-1/2 top-0 translate-x-[-50%] w-[364.8px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center leading-[0] left-[182.93px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[23px]">SPECIALTY LIMOUSINE</p>
      </div>
      <SpecialtyLimo328X164Jpg />
      <DivCarCapacity6 />
      <DivCarName6 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivFleetCar6() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[6.59px] right-[766.61px] rounded-[6px] top-[1082px]" data-name="div.fleet__car">
      <Link11 />
      <Link12 />
    </div>
  );
}

function Flt1328X181Jpg() {
  return (
    <div className="absolute h-[181.17px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="flt1-328x181.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlt1328X181Jpg} />
      </div>
    </div>
  );
}

function DivCarPassengers7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[155.05px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[242.14px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">6-10</p>
      </div>
    </div>
  );
}

function DivCarSuitcases7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center left-[173.16px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Medium',sans-serif] justify-center left-[234.68px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="css-ew64yg leading-[30px]">—</p>
      </div>
    </div>
  );
}

function DivCarCapacity7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 not-italic pb-[42px] text-[#393838] text-center top-[340px]" data-name="div.car__capacity">
      <DivCarPassengers7 />
      <DivCarSuitcases7 />
    </div>
  );
}

function DivCarName7() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-[38.88px] pr-[39.92px] top-[65px]" data-name="div.car__name">
      <div className="css-g0mm18 flex flex-col font-['Casanova_Scotia:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#778892] text-[19px] text-center uppercase">
        <p className="css-ew64yg leading-[22px]">MKT LIMOUSINE OR SIMILAR</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute h-[442px] left-1/2 top-0 translate-x-[-50%] w-[364.8px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Stolzl:Book',sans-serif] justify-center leading-[0] left-[182.14px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[23px]">STRETCH LIMO</p>
      </div>
      <Flt1328X181Jpg />
      <DivCarCapacity7 />
      <DivCarName7 />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivFleetCar7() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[386.59px] right-[386.61px] rounded-[6px] top-[1082px]" data-name="div.fleet__car">
      <Link13 />
      <Link14 />
    </div>
  );
}

function FreightlinerBlD181328X154Png() {
  return (
    <div className="absolute h-[154.14px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="freightliner_bl%D1%81-328x154.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFreightlinerBlD181328X154Png} />
      </div>
    </div>
  );
}

function DivCarPassengers8() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[145.35px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[120.79px]">
        <p className="css-4hzbpn leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[30px] justify-center left-[242.79px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%] w-[74.48px]">
        <p className="css-4hzbpn leading-[30px]">24-38</p>
      </div>
    </div>
  );
}

function DivCarSuitcases8() {
  return (
    <div className="absolute h-[30px] left-0 top-[30px] w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[159px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[104.22px]">
        <p className="css-4hzbpn leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[30px] justify-center left-[234.51px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%] w-[47.2px]">
        <p className="css-4hzbpn leading-[30px]">25+</p>
      </div>
    </div>
  );
}

function DivCarCapacity8() {
  return (
    <div className="absolute h-[102px] leading-[0] left-0 not-italic text-[#393838] text-center top-[340px] w-[364.8px]" data-name="div.car__capacity">
      <DivCarPassengers8 />
      <DivCarSuitcases8 />
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivCarName8() {
  return (
    <div className="absolute h-[22px] left-0 top-[65px] w-[364.8px]" data-name="div.car__name">
      <div className="absolute flex flex-col font-['Casanova_Scotia:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[19px] text-center top-[11px] translate-x-[-50%] translate-y-[-50%] uppercase w-[246.14px]">
        <p className="css-4hzbpn leading-[22px]">FREIGHTLINER MINIBUS</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function DivFleetCar8() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[766.59px] right-[6.61px] rounded-[6px] top-[1082px]" data-name="div.fleet__car">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[23px] justify-center leading-[0] left-[182.5px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase w-[79px]">
        <p className="css-4hzbpn leading-[23px]">MINIBUS</p>
      </div>
      <FreightlinerBlD181328X154Png />
      <DivCarCapacity8 />
      <Link15 />
      <DivCarName8 />
    </div>
  );
}

function PartyBusJpg() {
  return (
    <div className="absolute h-[209.3px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="party_bus.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPartyBusJpg} />
      </div>
    </div>
  );
}

function DivCarPassengers9() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[166.15px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[120.79px]">
        <p className="css-4hzbpn leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[30px] justify-center left-[242.8px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%] w-[32.9px]">
        <p className="css-4hzbpn leading-[30px]">30</p>
      </div>
    </div>
  );
}

function DivCarCapacity9() {
  return (
    <div className="absolute h-[102px] leading-[0] left-0 not-italic text-[#393838] text-center top-[340px] w-[364.8px]" data-name="div.car__capacity">
      <DivCarPassengers9 />
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[182.51px] text-[18px] top-[48px] translate-x-[-50%] translate-y-[-50%] w-[98.81px]">
        <p className="css-4hzbpn leading-[22px]">Suitcases:</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivCarName9() {
  return (
    <div className="absolute h-[22px] left-0 top-[65px] w-[364.8px]" data-name="div.car__name">
      <div className="absolute flex flex-col font-['Casanova_Scotia:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[182.51px] not-italic text-[#778892] text-[19px] text-center top-[11px] translate-x-[-50%] translate-y-[-50%] uppercase w-[122.43px]">
        <p className="css-4hzbpn leading-[22px]">PARTY BUS</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function DivFleetCar9() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[101.59px] right-[671.61px] rounded-[6px] top-[1623px]" data-name="div.fleet__car">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[23px] justify-center leading-[0] left-[182.5px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase w-[106.08px]">
        <p className="css-4hzbpn leading-[23px]">PARTY BUS</p>
      </div>
      <PartyBusJpg />
      <DivCarCapacity9 />
      <Link16 />
      <DivCarName9 />
    </div>
  );
}

function Motorcoach328X203Png() {
  return (
    <div className="absolute h-[203.19px] left-1/2 top-[132px] translate-x-[-50%] w-[328.31px]" data-name="MOTORCOACH-328x203.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMotorcoach328X203Png} />
      </div>
    </div>
  );
}

function DivCarPassengers10() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[364.8px]" data-name="div.car__passengers">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[167.85px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[120.79px]">
        <p className="css-4hzbpn leading-[22px]">{`Passengers: `}</p>
      </div>
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[30px] justify-center left-[242.79px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%] w-[29.48px]">
        <p className="css-4hzbpn leading-[30px]">57</p>
      </div>
    </div>
  );
}

function DivCarSuitcases9() {
  return (
    <div className="absolute h-[30px] left-0 top-[30px] w-[364.8px]" data-name="div.car__suitcases">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[22px] justify-center left-[159.71px] text-[18px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[104.22px]">
        <p className="css-4hzbpn leading-[22px]">{`Suitcases: `}</p>
      </div>
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[30px] justify-center left-[234.5px] text-[25px] top-[15px] translate-x-[-50%] translate-y-[-50%] w-[45.78px]">
        <p className="css-4hzbpn leading-[30px]">57+</p>
      </div>
    </div>
  );
}

function DivCarCapacity10() {
  return (
    <div className="absolute h-[102px] leading-[0] left-0 not-italic text-[#393838] text-center top-[340px] w-[364.8px]" data-name="div.car__capacity">
      <DivCarPassengers10 />
      <DivCarSuitcases9 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute bg-[#e6ebee] h-[77px] left-0 right-0 rounded-bl-[6px] rounded-br-[6px] top-[442px]" data-name="Link">
      <div className="absolute flex flex-col font-['Stolzl:Medium',sans-serif] h-[17px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[14px] text-center top-[40.5px] tracking-[1.54px] translate-x-[-50%] translate-y-[-50%] uppercase w-[119px]">
        <p className="css-4hzbpn leading-[17px]">reserve now</p>
      </div>
    </div>
  );
}

function DivCarName10() {
  return (
    <div className="absolute h-[22px] left-0 top-[65px] w-[364.8px]" data-name="div.car__name">
      <div className="absolute flex flex-col font-['Casanova_Scotia:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[182.5px] not-italic text-[#778892] text-[19px] text-center top-[11px] translate-x-[-50%] translate-y-[-50%] uppercase w-[148.64px]">
        <p className="css-4hzbpn leading-[22px]">MOTORCOACH</p>
      </div>
      <div className="absolute bg-[#e7c13c] h-[2px] left-[138.61px] top-[40px] w-[87.55px]" data-name="pseudo" />
    </div>
  );
}

function DivFleetCar10() {
  return (
    <div className="absolute border border-[#e6ebee] border-solid h-[521px] left-[671.59px] right-[101.61px] rounded-[6px] top-[1623px]" data-name="div.fleet__car">
      <div className="absolute flex flex-col font-['Stolzl:Book',sans-serif] h-[23px] justify-center leading-[0] left-[182.5px] not-italic text-[#b4c6d0] text-[19px] text-center top-[47.5px] translate-x-[-50%] translate-y-[-50%] uppercase w-[259.15px]">
        <p className="css-4hzbpn leading-[23px]">EXECUTIVE MOTOR COACH</p>
      </div>
      <Motorcoach328X203Png />
      <DivCarCapacity10 />
      <Link17 />
      <DivCarName10 />
    </div>
  );
}

function DivFleetFlex() {
  return (
    <div className="absolute h-[2164px] left-0 top-[106.59px] w-[1140px]" data-name="div.fleet__flex">
      <DivFleetCar />
      <DivFleetCar1 />
      <DivFleetCar2 />
      <DivFleetCar3 />
      <DivFleetCar4 />
      <DivFleetCar5 />
      <DivFleetCar6 />
      <DivFleetCar7 />
      <DivFleetCar8 />
      <DivFleetCar9 />
      <DivFleetCar10 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[2270.59px] left-1/2 top-[316.44px] translate-x-[-50%] w-[1140px]" data-name="Section">
      <DivFleetFlex />
      <div className="absolute flex flex-col font-['Casanova_Scotia:Regular',sans-serif] h-[42px] justify-center leading-[0] left-[570.11px] not-italic text-[#323232] text-[40px] text-center top-[21px] translate-x-[-50%] translate-y-[-50%] uppercase w-[156.45px]">
        <p className="css-4hzbpn leading-[43.6px]">Fleet</p>
      </div>
    </div>
  );
}

function LinkLogo170X41Png() {
  return (
    <div className="absolute h-[17px] left-0 top-[25.5px] w-[170px]" data-name="Link ⏵ logo-170x41.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[241.18%] left-0 max-w-none top-[-142.29%] w-full" src={imgLinkLogo170X41Png} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[4px] left-0 top-0 w-[7px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
        <g clipPath="url(#clip0_37_2009)" id="image">
          <path d={svgPaths.p3d409300} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_37_2009">
            <rect fill="white" height="4" width="7" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Pseudo() {
  return (
    <div className="absolute left-[calc(50%+40.99px)] size-[7px] top-[7px] translate-x-[-50%]" data-name="pseudo">
      <Image />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute bottom-[-15px] h-[33px] left-[368.14px] w-[88.98px]" data-name="Item">
      <div className="absolute css-g0mm18 flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] left-[38px] not-italic text-[15px] text-center text-white top-[9px] tracking-[0.45px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[18px]">Services</p>
      </div>
      <Pseudo />
    </div>
  );
}

function List() {
  return (
    <div className="absolute bottom-0 h-[41px] left-[231.63px] w-[591.25px]" data-name="List">
      <div className="absolute css-g0mm18 flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] left-[53.5px] not-italic text-[15px] text-center text-white top-[32px] tracking-[0.45px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[18px]">Home</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] left-[129.1px] not-italic text-[15px] text-center text-white top-[32px] tracking-[0.45px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[18px]">Fleet</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] left-[209.37px] not-italic text-[15px] text-center text-white top-[32px] tracking-[0.45px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[18px]">Quote</p>
      </div>
      <div className="absolute css-g0mm18 flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] left-[302.79px] not-italic text-[15px] text-center text-white top-[32px] tracking-[0.45px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[18px]">Reviews</p>
      </div>
      <Item />
      <div className="absolute css-g0mm18 flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] left-[539.62px] not-italic text-[15px] text-center text-white top-[32px] tracking-[0.45px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="css-ew64yg leading-[18px]">Contact us</p>
      </div>
    </div>
  );
}

function DivHeaderContacts() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col font-['Arial:Narrow',sans-serif] gap-[5.97px] items-start leading-[0] left-[884.5px] not-italic pb-[0.34px] pr-[72.48px]" data-name="div.header__contacts">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#e7c13c] text-[22px]">
        <p className="css-ew64yg leading-[23.98px]">786-913-0999</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#e5e5e5] text-[15px]">
        <p className="css-ew64yg leading-[16.35px]">info@premiumlimo.com</p>
      </div>
    </div>
  );
}

function DivHeaderFlex() {
  return (
    <div className="absolute h-[46.31px] left-[382px] top-[69px] w-[1140px]" data-name="div.header__flex">
      <LinkLogo170X41Png />
      <List />
      <DivHeaderContacts />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[382px] top-[69px]">
      <DivHeaderFlex />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute inset-[0_0_2763.72px_0]" data-name="Header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[124.04%] left-0 max-w-none top-0 w-full" src={imgHeader} />
      </div>
      <Group />
    </div>
  );
}

function LinkLogo170X41Png1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[170px]" data-name="Link ⏵ logo-170x41.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[241.18%] left-0 max-w-none top-[-141.47%] w-full" src={imgLinkLogo170X41Png} />
      </div>
    </div>
  );
}

function DivFooterBlockWithLogo() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-0 pb-px pr-[35.92px] top-0" data-name="div.footer__block_with_logo">
      <LinkLogo170X41Png1 />
      <div className="css-g0mm18 flex flex-col font-['Arial:Narrow',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white uppercase">
        <p className="css-ew64yg leading-[normal]">PREMIUM LIMO, LLC</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pr-[14.63px] relative shrink-0" data-name="List">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Home</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Fleet</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Quote</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pr-[29.44px] relative shrink-0" data-name="List">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Reviews</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Contact us</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pr-[38.7px] relative shrink-0" data-name="List">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Copyright ©</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Terms of service</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[18px]">Privacy policy</p>
      </div>
    </div>
  );
}

function DivFooterMenu() {
  return (
    <div className="absolute content-stretch flex font-['Arial:Narrow',sans-serif] gap-[54px] items-start leading-[0] left-[373.17px] not-italic pr-[0.01px] text-[15px] text-white top-0" data-name="div.footer__menu">
      <List1 />
      <List2 />
      <List3 />
    </div>
  );
}

function DivFooterContacts() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Arial:Narrow',sans-serif] gap-[5.97px] items-start leading-[0] left-[906.19px] not-italic pb-[0.34px] pr-[70.8px] top-[-1px]" data-name="div.footer__contacts">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#e7c13c] text-[22px]">
        <p className="css-ew64yg leading-[23.98px]">786-913-0999</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#e5e5e5] text-[15px]">
        <p className="css-ew64yg leading-[16.35px]">info@premiumlimo.com</p>
      </div>
    </div>
  );
}

function DivFooterFlex() {
  return (
    <div className="absolute h-[78px] left-[382px] top-[73.95px] w-[1140px]" data-name="div.footer__flex">
      <DivFooterBlockWithLogo />
      <DivFooterMenu />
      <DivFooterContacts />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#3a3b42] bottom-[0.03px] h-[226px] left-[calc(50%-0.5px)] translate-x-[-50%] w-[1904px]" data-name="Footer">
      <DivFooterFlex />
    </div>
  );
}

export default function Fleet() {
  return (
    <div className="bg-[#fefefe] relative size-full" data-name="Fleet">
      <DivKamaBreadcrumbs />
      <Section />
      <Header />
      <Footer />
    </div>
  );
}
