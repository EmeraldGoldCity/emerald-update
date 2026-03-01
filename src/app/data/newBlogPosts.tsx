import { Link } from 'react-router-dom';

// New blog posts content for Emerald City Limos
// These will be integrated into the existing blog system

export const newBlogPosts = {
  // Blog 1: Sea-Tac to Downtown Seattle Complete Guide
  'seatac-airport-to-downtown-seattle-transportation-guide': {
    title: 'The Complete Guide to Getting From Sea-Tac Airport to Downtown Seattle (2025)',
    excerpt: 'Every option for getting from Sea-Tac Airport to downtown Seattle compared — limo, rideshare, taxi, light rail, shuttle. Costs, times, pros & cons. Updated for 2025.',
    image: 'https://images.unsplash.com/photo-1728327208432-782ad594ef7e?w=1080&q=80',
    category: 'Travel Guide',
    date: 'February 17, 2025',
    readTime: '12 min read',
    tags: ['Sea-Tac Airport', 'Downtown Seattle', 'Transportation', 'Travel Guide'],
    relatedLinks: [
      { text: 'Book Airport Transfer', url: '/book-now' },
      { text: 'Airport Transfer Service', url: '/airport-transfers' },
      { text: 'Seattle Location Page', url: '/locations/king-county/seattle' }
    ],
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          You've just landed at Seattle-Tacoma International Airport. You're tired, possibly jet-lagged, and you need to get to your downtown hotel, Airbnb, or meeting as efficiently as possible. But which option actually makes sense for you? We've driven this route thousands of times. Here's the honest breakdown.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Quick Reference: All Your Options</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold">Link Light Rail</span>
              <span>$3 | 38-42 min ride | Budget</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold">Uber/Lyft</span>
              <span>$28-$120 | 20-45 min | Variable</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold">Taxi</span>
              <span>$40-$60 | 20-45 min | Metered</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold">Shared Shuttle</span>
              <span>$18-$25/person | 60-90 min | Slow</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold">Rental Car</span>
              <span>$55-$150/day | 60-90 min | DIY</span>
            </div>
            <div className="flex justify-between py-2 bg-emerald-50 rounded">
              <span className="font-bold">Private Car/Limo</span>
              <span className="font-bold">$85-$175 | 25-40 min | Premium</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Link Light Rail — The Budget Option</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Cost:</strong> $3.00 per adult<br />
          <strong>Time to downtown:</strong> 38-42 minutes<br />
          <strong>Frequency:</strong> Every 8-15 minutes
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Sound Transit's Link Light Rail is objectively the cheapest way to get downtown. The station connects to the airport via a skybridge — about a 5-10 minute walk from baggage claim.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>The good:</strong> Cheap, predictable, immune to traffic. You'll arrive at Westlake Station in about 40 minutes regardless of what I-5 is doing.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>The reality check:</strong> No luggage storage — you're holding everything. During peak hours, it's standing-room only. The walk involves stairs and escalators that feel like a mile with a 50-pound suitcase. After midnight? Out of luck until morning. And when you reach Westlake, you still need to get to your specific hotel.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Best for:</strong> Solo travelers with minimal luggage, budget-conscious tourists, downtown hotel guests near a Link station.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Uber & Lyft — The Familiar Option</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Cost:</strong> $28-$55 standard ($45-$90 XL/Black, up to $120+ surge)<br />
          <strong>Time:</strong> 20-45 minutes depending on traffic<br />
          <strong>Pickup:</strong> 3rd floor of parking garage
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Rideshare is the default for most travelers. But Sea-Tac rideshare has quirks. Pickups happen on the 3rd floor of the parking garage — not curbside. You navigate to your assigned zone and wait. During peak arrivals (4-7 PM), wait times of 15-25 minutes are common.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>The surge pricing problem:</strong> Holiday weekends, bad weather, and major events can double or triple fares. We've seen $120+ for a standard sedan to downtown.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>The cancellation problem:</strong> Drivers can cancel. If you're standing in the garage at 11 PM with kids and bags and your driver cancels, you start over.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Private Car / Limo Service — The Premium Option</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Cost:</strong> $85-$175 flat rate for luxury sedan<br />
          <strong>Time:</strong> 20-35 minutes<br />
          <strong>Pickup:</strong> Curbside at arrivals or meet-and-greet
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A private car or Seattle limo service is the premium tier. You book in advance, a professional chauffeur is assigned, your flight is tracked in real-time, and a luxury vehicle waits when you walk out.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>The experience:</strong> No garage walk. No surge pricing. No cancellations. No vehicle lottery. Professional chauffeur handles luggage, knows optimal routes, delivers you to hotel door. Vehicles are luxury-grade — leather seats, bottled water, phone chargers, climate control.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Most Seattle limo services offer flat-rate pricing that includes tolls, airport fees, and wait time. A luxury sedan from Sea-Tac to downtown runs $85-110 — compared to surge-priced Uber Black ($90-150), it's competitive or cheaper. And the experience gap is enormous.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Best for:</strong> Business travelers, families, groups of 3+, late-night arrivals, anyone with 2+ bags, special occasions, anyone who values guaranteed reliability.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Option</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Cost (1-2 pax)</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Door-to-Door Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Luggage Friendly?</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">After Midnight?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Link Light Rail</td>
                <td className="border border-gray-300 px-4 py-3">$3-6</td>
                <td className="border border-gray-300 px-4 py-3">50-65 min</td>
                <td className="border border-gray-300 px-4 py-3">❌ Limited</td>
                <td className="border border-gray-300 px-4 py-3">❌ No</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">UberX / Lyft</td>
                <td className="border border-gray-300 px-4 py-3">$28-55 ($120 surge)</td>
                <td className="border border-gray-300 px-4 py-3">35-60 min</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ Trunk only</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ Varies</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Taxi</td>
                <td className="border border-gray-300 px-4 py-3">$40-60</td>
                <td className="border border-gray-300 px-4 py-3">30-55 min</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ Trunk + some cabin</td>
                <td className="border border-gray-300 px-4 py-3">✅ Usually</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">Private Car / Limo</td>
                <td className="border border-gray-300 px-4 py-3 font-bold">$85-175 flat</td>
                <td className="border border-gray-300 px-4 py-3 font-bold">25-40 min</td>
                <td className="border border-gray-300 px-4 py-3 font-bold">✅ Full trunk + cabin</td>
                <td className="border border-gray-300 px-4 py-3 font-bold">✅ 24/7 guaranteed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Which Option Is Best for Your Situation?</h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Solo business traveler, carry-on only, arriving 2 PM:</h3>
            <p className="text-gray-700">Light rail is your best bet. Fast, cheap, predictable.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Couple arriving 10 PM with two checked bags:</h3>
            <p className="text-gray-700">Rideshare ($35-55) or private car ($85-95). Private car guarantees door-to-door luxury.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Family of four with stroller, car seat, three suitcases:</h3>
            <p className="text-gray-700">Private SUV or taxi. You physically can't fit in UberX. Pre-booked SUV guarantees space.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Arriving 1:30 AM on red-eye:</h3>
            <p className="text-gray-700">Pre-booked private car is your only reliable option. Light rail closed. Rideshare unreliable at 1:30 AM.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Arriving Thanksgiving week:</h3>
            <p className="text-gray-700">Pre-book something in advance. Thanksgiving surge pricing is brutal. Private car locks in flat rate.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-xl p-8 my-10">
          <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-gray-200 mb-6">
            There's no single "best" way — it depends on your budget, group size, luggage, arrival time, and preferences. What we can tell you from 15 years of driving this route: travelers who pre-plan their airport transportation have a dramatically better experience than those who figure it out in baggage claim at 11 PM with a dead phone.
          </p>
          <Link
            to="/airport-transfers"
            className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold transition-all"
          >
            Learn About Our Airport Service
          </Link>
        </div>
      </>
    )
  },

  // Blog 2: Seattle Wedding Transportation Complete Guide
  'seattle-wedding-transportation-complete-planning-guide': {
    title: 'Seattle Wedding Transportation: The Complete Planning Guide for 2025',
    excerpt: 'Everything you need to know about booking wedding transportation in Seattle. Timelines, vehicle types, costs, venue logistics, and mistakes to avoid. Expert advice from 500+ Seattle weddings.',
    image: 'https://images.unsplash.com/photo-1616137477862-170063810e39?w=1080&q=80',
    category: 'Wedding Guide',
    date: 'February 17, 2025',
    readTime: '14 min read',
    tags: ['Wedding', 'Seattle Weddings', 'Transportation Planning', 'Luxury Limos'],
    relatedLinks: [
      { text: 'Book Wedding Transportation', url: '/book-now' },
      { text: 'Wedding Service Page', url: '/service/wedding-transportation' },
      { text: 'View Our Fleet', url: '/fleet' }
    ],
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          After coordinating transportation for over 500 Seattle-area weddings, we've seen everything that can go right — and everything that can go spectacularly wrong. Here's the definitive guide to planning wedding transportation that runs as smoothly as your vows.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Why Wedding Transportation Deserves More Attention</h3>
          <p className="text-gray-700">
            Transportation is the logistical backbone of your wedding day. When it works flawlessly, nobody notices. When it doesn't, it cascades: bridal party arrives late, ceremony starts behind schedule, photographer loses golden hour, reception timeline compresses, and the DJ rushes the first dance.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Step 1: Map Your Day's Geography</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Before you think about vehicles, start with a map. Pin every location:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
          <li><strong>Getting-ready location(s)</strong> — bride's hotel, groom's hotel</li>
          <li><strong>Ceremony venue</strong></li>
          <li><strong>Photo locations</strong> — if different from ceremony</li>
          <li><strong>Reception venue</strong> — if different from ceremony</li>
          <li><strong>After-party location</strong> — if applicable</li>
          <li><strong>Hotel for wedding night</strong></li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Seattle-Specific Geography Considerations</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
          <li><strong>Queen Anne Hill:</strong> Steep, narrow streets. Stretch limos over 28 feet may not make the Kerry Park turns.</li>
          <li><strong>Ballard Bridge:</strong> Opens for boat traffic. Build in extra 15 minutes around 3-5 PM.</li>
          <li><strong>I-5 through downtown:</strong> Avoid 4-6:30 PM if possible. Difference can be 20 min vs 55 min.</li>
          <li><strong>Ferry-dependent venues:</strong> Bainbridge, Kitsap, Whidbey require ferry coordination. Miss the ferry, miss the wedding.</li>
          <li><strong>Waterfront venues:</strong> Pier 91, Edgewater have specific loading zones and cruise season restrictions (May-October).</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Step 2: How Many Vehicles You Actually Need</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Vehicle 1: Bridal Party Transport</h3>
            <p className="text-gray-700">Bride, bridesmaids, flower girls. Stretch limo (8-10) or party bus (12-20). Typically stays with party 4-6 hours.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Vehicle 2: Groom's Party Transport</h3>
            <p className="text-gray-700">Groom and groomsmen from different starting location. Luxury SUV (6) or second stretch limo.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Vehicle 3: Family Transport</h3>
            <p className="text-gray-700">Parents and grandparents who flew in. Mercedes Sprinter or luxury sedan. Often overlooked.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Vehicle 4: Guest Shuttles (Optional but Valuable)</h3>
            <p className="text-gray-700">Sprinter or party bus running loops between hotel block and venue. Prevents parking chaos.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Vehicle 5: Getaway Car</h3>
            <p className="text-gray-700">Grand exit. Sparkler send-off. Classic sedan, vintage car, or decorated stretch. Last 30 minutes only.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Step 3: Choose the Right Vehicle Types</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Stretch Limousine (8-10 seats)</h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Best for:</strong> Classic wedding look, bridal party excitement</p>
            <p className="text-sm text-gray-700 mb-3"><strong>Limitations:</strong> Difficult parking, can't navigate very steep/narrow streets, tight for wedding gowns</p>
            <p className="text-sm text-gray-700"><strong>Typical cost:</strong> $125-175/hr (5-8 hr booking)</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Luxury SUV — Escalade/Navigator (5-6 seats)</h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Best for:</strong> Modern weddings, easier gown access, venue flexibility</p>
            <p className="text-sm text-gray-700 mb-3"><strong>Advantages:</strong> High step-in, spacious cabin, can access any venue</p>
            <p className="text-sm text-gray-700"><strong>Typical cost:</strong> $95-125/hr (4-6 hr booking)</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Mercedes Sprinter Van (12-14 seats)</h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Best for:</strong> Larger bridal parties, guest shuttles</p>
            <p className="text-sm text-gray-700 mb-3"><strong>Features:</strong> Stand-up height, configurable seating, luggage space</p>
            <p className="text-sm text-gray-700"><strong>Typical cost:</strong> $135-175/hr (4-6 hr booking)</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Party Bus (16-30 seats)</h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Best for:</strong> Large parties who want mobile celebration</p>
            <p className="text-sm text-gray-700 mb-3"><strong>Note:</strong> Energy varies significantly between 3 PM vs 10 PM groups</p>
            <p className="text-sm text-gray-700"><strong>Typical cost:</strong> $175-250/hr (5-8 hr booking)</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Step 4: Build a Realistic Timeline</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Sample Timeline: Saturday 4 PM Ceremony</h3>
          <div className="space-y-2 text-sm">
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">11:00 AM</span>
              <span className="text-gray-700">Limo arrives at bride's hotel for getting-ready photos</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">1:30 PM</span>
              <span className="text-gray-700">SUV arrives at groom's hotel</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">2:00 PM</span>
              <span className="text-gray-700">Sedan arrives for family pickup</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">3:00 PM</span>
              <span className="text-gray-700">Bridal party limo departs for ceremony venue</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">3:30 PM</span>
              <span className="text-gray-700">Bridal party arrives (30 min buffer before ceremony)</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">4:00 PM</span>
              <span className="text-gray-700">Ceremony begins</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">5:00 PM</span>
              <span className="text-gray-700">Wedding party loads for photo location (Kerry Park)</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">6:15 PM</span>
              <span className="text-gray-700">Depart Kerry Park for reception</span>
            </div>
            <div className="flex py-2 border-b border-gray-200">
              <span className="font-semibold w-24">7:00 PM</span>
              <span className="text-gray-700">Grand entrance at reception</span>
            </div>
            <div className="flex py-2">
              <span className="font-semibold w-24">11:00 PM</span>
              <span className="text-gray-700">Grand exit. Getaway sedan departs with couple.</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4"><strong>Critical:</strong> Build 30 minutes of buffer into every segment. Seattle traffic is unpredictable.</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">What Wedding Transportation Actually Costs</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Vehicle</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Hourly Rate</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Typical Hours</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Typical Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Luxury Sedan</td>
                <td className="border border-gray-300 px-4 py-3">$75-95/hr</td>
                <td className="border border-gray-300 px-4 py-3">2-3 hrs</td>
                <td className="border border-gray-300 px-4 py-3">$150-285</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Luxury SUV</td>
                <td className="border border-gray-300 px-4 py-3">$95-125/hr</td>
                <td className="border border-gray-300 px-4 py-3">4-6 hrs</td>
                <td className="border border-gray-300 px-4 py-3">$380-750</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Stretch Limo</td>
                <td className="border border-gray-300 px-4 py-3">$125-175/hr</td>
                <td className="border border-gray-300 px-4 py-3">5-8 hrs</td>
                <td className="border border-gray-300 px-4 py-3">$625-1,400</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Sprinter Van</td>
                <td className="border border-gray-300 px-4 py-3">$135-175/hr</td>
                <td className="border border-gray-300 px-4 py-3">4-6 hrs</td>
                <td className="border border-gray-300 px-4 py-3">$540-1,050</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Party Bus</td>
                <td className="border border-gray-300 px-4 py-3">$175-250/hr</td>
                <td className="border border-gray-300 px-4 py-3">5-8 hrs</td>
                <td className="border border-gray-300 px-4 py-3">$875-2,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Total wedding transportation budget:</strong> $1,000-3,500 depending on party size and hours. This represents 2-5% of the average Seattle wedding budget — a small investment for the logistical backbone of your day.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">The 7 Most Common Mistakes</h2>

        <div className="space-y-4 mb-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-900 mb-1">Mistake 1: Booking based on vehicle photos alone</h3>
            <p className="text-sm text-gray-700">That gorgeous stretch limo might be 15 years old. Ask for specific vehicle year and request current photos.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-900 mb-1">Mistake 2: Not doing a venue drive-through</h3>
            <p className="text-sm text-gray-700">Ask if they've served your venue before. Request drive-by to check driveway width, turning radius, staging areas.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-900 mb-1">Mistake 3: Underestimating hours needed</h3>
            <p className="text-sm text-gray-700">"4 hours" sounds enough until you add pickup, ceremony wait, photo stops, reception drive. Book 6-8 hours.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-900 mb-1">Mistake 4: Forgetting family transportation</h3>
            <p className="text-sm text-gray-700">Your parents and grandparents need rides too. Grandma shouldn't take Uber in her formal dress.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-900 mb-1">Mistake 5: Not sharing timeline with provider</h3>
            <p className="text-sm text-gray-700">Driver should have your timeline, coordinator's phone, and both parties' contacts. Information gaps cause delays.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-900 mb-1">Mistake 6: Assuming rideshare works for guests</h3>
            <p className="text-sm text-gray-700">"Everyone can Uber" fails when 150 guests request rides simultaneously from venue with no cell service.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-900 mb-1">Mistake 7: No rain plan for loading/unloading</h3>
            <p className="text-sm text-gray-700">This is Seattle. It will probably rain. Where does limo pull up? Covered area? Who holds umbrellas?</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">When to Book</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
          <li><strong>8-12 months out:</strong> Book primary bridal party vehicles. Peak-season Saturday evenings sell out fastest.</li>
          <li><strong>4-6 months out:</strong> Book family transportation and guest shuttles.</li>
          <li><strong>2-4 weeks out:</strong> Send detailed timeline to provider.</li>
          <li><strong>1 week out:</strong> Final confirmation call.</li>
        </ul>

        <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-xl p-8 my-10">
          <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Perfect Day?</h3>
          <p className="text-gray-200 mb-6">
            Your wedding transportation is the invisible infrastructure of your biggest day. When it works perfectly, nobody talks about it. When it fails, it's the story everyone remembers. Invest the time to plan it properly.
          </p>
          <Link
            to="/service/wedding-transportation"
            className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold transition-all"
          >
            Explore Wedding Transportation
          </Link>
        </div>
      </>
    )
  }
};

export default newBlogPosts;
