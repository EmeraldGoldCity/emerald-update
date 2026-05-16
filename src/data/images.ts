import type { ImageMetadata } from 'astro';

/* ── Fleet hero ─────────────────────────────────────────────── */
import fleetHero from '@/assets/images/fleet/hero/fleet-hero.png';

/* ── Cadillac Escalade ESV ──────────────────────────────────── */
import escalade from '@/assets/images/fleet/cadillac/escalade.png';
import escaladeFront from '@/assets/images/fleet/cadillac/cadillac-front.webp';
import escaladeSide from '@/assets/images/fleet/cadillac/cadillac-side.webp';
import escaladeRear from '@/assets/images/fleet/cadillac/cadillac-rear.webp';
import escaladeInterior from '@/assets/images/fleet/cadillac/escalade-inside1.jpeg';

/* ── Cadillac XT6 ───────────────────────────────────────────── */
import cadillacXt6 from '@/assets/images/fleet/cadillac/caddiliacx60.webp';

/* ── Lincoln Navigator L ────────────────────────────────────── */
import navigatorPhoto from '@/assets/images/fleet/lincoln/luxury-sedan.png';

/* ── Mercedes-Benz Sprinter ─────────────────────────────────── */
import sprinterMain from '@/assets/images/fleet/sprinter/SPRINTER.jpeg';
import sprinterInterior from '@/assets/images/fleet/sprinter/SPRINTER-INSIDE.jpeg';
import sprinterCabin from '@/assets/images/fleet/sprinter/14-sprinter-inside.jpeg';

/* ── Mercedes-Benz S-Class ──────────────────────────────────── */
import mercedesMain from '@/assets/images/fleet/mercedes/merc.webp';
import mercedesInterior from '@/assets/images/fleet/mercedes/merc-interior1.webp';
import mercedesInterior2 from '@/assets/images/fleet/mercedes/mercerisland_limo_service.jpeg';

/* ── Lincoln Town Car Stretch / Limo ────────────────────────── */
import limoMain from '@/assets/images/fleet/limo/limo.png';
import limoInterior from '@/assets/images/fleet/limo/interior.png';
import limoPartyInterior from '@/assets/images/fleet/limo/party1.webp';

/* ── Freightliner Minibus ───────────────────────────────────── */
import freightlinerMain from '@/assets/images/fleet/freight-liner/freightliner.webp';

/* ── Motor Coach ────────────────────────────────────────────── */
import motorCoachMain from '@/assets/images/fleet/coach/motorcoach.webp';

/* ── Rolls-Royce Ghost ──────────────────────────────────────── */
import rollsRoyce from '@/assets/images/fleet/rolls-royce/rolls-royce.png';

/* ── BMW X1 ─────────────────────────────────────────────────── */
import bmwX1 from '@/assets/images/fleet/bmw/bmw-x1.png';

/* ── Locations ──────────────────────────────────────────────── */
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
      main: navigatorPhoto,
    },

    sprinter: {
      main: sprinterMain,
      gallery: [sprinterMain, sprinterInterior, sprinterCabin],
    },

    sClass: {
      main: mercedesMain,
      gallery: [mercedesMain, mercedesInterior, mercedesInterior2],
    },

    townCar: {
      main: limoMain,
      gallery: [limoMain, limoInterior, limoPartyInterior],
    },

    cadillacXt6: {
      main: cadillacXt6,
      gallery: [cadillacXt6],
    },

    freightliner: {
      main: freightlinerMain,
      gallery: [freightlinerMain],
    },

    partyBus: {
      main: limoPartyInterior,
      gallery: [limoPartyInterior],
    },

    motorCoach: {
      main: motorCoachMain,
      gallery: [motorCoachMain],
    },

    rollsRoyce: {
      main: rollsRoyce,
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
