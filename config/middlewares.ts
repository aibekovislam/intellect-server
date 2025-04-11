export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://intellect-bay.vercel.app', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
