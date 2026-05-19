import type { ImageMetadata } from 'astro';

/* ── Fleet hero ─────────────────────────────────────────────── */
import fleetHero from '@/assets/images/fleet/hero/fleet-hero.png';

/* ── Cadillac Escalade ESV ──────────────────────────────────── */
import escalade from '@/assets/images/fleet/cadillac/escalade.png';
import escaladeFront from '@/assets/images/fleet/cadillac/cadillac-esv-cockpit.png';
import escaladeSide from '@/assets/images/fleet/cadillac/cadillac-side.webp';
import escaladeRear from '@/assets/images/fleet/cadillac/cadillac-esv-rear.png';
import escaladeInterior from '@/assets/images/fleet/cadillac/escalade-inside1.jpeg';

/* ── Cadillac XT6 ───────────────────────────────────────────── */
import cadillacXt6 from '@/assets/images/fleet/cadillac/cadillac-xt6.png';
import cadillacExteriorXt6 from '@/assets/images/fleet/cadillac/cadillac-exterior-xt6.png';
import cadillacRearCabinXt6 from '@/assets/images/fleet/cadillac/cadillac-interior-xt6.png';


/* ── Lincoln Navigator L ────────────────────────────────────── */
import navigatorPhoto from '@/assets/images/fleet/lincoln/luxury-sedan.png';
import navigatorInterior from '@/assets/images/fleet/lincoln/lincoln-rear.png';
import navigatorHero from '@/assets/images/fleet/lincoln/lincoln-hero.png';

/* ── Mercedes-Benz Sprinter ─────────────────────────────────── */
import sprinterMain from '@/assets/images/fleet/sprinter/sprinter-hero.png';
import sprinterCabin from '@/assets/images/fleet/sprinter/sprinter-interior.png';
import sprinterInterior from '@/assets/images/fleet/sprinter/SPRINTER-INSIDE.jpeg';


/* ── Mercedes-Benz S-Class ──────────────────────────────────── */
import mercedesMain from '@/assets/images/fleet/mercedes/mercedes-exterior.png';
import mercedesInterior from '@/assets/images/fleet/mercedes/mercedes-rear-cabin.png';
import mercedesInterior2 from '@/assets/images/fleet/mercedes/s-class-hero.png';

/* ── Lincoln Town Car Stretch / Limo ────────────────────────── */
import limoMain from '@/assets/images/fleet/limo/limo.png';
import limoInterior from '@/assets/images/fleet/limo/interior.png';

/* ── Party Bus ──────────────────────────────────── */
import partyBusHero from '@/assets/images/fleet/partybus/party-bus-exterior.png';
import partyBusInterior from '@/assets/images/fleet/partybus/partybus-interior.png';
import partyBusRear from '@/assets/images/fleet/partybus/partybus-rear.png';



/* ── Freightliner Minibus ───────────────────────────────────── */
import freightlinerMain from '@/assets/images/fleet/freight-liner/freightliner-exterior.png';
import freightlinerExterior from '@/assets/images/fleet/freight-liner/freightliner.webp';
import freightlinerInterior from '@/assets/images/fleet/freight-liner/freightliner-interior.png';

/* ── Coach ────────────────────────────────────────────── */
import motorCoachMain from '@/assets/images/fleet/coach/coachbus-hero.png';
import coachInterior from '@/assets/images/fleet/coach/coachbus-interior.png';
import coachRear from '@/assets/images/fleet/coach/coachbus-rear.png';




/* ── Rolls-Royce Ghost ──────────────────────────────────────── */
import cullinanMain from '@/assets/images/fleet/rolls-royce/cullinan-exterior.png';
import cullinanExterior2 from '@/assets/images/fleet/rolls-royce/cullinan-exterior-2.png';
import cullinanRearCabin from '@/assets/images/fleet/rolls-royce/cullinan-interior.png';
import cullinanInterior2 from '@/assets/images/fleet/rolls-royce/cullinan-interior-2.png';
import cullinanExterior from '@/assets/images/fleet/rolls-royce/rolls-royce.png';

/* ── BMW X1 ─────────────────────────────────────────────────── */
import bmwX1 from '@/assets/images/fleet/bmw/bmw-x1.png';

/* ── Locations king ──────────────────────────────────────────────── */
import seattle from '@/assets/locations/king/seattle-landmark.jpg';
import bellevue from '@/assets/locations/king/Bellevue-landmark.jpg';
import redmond from '@/assets/locations/king/Redmond-landmark.webp';
import renton from '@/assets/locations/king/renton-landmark.jpg';
import tacoma from '@/assets/locations/pierce/tacoma.jpg';
import auburn from '@/assets/locations/king/auburn-landmark.jpg';


/* ── Services ───────────────────────────────────────────────── */
import airportTransfer from '@/assets/images/services/airport/airport-transfer.png';
import executive from '@/assets/images/services/corporate/executive.png';
import cruise from '@/assets/images/services/cruise/cruise.png';
import hourly from '@/assets/images/services/personal-chauffeur/hourly.png';
import wedding from '@/assets/images/services/weddings/wedding.png';

export const images = {
  fleet: {
    hero: fleetHero,

    escaladeEsv: {
      main: escalade,
      gallery: [escaladeFront, escaladeSide, escaladeRear, escaladeInterior],
    },

    navigatorL: {
      main: navigatorHero,
      gallery: [navigatorHero, navigatorPhoto, navigatorInterior],
    },

    sprinter: {
      main: sprinterMain,
      gallery: [sprinterMain, sprinterCabin, sprinterInterior],
    },

    sClass: {
      main: mercedesMain,
      gallery: [mercedesMain, mercedesInterior, mercedesInterior2],
    },

    // townCar: {
    //   main: limoMain,
    //   gallery: [limoMain, limoInterior, limoPartyInterior],
    // },

    cadillacXt6: {
      main: cadillacXt6,
      gallery: [cadillacXt6, cadillacExteriorXt6, cadillacRearCabinXt6],
    },

    freightliner: {
      main: freightlinerMain,
      gallery: [freightlinerMain, freightlinerInterior, freightlinerExterior],
    },

    partyBus: {
      main: partyBusHero,
      gallery: [partyBusHero, partyBusInterior, partyBusRear],
    },

    motorCoach: {
      main: motorCoachMain,
      gallery: [motorCoachMain, coachInterior, coachRear],
    },

    cullinan: {
      main: cullinanMain,
      gallery: [cullinanMain, cullinanExterior2, cullinanInterior2, cullinanRearCabin, cullinanExterior],
    },

    bmw: {
      main: bmwX1,
    },
  },

  locations: {
    seattle,
    bellevue,
    redmond,
    renton,
    tacoma,
    auburn,
  },

  services: {
    airportTransfer,
    executive,
    cruise,
    hourly,
    wedding,
  },
} satisfies Record<string, any>;
