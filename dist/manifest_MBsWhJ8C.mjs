import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_C5ewKNw0.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/Emctryout2/","cacheDir":"file:///workspaces/Emctryout2/node_modules/.astro/","outDir":"file:///workspaces/Emctryout2/dist/","srcDir":"file:///workspaces/Emctryout2/src/","publicDir":"file:///workspaces/Emctryout2/public/","buildClientDir":"file:///workspaces/Emctryout2/dist/client/","buildServerDir":"file:///workspaces/Emctryout2/dist/server/","adapterName":"","routes":[{"file":"file:///workspaces/Emctryout2/dist/airport-transfers/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/airport-transfers","isIndex":false,"type":"page","pattern":"^\\/airport-transfers\\/?$","segments":[[{"content":"airport-transfers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/airport-transfers.astro","pathname":"/airport-transfers","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/book-now/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/book-now","isIndex":false,"type":"page","pattern":"^\\/book-now\\/?$","segments":[[{"content":"book-now","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/book-now.astro","pathname":"/book-now","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/fleet/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fleet","isIndex":false,"type":"page","pattern":"^\\/fleet\\/?$","segments":[[{"content":"fleet","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fleet.astro","pathname":"/fleet","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/locations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/locations","isIndex":false,"type":"page","pattern":"^\\/locations\\/?$","segments":[[{"content":"locations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/locations.astro","pathname":"/locations","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/cruise-transportation/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/cruise-transportation","isIndex":false,"type":"page","pattern":"^\\/service\\/cruise-transportation\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"cruise-transportation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/cruise-transportation.astro","pathname":"/service/cruise-transportation","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/executive-transportation/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/executive-transportation","isIndex":false,"type":"page","pattern":"^\\/service\\/executive-transportation\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"executive-transportation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/executive-transportation.astro","pathname":"/service/executive-transportation","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/game-day-transport/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/game-day-transport","isIndex":false,"type":"page","pattern":"^\\/service\\/game-day-transport\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"game-day-transport","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/game-day-transport.astro","pathname":"/service/game-day-transport","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/hourly-charters/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/hourly-charters","isIndex":false,"type":"page","pattern":"^\\/service\\/hourly-charters\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"hourly-charters","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/hourly-charters.astro","pathname":"/service/hourly-charters","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/infant-car-seats/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/infant-car-seats","isIndex":false,"type":"page","pattern":"^\\/service\\/infant-car-seats\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"infant-car-seats","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/infant-car-seats.astro","pathname":"/service/infant-car-seats","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/personal-chauffeur/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/personal-chauffeur","isIndex":false,"type":"page","pattern":"^\\/service\\/personal-chauffeur\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"personal-chauffeur","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/personal-chauffeur.astro","pathname":"/service/personal-chauffeur","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/special-occasions/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/special-occasions","isIndex":false,"type":"page","pattern":"^\\/service\\/special-occasions\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"special-occasions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/special-occasions.astro","pathname":"/service/special-occasions","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/service/wedding-transportation/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/wedding-transportation","isIndex":false,"type":"page","pattern":"^\\/service\\/wedding-transportation\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"wedding-transportation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/wedding-transportation.astro","pathname":"/service/wedding-transportation","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///workspaces/Emctryout2/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://emeraldcitylimos.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/Emctryout2/src/pages/airport-transfers.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/book-now.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/fleet.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/location/[slug].astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/locations.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/cruise-transportation.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/executive-transportation.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/game-day-transport.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/hourly-charters.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/infant-car-seats.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/personal-chauffeur.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/special-occasions.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/service/wedding-transportation.astro",{"propagation":"none","containsHead":true}],["/workspaces/Emctryout2/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/airport-transfers@_@astro":"pages/airport-transfers.astro.mjs","\u0000@astro-page:src/pages/book-now@_@astro":"pages/book-now.astro.mjs","\u0000@astro-page:src/pages/fleet@_@astro":"pages/fleet.astro.mjs","\u0000@astro-page:src/pages/location/[slug]@_@astro":"pages/location/_slug_.astro.mjs","\u0000@astro-page:src/pages/locations@_@astro":"pages/locations.astro.mjs","\u0000@astro-page:src/pages/service/cruise-transportation@_@astro":"pages/service/cruise-transportation.astro.mjs","\u0000@astro-page:src/pages/service/executive-transportation@_@astro":"pages/service/executive-transportation.astro.mjs","\u0000@astro-page:src/pages/service/game-day-transport@_@astro":"pages/service/game-day-transport.astro.mjs","\u0000@astro-page:src/pages/service/hourly-charters@_@astro":"pages/service/hourly-charters.astro.mjs","\u0000@astro-page:src/pages/service/infant-car-seats@_@astro":"pages/service/infant-car-seats.astro.mjs","\u0000@astro-page:src/pages/service/personal-chauffeur@_@astro":"pages/service/personal-chauffeur.astro.mjs","\u0000@astro-page:src/pages/service/special-occasions@_@astro":"pages/service/special-occasions.astro.mjs","\u0000@astro-page:src/pages/service/wedding-transportation@_@astro":"pages/service/wedding-transportation.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_MBsWhJ8C.mjs","@/components/react/VehicleCarousel":"_astro/VehicleCarousel.C0ChHIVx.js","@/components/react/Navigation":"_astro/Navigation.DfOqDig2.js","@astrojs/react/client.js":"_astro/client.nc8uITnr.js","/workspaces/Emctryout2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.Bh4wqtPV.js","astro:scripts/page.js":"_astro/page.ZXyU73wm.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/page.ZXyU73wm.js","/file:///workspaces/Emctryout2/dist/airport-transfers/index.html","/file:///workspaces/Emctryout2/dist/book-now/index.html","/file:///workspaces/Emctryout2/dist/fleet/index.html","/file:///workspaces/Emctryout2/dist/locations/index.html","/file:///workspaces/Emctryout2/dist/service/cruise-transportation/index.html","/file:///workspaces/Emctryout2/dist/service/executive-transportation/index.html","/file:///workspaces/Emctryout2/dist/service/game-day-transport/index.html","/file:///workspaces/Emctryout2/dist/service/hourly-charters/index.html","/file:///workspaces/Emctryout2/dist/service/infant-car-seats/index.html","/file:///workspaces/Emctryout2/dist/service/personal-chauffeur/index.html","/file:///workspaces/Emctryout2/dist/service/special-occasions/index.html","/file:///workspaces/Emctryout2/dist/service/wedding-transportation/index.html","/file:///workspaces/Emctryout2/dist/services/index.html","/file:///workspaces/Emctryout2/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"X3YRw/nTCWQEsnWmdjEabKvJlW6Jj+YyckyZWqW2FdY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
