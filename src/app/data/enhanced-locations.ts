// Enhanced location data with complete Seattle metro area coverage
// Optimized for SEO with ZIP codes, coordinates, landmarks, and pricing

export interface EnhancedLocation {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  population: number;
  medianIncome: number;
  distance: number; // miles from Seattle
  coordinates: {
    lat: number;
    lng: number;
  };
  landmarks: string[];
  neighborhoods: string[];
  description: string;
  metaDescription: string;
  keywords: string[];
}

export const ENHANCED_LOCATIONS: EnhancedLocation[] = [
  // KING COUNTY - Premium Eastside
  {
    name: "Bellevue",
    slug: "bellevue",
    county: "King County",
    zipCodes: ["98004", "98005", "98006", "98007", "98008", "98009"],
    population: 150000,
    medianIncome: 138750,
    distance: 10,
    coordinates: { lat: 47.6101, lng: -122.2015 },
    landmarks: [
      "Bellevue Square",
      "Bellevue Downtown Park",
      "Meydenbauer Center",
      "The Bravern",
      "Lincoln Square"
    ],
    neighborhoods: ["Downtown", "Crossroads", "Eastgate", "Somerset", "West Bellevue"],
    description: "Premium Bellevue limousine service to Bellevue Square, downtown hotels, Lincoln Square, corporate offices, and Meydenbauer Center. Professional transportation for business executives and special occasions throughout all Bellevue neighborhoods including Downtown, Somerset, and Crossroads.",
    metaDescription: "Luxury Bellevue limo service from $110. Airport transfers, corporate car service, wedding limos. Serving all Bellevue ZIP codes 98004-98009. Book 24/7.",
    keywords: [
      "bellevue limo service",
      "bellevue car service",
      "bellevue airport limo",
      "luxury transportation bellevue",
      "bellevue corporate car service",
      "bellevue wedding limo"
    ]
  },
  {
    name: "Mercer Island",
    slug: "mercer-island",
    county: "King County",
    zipCodes: ["98040"],
    population: 25820,
    medianIncome: 168333,
    distance: 8,
    coordinates: { lat: 47.5707, lng: -122.2221 },
    landmarks: [
      "Luther Burbank Park",
      "Mercer Island Community Center",
      "Mercer Island Country Club",
      "Clarke Beach Park"
    ],
    neighborhoods: ["North End", "Town Center", "South End", "East Seattle"],
    description: "Exclusive Mercer Island luxury limousine service to waterfront estates, Luther Burbank Park, Country Club, and premium island destinations. Elite chauffeur service for high-net-worth residents and guests.",
    metaDescription: "Premium Mercer Island limo service from $100. Luxury car service for waterfront estates. Serving ZIP 98040. Elite chauffeur service 24/7.",
    keywords: [
      "mercer island limo",
      "mercer island car service",
      "mercer island luxury transportation",
      "mercer island airport service",
      "mercer island chauffeur"
    ]
  },
  {
    name: "Kirkland",
    slug: "kirkland",
    county: "King County",
    zipCodes: ["98033", "98034", "98083"],
    population: 92175,
    medianIncome: 125833,
    distance: 12,
    coordinates: { lat: 47.6815, lng: -122.2087 },
    landmarks: [
      "Kirkland Waterfront",
      "Marina Park",
      "Google Kirkland Campus",
      "Juanita Beach Park",
      "Carillon Point"
    ],
    neighborhoods: ["Downtown", "Juanita", "Totem Lake", "Finn Hill", "Kingsgate"],
    description: "Luxury Kirkland limo service to waterfront hotels, downtown Kirkland, Marina Park, Google campus, and Lake Washington venues. Executive transportation and wedding car service throughout Juanita, Totem Lake, and all Kirkland neighborhoods.",
    metaDescription: "Kirkland limo service from $115. Waterfront transportation, corporate car service, event limos. Serving all Kirkland ZIP codes. Book now!",
    keywords: [
      "kirkland limo service",
      "kirkland car service",
      "kirkland waterfront transportation",
      "kirkland corporate limo",
      "kirkland airport service"
    ]
  },
  {
    name: "Redmond",
    slug: "redmond",
    county: "King County",
    zipCodes: ["98052", "98053", "98073"],
    population: 73256,
    medianIncome: 131250,
    distance: 16,
    coordinates: { lat: 47.6740, lng: -122.1215 },
    landmarks: [
      "Microsoft Campus",
      "Marymoor Park",
      "Redmond Town Center",
      "Sammamish River Trail",
      "Nintendo of America"
    ],
    neighborhoods: ["Downtown", "Overlake", "Grass Lawn", "Education Hill", "Bear Creek"],
    description: "Professional Redmond limousine service to Microsoft campus, corporate headquarters, Redmond Town Center, Marymoor Park, and tech company events. Executive car service for business travel throughout Overlake and all Redmond neighborhoods.",
    metaDescription: "Redmond limo service from $125. Microsoft campus transportation, corporate car service, airport transfers. Serving ZIP 98052-98073. 24/7 availability.",
    keywords: [
      "redmond limo service",
      "microsoft campus transportation",
      "redmond corporate car service",
      "redmond airport limo",
      "redmond chauffeur service"
    ]
  },
  {
    name: "Medina",
    slug: "medina",
    county: "King County",
    zipCodes: ["98039"],
    population: 3267,
    medianIncome: 186929,
    distance: 10,
    coordinates: { lat: 47.6165, lng: -122.2380 },
    landmarks: [
      "Medina Beach Park",
      "Medina Golf & Country Club",
      "Overlake Golf & Country Club",
      "Lake Washington Estates"
    ],
    neighborhoods: ["The Point", "Evergreen Point", "Fairweather Bay"],
    description: "Ultra-exclusive Medina luxury limousine service to waterfront estates, private clubs, and premium lakefront destinations. Discreet, professional chauffeur service for Seattle's most affluent community.",
    metaDescription: "Exclusive Medina limo service from $110. Ultra-luxury transportation for waterfront estates. ZIP 98039. Elite discretion guaranteed.",
    keywords: [
      "medina limo service",
      "medina luxury car service",
      "medina chauffeur",
      "medina waterfront transportation",
      "medina private transportation"
    ]
  },
  {
    name: "Sammamish",
    slug: "sammamish",
    county: "King County",
    zipCodes: ["98074", "98075"],
    population: 67455,
    medianIncome: 142500,
    distance: 20,
    coordinates: { lat: 47.6163, lng: -122.0356 },
    landmarks: [
      "Beaver Lake Park",
      "Pine Lake",
      "Sammamish Commons",
      "Big Rock Park",
      "Klahanie Shopping Center"
    ],
    neighborhoods: ["Klahanie", "Sahalee", "Trossachs", "East Sammamish Plateau"],
    description: "Exclusive Sammamish limousine service to Plateau communities, Sahalee estates, corporate events, and luxury homes. Premium chauffeur service for executives and special occasions throughout Klahanie and East Sammamish.",
    metaDescription: "Sammamish limo service from $130. Plateau luxury transportation, corporate car service. Serving ZIP 98074-98075. Professional chauffeurs 24/7.",
    keywords: [
      "sammamish limo service",
      "sammamish car service",
      "sammamish plateau transportation",
      "sammamish airport limo",
      "sahalee limo service"
    ]
  },
  {
    name: "Issaquah",
    slug: "issaquah",
    county: "King County",
    zipCodes: ["98027", "98029"],
    population: 39509,
    medianIncome: 132500,
    distance: 18,
    coordinates: { lat: 47.5301, lng: -122.0326 },
    landmarks: [
      "Gilman Village",
      "Tiger Mountain",
      "Cougar Mountain Zoo",
      "Issaquah Salmon Hatchery",
      "Village Theatre"
    ],
    neighborhoods: ["Central Issaquah", "Talus", "Providence Point", "Grand Ridge"],
    description: "Premium Issaquah limousine service to Gilman Village, Tiger Mountain venues, corporate events, and Issaquah wedding locations. Professional transportation throughout Providence Point and all Issaquah communities.",
    metaDescription: "Issaquah limo service from $125. Luxury transportation to Tiger Mountain, corporate events, weddings. ZIP 98027-98029. Book online now!",
    keywords: [
      "issaquah limo service",
      "issaquah car service",
      "issaquah airport transportation",
      "issaquah wedding limo",
      "issaquah corporate transportation"
    ]
  },
  {
    name: "Woodinville",
    slug: "woodinville",
    county: "King County",
    zipCodes: ["98072", "98077"],
    population: 13069,
    medianIncome: 118750,
    distance: 20,
    coordinates: { lat: 47.7543, lng: -122.1632 },
    landmarks: [
      "Chateau Ste. Michelle",
      "Columbia Winery",
      "Redhook Brewery",
      "Hollywood Schoolhouse",
      "TPC Snoqualmie Ridge"
    ],
    neighborhoods: ["Downtown", "Wellington", "Trilogy at Redmond Ridge"],
    description: "Premier Woodinville limo service to TPC Snoqualmie Ridge golf events, wine country tours, Chateau Ste. Michelle, Columbia Winery, wedding venues, and corporate golf tournaments. Luxury transportation for PGA events and wine tasting tours throughout Woodinville wine country.",
    metaDescription: "Woodinville limo service from $140. Wine tour transportation, golf event limos, winery tours. Designated driver service. Book your tour!",
    keywords: [
      "woodinville limo service",
      "woodinville wine tour transportation",
      "woodinville winery limo",
      "chateau ste michelle transportation",
      "woodinville golf event limo"
    ]
  },
  {
    name: "Renton",
    slug: "renton",
    county: "King County",
    zipCodes: ["98055", "98056", "98057", "98058", "98059"],
    population: 105700,
    medianIncome: 101250,
    distance: 12,
    coordinates: { lat: 47.4829, lng: -122.2171 },
    landmarks: [
      "The Landing",
      "Gene Coulon Memorial Beach Park",
      "Renton Municipal Airport",
      "Boeing Renton Factory",
      "Henry Moses Aquatic Center"
    ],
    neighborhoods: ["Downtown", "Highlands", "Kennydale", "Fairwood", "East Renton"],
    description: "Reliable Renton limo service to Boeing facilities, The Landing shopping center, Renton hotels, corporate campuses, and SEA-TAC Airport transfers. Professional transportation throughout Fairwood, Highlands, and all Renton neighborhoods.",
    metaDescription: "Renton limo service from $100. Boeing transportation, airport transfers, corporate car service. All Renton ZIP codes. Book 24/7.",
    keywords: [
      "renton limo service",
      "renton car service",
      "renton airport transportation",
      "boeing renton transportation",
      "renton corporate limo"
    ]
  },
  {
    name: "Kent",
    slug: "kent",
    county: "King County",
    zipCodes: ["98030", "98031", "98032", "98035", "98042"],
    population: 136588,
    medianIncome: 100500,
    distance: 20,
    coordinates: { lat: 47.3809, lng: -122.2348 },
    landmarks: [
      "ShoWare Center",
      "Woodland Park",
      "Green River Natural Resources Area",
      "Kent Station",
      "accesso ShoWare Center"
    ],
    neighborhoods: ["Downtown", "East Hill", "West Hill", "Valley", "Panther Lake"],
    description: "Quality Kent limousine service to ShoWare Center events, Kent Station, corporate facilities, hotels, and event venues throughout Kent Valley. Professional airport transportation to SEA-TAC and Boeing Field.",
    metaDescription: "Kent limo service from $115. Event transportation, corporate car service, airport transfers. Serving all Kent ZIP codes. Book online!",
    keywords: [
      "kent limo service",
      "kent car service",
      "showare center transportation",
      "kent airport limo",
      "kent corporate transportation"
    ]
  },
  {
    name: "Auburn",
    slug: "auburn",
    county: "King County",
    zipCodes: ["98001", "98002", "98092"],
    population: 82446,
    medianIncome: 100250,
    distance: 25,
    coordinates: { lat: 47.3073, lng: -122.2285 },
    landmarks: [
      "White River Valley Museum",
      "Muckleshoot Casino",
      "Emerald Downs",
      "Game Farm Park",
      "Auburn Performing Arts Center"
    ],
    neighborhoods: ["Downtown", "Lea Hill", "West Hill", "Lakeland Hills"],
    description: "Elegant Auburn limo service to Muckleshoot Casino, Emerald Downs racing events, corporate events, and Auburn wedding venues. Luxury transportation for special occasions, casino trips, and horseracing events.",
    metaDescription: "Auburn limo service from $120. Casino transportation, Emerald Downs limos, corporate car service. All Auburn areas. Book 24/7!",
    keywords: [
      "auburn limo service",
      "muckleshoot casino transportation",
      "emerald downs limo",
      "auburn car service",
      "auburn wedding limo"
    ]
  },
  {
    name: "Federal Way",
    slug: "federal-way",
    county: "King County",
    zipCodes: ["98003", "98023", "98063"],
    population: 101030,
    medianIncome: 103750,
    distance: 25,
    coordinates: { lat: 47.3223, lng: -122.3126 },
    landmarks: [
      "Wild Waves Theme Park",
      "Dash Point State Park",
      "Celebration Park",
      "Kobayashi Park",
      "Weyerhaeuser Campus"
    ],
    neighborhoods: ["Steel Lake", "Twin Lakes", "Brooklake", "Campus"],
    description: "Premium Federal Way limousine service to hotels, The Commons shopping center, Wild Waves Theme Park, corporate locations, and SEA-TAC Airport. Professional family transportation and corporate car service.",
    metaDescription: "Federal Way limo service from $120. Theme park transportation, corporate car service, airport transfers. All ZIP codes. Book now!",
    keywords: [
      "federal way limo service",
      "federal way car service",
      "wild waves transportation",
      "federal way airport limo",
      "federal way corporate transportation"
    ]
  },

  // SNOHOMISH COUNTY
  {
    name: "Bothell",
    slug: "bothell",
    county: "Snohomish County",
    zipCodes: ["98011", "98012", "98021", "98041"],
    population: 47505,
    medianIncome: 112500,
    distance: 15,
    coordinates: { lat: 47.7623, lng: -122.2054 },
    landmarks: [
      "McMenamins Anderson School",
      "Bothell Landing",
      "Burke-Gilman Trail",
      "University of Washington Bothell",
      "North Creek Trail"
    ],
    neighborhoods: ["Downtown", "Canyon Park", "North Creek", "Queensborough"],
    description: "Luxury Bothell limousine service to McMenamins Anderson School, corporate campuses, hotels, University of Washington Bothell, and business events spanning King and Snohomish counties. Professional transportation throughout Canyon Park and North Creek business districts.",
    metaDescription: "Bothell limo service from $105. UW Bothell transportation, corporate car service, airport transfers. All Bothell ZIP codes. Book 24/7!",
    keywords: [
      "bothell limo service",
      "bothell car service",
      "uw bothell transportation",
      "bothell corporate limo",
      "bothell airport service"
    ]
  },
  {
    name: "Edmonds",
    slug: "edmonds",
    county: "Snohomish County",
    zipCodes: ["98020", "98026"],
    population: 42853,
    medianIncome: 104500,
    distance: 15,
    coordinates: { lat: 47.8107, lng: -122.3774 },
    landmarks: [
      "Edmonds Ferry Terminal",
      "Edmonds Underwater Park",
      "Brackett's Landing",
      "Olympic Beach",
      "Edmonds Center for the Arts"
    ],
    neighborhoods: ["Downtown", "Woodway", "Five Corners", "Bowl"],
    description: "Elegant Edmonds limo service to waterfront hotels, ferry terminal, downtown restaurants, wedding venues, and scenic waterfront events. Luxury transportation for special occasions, ferry connections, and waterfront dining.",
    metaDescription: "Edmonds limo service from $105. Waterfront transportation, ferry terminal service, wedding limos. ZIP 98020-98026. Book online!",
    keywords: [
      "edmonds limo service",
      "edmonds car service",
      "edmonds ferry transportation",
      "edmonds waterfront limo",
      "edmonds wedding transportation"
    ]
  },
  {
    name: "Lynnwood",
    slug: "lynnwood",
    county: "Snohomish County",
    zipCodes: ["98036", "98037", "98046", "98087"],
    population: 38568,
    medianIncome: 106250,
    distance: 12,
    coordinates: { lat: 47.8209, lng: -122.3151 },
    landmarks: [
      "Alderwood Mall",
      "Lynnwood Convention Center",
      "Wilcox Park",
      "Lynnwood Recreation Center",
      "Scriber Lake Park"
    ],
    neighborhoods: ["Alderwood", "Meadowdale", "Scriber Lake", "Martha Lake"],
    description: "Premium Lynnwood limousine service to Convention Center, Alderwood Mall, hotels, corporate facilities, and SEA-TAC Airport transfers. Professional business car service throughout Alderwood and all Lynnwood neighborhoods.",
    metaDescription: "Lynnwood limo service from $100. Convention center transportation, corporate car service, mall events. All ZIP codes. Book 24/7!",
    keywords: [
      "lynnwood limo service",
      "lynnwood car service",
      "lynnwood convention center transportation",
      "alderwood mall limo",
      "lynnwood airport service"
    ]
  },
  {
    name: "Everett",
    slug: "everett",
    county: "Snohomish County",
    zipCodes: ["98201", "98203", "98204", "98208"],
    population: 111475,
    medianIncome: 108750,
    distance: 30,
    coordinates: { lat: 47.9790, lng: -122.2021 },
    landmarks: [
      "Boeing Factory Tour",
      "Paine Field Airport",
      "Everett Marina",
      "Schack Art Center",
      "Jetty Island",
      "Angel of the Winds Arena"
    ],
    neighborhoods: ["Downtown", "Port Gardner", "Riverside", "Silver Lake", "Rucker Hill"],
    description: "Professional Everett limousine service to Paine Field Airport, Boeing Everett Factory tours, Angel of the Winds Arena, waterfront hotels, and corporate events. Premium transportation for Boeing tours and Paine Field commercial flights.",
    metaDescription: "Everett limo service from $145. Boeing tour transportation, Paine Field airport service, arena events. All Everett ZIP codes. Book now!",
    keywords: [
      "everett limo service",
      "paine field transportation",
      "boeing tour limo",
      "everett car service",
      "angel of the winds transportation"
    ]
  },

  // PIERCE COUNTY
  {
    name: "Tacoma",
    slug: "tacoma",
    county: "Pierce County",
    zipCodes: ["98402", "98403", "98404", "98405", "98406", "98407", "98408", "98409"],
    population: 219346,
    medianIncome: 107500,
    distance: 35,
    coordinates: { lat: 47.2529, lng: -122.4443 },
    landmarks: [
      "Museum of Glass",
      "Point Defiance Park",
      "Tacoma Dome",
      "Ruston Way Waterfront",
      "Joint Base Lewis-McChord",
      "LeMay Car Museum",
      "Tacoma Art Museum"
    ],
    neighborhoods: ["Downtown", "Stadium District", "Old Town", "North End", "Proctor"],
    description: "Premier Tacoma limousine service to Joint Base Lewis-McChord (JBLM), military bases, Point Defiance Park, Museum of Glass, Tacoma Dome, downtown hotels, Convention Center, and SEA-TAC Airport. Military transport for service members, veterans, and defense contractors.",
    metaDescription: "Tacoma limo service from $145. JBLM military transportation, airport transfers, event limos. All Tacoma ZIP codes. 24/7 service!",
    keywords: [
      "tacoma limo service",
      "jblm transportation",
      "tacoma car service",
      "tacoma dome limo",
      "tacoma military transportation",
      "tacoma airport service"
    ]
  },
  {
    name: "Puyallup",
    slug: "puyallup",
    county: "Pierce County",
    zipCodes: ["98371", "98372", "98373", "98374"],
    population: 42973,
    medianIncome: 103750,
    distance: 40,
    coordinates: { lat: 47.1854, lng: -122.2929 },
    landmarks: [
      "Washington State Fair",
      "Ezra Meeker Mansion",
      "Pioneer Park",
      "Puyallup Fair & Events Center",
      "Bradley Lake"
    ],
    neighborhoods: ["Downtown", "South Hill", "Summit", "Firgrove"],
    description: "Quality Puyallup limousine service to Washington State Fair, downtown hotels, corporate events, casino transportation, and scenic valley locations. Airport transfers to SEA-TAC and special event transportation.",
    metaDescription: "Puyallup limo service from $150. State Fair transportation, corporate car service, airport transfers. All ZIP codes. Book your ride!",
    keywords: [
      "puyallup limo service",
      "washington state fair transportation",
      "puyallup car service",
      "puyallup airport limo",
      "puyallup event transportation"
    ]
  },
  {
    name: "Gig Harbor",
    slug: "gig-harbor",
    county: "Pierce County",
    zipCodes: ["98329", "98332", "98335"],
    population: 11301,
    medianIncome: 115000,
    distance: 45,
    coordinates: { lat: 47.3295, lng: -122.5807 },
    landmarks: [
      "Gig Harbor Waterfront",
      "Harbor History Museum",
      "Sehmel Homestead Park",
      "Kopachuck State Park",
      "Canterwood Golf Club"
    ],
    neighborhoods: ["Downtown", "Artondale", "Wollochet", "Purdy"],
    description: "Elegant Gig Harbor limousine service to waterfront hotels, Harbor History Museum, Canterwood estates, wedding venues, and scenic peninsula destinations. Luxury transportation for special occasions and waterfront events.",
    metaDescription: "Gig Harbor limo service from $155. Waterfront transportation, wedding limos, corporate car service. All peninsula areas. Book now!",
    keywords: [
      "gig harbor limo service",
      "gig harbor car service",
      "gig harbor waterfront transportation",
      "canterwood limo",
      "gig harbor wedding transportation"
    ]
  },
  {
    name: "Olympia",
    slug: "olympia",
    county: "Thurston County",
    zipCodes: ["98501", "98502", "98503", "98506", "98512", "98513", "98516"],
    population: 55605,
    medianIncome: 108750,
    distance: 60,
    coordinates: { lat: 47.0379, lng: -122.9007 },
    landmarks: [
      "Washington State Capitol",
      "Percival Landing",
      "Tumwater Falls Park",
      "Billy Frank Jr. Nisqually Wildlife Refuge",
      "Hands On Children's Museum"
    ],
    neighborhoods: ["Downtown", "West Olympia", "Eastside", "Northeast"],
    description: "Premium Olympia limousine service to Washington State Capitol, government facilities, Percival Landing, hotels, corporate events, and SEA-TAC Airport. Professional transportation for state officials and business travelers.",
    metaDescription: "Olympia limo service from $165. State Capitol transportation, government car service, airport transfers. All Olympia ZIP codes. Book 24/7!",
    keywords: [
      "olympia limo service",
      "olympia car service",
      "washington state capitol transportation",
      "olympia airport limo",
      "olympia government transportation"
    ]
  }
];

// Helper functions
export function getLocationBySlug(slug: string): EnhancedLocation | undefined {
  return ENHANCED_LOCATIONS.find(loc => loc.slug === slug);
}

export function getLocationsByCounty(county: string): EnhancedLocation[] {
  return ENHANCED_LOCATIONS.filter(loc => loc.county === county);
}

export function getPremiumLocations(minIncome: number = 100000): EnhancedLocation[] {
  return ENHANCED_LOCATIONS.filter(loc => loc.medianIncome >= minIncome);
}

export function getNearbyLocations(maxDistance: number = 20): EnhancedLocation[] {
  return ENHANCED_LOCATIONS.filter(loc => loc.distance <= maxDistance);
}

// Calculate pricing based on distance
export function calculatePricing(distance: number): { sedan: number; suv: number } {
  const baseFare = 75;
  const perMile = 2;
  
  const sedan = baseFare + Math.round(distance * perMile);
  const suv = sedan + 35; // SUV premium
  
  return { sedan, suv };
}
