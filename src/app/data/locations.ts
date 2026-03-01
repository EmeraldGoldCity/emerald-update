// Location data for all service areas
export interface Location {
  name: string;
  county?: string;
  slug: string;
  description: string;
}

export const counties = {
  king: {
    name: "King County",
    cities: [
      { name: "Seattle", slug: "seattle", description: "Premier Seattle limousine service to Space Needle, Pike Place Market, Seattle Waterfront, downtown hotels, Convention Center, and SEA-TAC Airport. Executive transportation for corporate events, weddings, and luxury tours." },
      { name: "Bellevue", slug: "bellevue", description: "Luxury Bellevue limo service to Bellevue Square, downtown hotels, Lincoln Square, corporate offices, and Meydenbauer Center. Professional transportation for business executives and special occasions." },
      { name: "Redmond", slug: "redmond", description: "Professional Redmond limousine service to Microsoft campus, corporate headquarters, Redmond Town Center, Marymoor Park, and tech company events. Executive car service for business travel." },
      { name: "Renton", slug: "renton", description: "Reliable Renton limo service to Boeing facilities, The Landing shopping center, Renton hotels, corporate campuses, and SEA-TAC Airport transfers." },
      { name: "Kent", slug: "kent", description: "Quality Kent limousine service to Kent Station, corporate facilities, hotels, and event venues throughout Kent Valley. Professional airport transportation." },
      { name: "Auburn", slug: "auburn", description: "Elegant Auburn limo service to Muckleshoot Casino, Emerald Downs, corporate events, and Auburn wedding venues. Luxury transportation for special occasions." },
      { name: "Federal Way", slug: "federal-way", description: "Premium Federal Way limousine service to hotels, The Commons shopping center, Wild Waves Theme Park, corporate locations, and SEA-TAC Airport." },
      { name: "Kirkland", slug: "kirkland", description: "Luxury Kirkland limo service to waterfront hotels, downtown Kirkland, Marina Park, corporate events, and Lake Washington venues. Executive transportation and wedding car service." },
      { name: "Sammamish", slug: "sammamish", description: "Exclusive Sammamish limousine service to Plateau communities, corporate events, luxury homes, and special occasions. Premium chauffeur service for executives." },
      { name: "Woodinville", slug: "woodinville", description: "Premier Woodinville limo service to TPC Snoqualmie Ridge golf events, wine country tours, wineries, breweries, Chateau Ste. Michelle, wedding venues, and corporate golf tournaments. Luxury transportation for PGA events and wine tasting tours." },
      { name: "SeaTac Airport (SEA)", slug: "sea-tac-airport", description: "Premium limousine service to SeaTac Airport. 24/7 airport transfers with flight tracking, meet & greet service, and professional chauffeurs. Our most popular destination for stress-free airport transportation." },
      { name: "Boeing Field (BFI)", slug: "boeing-field-airport", description: "Luxury limousine service to Boeing Field. Professional transportation for private jets, charter flights, and corporate aviation with premium meet & greet service." },
    ]
  },
  snohomish: {
    name: "Snohomish County",
    cities: [
      { name: "Everett", slug: "everett", description: "Professional Everett limousine service to Paine Field Airport, Boeing Everett Factory, Angel of the Winds Arena, waterfront hotels, casino transportation, and corporate events." },
      { name: "Marysville", slug: "marysville", description: "Quality Marysville limo service to Tulalip Resort Casino, Tulalip hotels, outlet mall, corporate locations, and special events. Luxury casino transportation." },
      { name: "Lynnwood", slug: "lynnwood", description: "Premium Lynnwood limousine service to Convention Center, Alderwood Mall, hotels, corporate facilities, and SEA-TAC Airport transfers. Professional business car service." },
      { name: "Edmonds", slug: "edmonds", description: "Elegant Edmonds limo service to waterfront hotels, ferry terminal, downtown restaurants, wedding venues, and scenic waterfront events. Luxury transportation for special occasions." },
      { name: "Bothell", slug: "bothell", description: "Luxury Bothell limousine service to McMenamins Anderson School, corporate campuses, hotels, University of Washington Bothell, and business events spanning King and Snohomish counties." },
      { name: "Paine Field (PAE)", slug: "paine-field-airport", description: "Premium limousine service to Paine Field in Everett. Convenient luxury transportation for Alaska Airlines commercial flights and private charter services with professional chauffeurs." },
    ]
  },
  pierce: {
    name: "Pierce County",
    description: "Pierce County limousine service specializing in military transport for service members to Joint Base Lewis-McChord (JBLM), Camp Murray, and Tacoma military installations. Professional transportation for active duty personnel, veterans, and military families.",
    cities: [
      { name: "Tacoma", slug: "tacoma", description: "Premier Tacoma limousine service to Joint Base Lewis-McChord (JBLM), military bases, Point Defiance Park, Museum of Glass, Tacoma Dome, downtown hotels, Convention Center, and SEA-TAC Airport. Military transport for service members, veterans, and defense contractors." },
      { name: "Lakewood", slug: "lakewood", description: "Professional Lakewood limo service to Joint Base Lewis-McChord (JBLM), Camp Murray, military installations, hotels near base, Clover Park Technical College, and American Lake area. Specialized military transportation for active duty personnel and families." },
      { name: "Puyallup", slug: "puyallup", description: "Quality Puyallup limousine service to Washington State Fair, downtown hotels, corporate events, casino transportation, and scenic valley locations. Airport transfers to SEA-TAC and military base transportation." },
      { name: "University Place", slug: "university-place", description: "Luxury University Place limo service to Chambers Bay Golf Course, waterfront venues, corporate events, hotels, and PGA tournament transportation. Premium golf event chauffeur service." },
    ]
  },
  other: {
    name: "Extended Service Areas",
    cities: [
      { name: "Spokane", slug: "spokane", description: "Premier Spokane limousine service to Spokane International Airport, downtown hotels, Convention Center, Riverfront Park, corporate events, and Gonzaga University. Eastern Washington luxury transportation." },
      { name: "Wenatchee", slug: "wenatchee", description: "Elegant Wenatchee limo service to Pangborn Memorial Airport, downtown hotels, apple orchards, wine country tours, corporate events, and Columbia River venues. Apple Capital luxury transportation." },
      { name: "Vancouver BC", slug: "vancouver-bc", description: "Premium Vancouver BC limousine service with proper permits and customs clearance. Cross-border luxury transportation to Vancouver International Airport (YVR), downtown hotels, Canada Place, Convention Centre, and corporate events. Licensed international chauffeur service for seamless US-Canada travel." },
      { name: "Portland OR", slug: "portland-or", description: "Professional Portland limousine service to Portland International Airport (PDX), downtown hotels, Convention Center, Pearl District, corporate events, and wine country tours. Oregon luxury transportation for business and leisure travel." },
      { name: "Yakima", slug: "yakima", description: "Quality Yakima limo service to Yakima Air Terminal, downtown hotels, wine valley tours, corporate events, and Central Washington destinations. Premium transportation for business and wine country visits." },
      { name: "Cannon Beach OR", slug: "cannon-beach-or", description: "Elegant Cannon Beach limousine service to coastal resorts, Haystack Rock, beach hotels, wedding venues, and Oregon Coast destinations. Luxury transportation for romantic getaways and special occasions." },
    ]
  }
};

export const allLocations: Location[] = [
  ...counties.king.cities.map(c => ({ ...c, county: "King County" })),
  ...counties.snohomish.cities.map(c => ({ ...c, county: "Snohomish County" })),
  ...counties.pierce.cities.map(c => ({ ...c, county: "Pierce County" })),
  ...counties.other.cities.map(c => ({ ...c, county: undefined })),
];