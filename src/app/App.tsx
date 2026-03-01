import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import { Footer } from '@/app/components/Footer';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';
import { ScrollToTop } from '@/app/components/ScrollToTop';

// CRITICAL: Load HomePage immediately (above-the-fold)
import { HomePage } from '@/app/pages/HomePage';

// LAZY LOAD: All other pages (code splitting for performance)
const ServicesPage = lazy(() => import('@/app/pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AirportTransfersPage = lazy(() => import('@/app/pages/AirportTransfersPage').then(m => ({ default: m.AirportTransfersPage })));
const FleetPage = lazy(() => import('@/app/pages/FleetPage').then(m => ({ default: m.FleetPage })));
const LocationsPage = lazy(() => import('@/app/pages/LocationsPage').then(m => ({ default: m.LocationsPage })));
const LocationDetailPage = lazy(() => import('@/app/pages/LocationDetailPage').then(m => ({ default: m.LocationDetailPage })));
const KingCountyPage = lazy(() => import('@/app/pages/KingCountyPage').then(m => ({ default: m.KingCountyPage })));
const SeattlePage = lazy(() => import('@/app/pages/SeattlePage').then(m => ({ default: m.SeattlePage })));
const BellevuePage = lazy(() => import('@/app/pages/BellevuePage').then(m => ({ default: m.BellevuePage })));
const KirklandPage = lazy(() => import('@/app/pages/KirklandPage').then(m => ({ default: m.KirklandPage })));
const RedmondPage = lazy(() => import('@/app/pages/RedmondPage').then(m => ({ default: m.RedmondPage })));
const RentonPage = lazy(() => import('@/app/pages/RentonPage').then(m => ({ default: m.RentonPage })));
const KentPage = lazy(() => import('@/app/pages/KentPage').then(m => ({ default: m.KentPage })));
const AuburnPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.AuburnPage })));
const FederalWayPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.FederalWayPage })));
const IssaquahPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.IssaquahPage })));
const SammamishPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.SammamishPage })));
const WoodinvillePage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.WoodinvillePage })));
const MercerIslandPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.MercerIslandPage })));
const SeaTacPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.SeaTacPage })));
const TukwilaPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.TukwilaPage })));
const BurienPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.BurienPage })));
const ShorelinePage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.ShorelinePage })));
const MapleValleyPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.MapleValleyPage })));
const CovingtonPage = lazy(() => import('@/app/pages/AllOtherCityPages').then(m => ({ default: m.CovingtonPage })));
const SnohomishCountyPage = lazy(() => import('@/app/pages/SnohomishCountyPage').then(m => ({ default: m.SnohomishCountyPage })));
const EverettPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.EverettPage })));
const LynnwoodPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.LynnwoodPage })));
const EdmondsPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.EdmondsPage })));
const BothellPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.BothellPage })));
const MarysvillePage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.MarysvillePage })));
const MukilteoPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.MukilteoPage })));
const LakeStevensPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.LakeStevensPage })));
const SnohomishCityPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.SnohomishCityPage })));
const MountlakeTerracePage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.MountlakeTerracePage })));
const MillCreekPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.MillCreekPage })));
const ArlingtonPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.ArlingtonPage })));
const MonroePage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.MonroePage })));
const StanwoodPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.StanwoodPage })));
const GraniteFallsPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.GraniteFallsPage })));
const SultanPage = lazy(() => import('@/app/pages/SnohomishCountyCityPages').then(m => ({ default: m.SultanPage })));
const PierceCountyPage = lazy(() => import('@/app/pages/PierceCountyPage').then(m => ({ default: m.PierceCountyPage })));
const TacomaPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.TacomaPage })));
const LakewoodPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.LakewoodPage })));
const PuyallupPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.PuyallupPage })));
const UniversityPlacePage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.UniversityPlacePage })));
const GigHarborPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.GigHarborPage })));
const BonneyLakePage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.BonneyLakePage })));
const SpanawayPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.SpanawayPage })));
const FifePage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.FifePage })));
const SteilacoomPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.SteilacoomPage })));
const DuPontPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.DuPontPage })));
const SumnerPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.SumnerPage })));
const OrtingPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.OrtingPage })));
const GrahamPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.GrahamPage })));
const EdgewoodPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.EdgewoodPage })));
const EatonvillePage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.EatonvillePage })));
const BuckleyPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.BuckleyPage })));
const MiltonPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.MiltonPage })));
const RustonPage = lazy(() => import('@/app/pages/PierceCountyCityPages').then(m => ({ default: m.RustonPage })));
const ServiceDetailPage = lazy(() => import('@/app/pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const BlogsFaqPage = lazy(() => import('@/app/pages/BlogsFaqPage').then(m => ({ default: m.BlogsFaqPage })));
const BlogPage = lazy(() => import('@/app/pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('@/app/pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const AffiliatesPage = lazy(() => import('@/app/pages/AffiliatesPage').then(m => ({ default: m.AffiliatesPage })));
const BookNowPage = lazy(() => import('@/app/pages/BookNowPage').then(m => ({ default: m.BookNowPage })));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white">
          <Navigation />
          <Breadcrumbs />
          <main className="flex-grow bg-white">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Homepage loads immediately (no lazy loading) */}
                <Route path="/" element={<HomePage />} />
                
                {/* All other routes are lazy loaded */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/airport-transfers" element={<AirportTransfersPage />} />
                <Route path="/fleet" element={<FleetPage />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/location" element={<Navigate to="/locations" replace />} />
                <Route path="/location/:slug" element={<LocationDetailPage />} />
                <Route path="/locations/king-county" element={<KingCountyPage />} />
                <Route path="/locations/king-county/seattle" element={<SeattlePage />} />
                <Route path="/locations/king-county/bellevue" element={<BellevuePage />} />
                <Route path="/locations/king-county/kirkland" element={<KirklandPage />} />
                <Route path="/locations/king-county/redmond" element={<RedmondPage />} />
                <Route path="/locations/king-county/renton" element={<RentonPage />} />
                <Route path="/locations/king-county/kent" element={<KentPage />} />
                <Route path="/locations/king-county/auburn" element={<AuburnPage />} />
                <Route path="/locations/king-county/federal-way" element={<FederalWayPage />} />
                <Route path="/locations/king-county/issaquah" element={<IssaquahPage />} />
                <Route path="/locations/king-county/sammamish" element={<SammamishPage />} />
                <Route path="/locations/king-county/woodinville" element={<WoodinvillePage />} />
                <Route path="/locations/king-county/mercer-island" element={<MercerIslandPage />} />
                <Route path="/locations/king-county/seatac" element={<SeaTacPage />} />
                <Route path="/locations/king-county/tukwila" element={<TukwilaPage />} />
                <Route path="/locations/king-county/burien" element={<BurienPage />} />
                <Route path="/locations/king-county/shoreline" element={<ShorelinePage />} />
                <Route path="/locations/king-county/maple-valley" element={<MapleValleyPage />} />
                <Route path="/locations/king-county/covington" element={<CovingtonPage />} />
                <Route path="/locations/snohomish-county" element={<SnohomishCountyPage />} />
                <Route path="/locations/snohomish-county/everett" element={<EverettPage />} />
                <Route path="/locations/snohomish-county/lynnwood" element={<LynnwoodPage />} />
                <Route path="/locations/snohomish-county/edmonds" element={<EdmondsPage />} />
                <Route path="/locations/snohomish-county/bothell" element={<BothellPage />} />
                <Route path="/locations/snohomish-county/marysville" element={<MarysvillePage />} />
                <Route path="/locations/snohomish-county/mukilteo" element={<MukilteoPage />} />
                <Route path="/locations/snohomish-county/lake-stevens" element={<LakeStevensPage />} />
                <Route path="/locations/snohomish-county/snohomish" element={<SnohomishCityPage />} />
                <Route path="/locations/snohomish-county/mountlake-terrace" element={<MountlakeTerracePage />} />
                <Route path="/locations/snohomish-county/mill-creek" element={<MillCreekPage />} />
                <Route path="/locations/snohomish-county/arlington" element={<ArlingtonPage />} />
                <Route path="/locations/snohomish-county/monroe" element={<MonroePage />} />
                <Route path="/locations/snohomish-county/stanwood" element={<StanwoodPage />} />
                <Route path="/locations/snohomish-county/granite-falls" element={<GraniteFallsPage />} />
                <Route path="/locations/snohomish-county/sultan" element={<SultanPage />} />
                <Route path="/locations/pierce-county" element={<PierceCountyPage />} />
                <Route path="/locations/pierce-county/tacoma" element={<TacomaPage />} />
                <Route path="/locations/pierce-county/lakewood" element={<LakewoodPage />} />
                <Route path="/locations/pierce-county/puyallup" element={<PuyallupPage />} />
                <Route path="/locations/pierce-county/university-place" element={<UniversityPlacePage />} />
                <Route path="/locations/pierce-county/gig-harbor" element={<GigHarborPage />} />
                <Route path="/locations/pierce-county/bonney-lake" element={<BonneyLakePage />} />
                <Route path="/locations/pierce-county/spanaway" element={<SpanawayPage />} />
                <Route path="/locations/pierce-county/fife" element={<FifePage />} />
                <Route path="/locations/pierce-county/steilacoom" element={<SteilacoomPage />} />
                <Route path="/locations/pierce-county/du-pont" element={<DuPontPage />} />
                <Route path="/locations/pierce-county/sumner" element={<SumnerPage />} />
                <Route path="/locations/pierce-county/orting" element={<OrtingPage />} />
                <Route path="/locations/pierce-county/graham" element={<GrahamPage />} />
                <Route path="/locations/pierce-county/edgewood" element={<EdgewoodPage />} />
                <Route path="/locations/pierce-county/eatonville" element={<EatonvillePage />} />
                <Route path="/locations/pierce-county/buckley" element={<BuckleyPage />} />
                <Route path="/locations/pierce-county/milton" element={<MiltonPage />} />
                <Route path="/locations/pierce-county/ruston" element={<RustonPage />} />
                <Route path="/service/:slug" element={<ServiceDetailPage />} />
                <Route path="/blogs-faq" element={<BlogsFaqPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/affiliates" element={<AffiliatesPage />} />
                <Route path="/book-now" element={<BookNowPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;