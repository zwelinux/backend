module.exports = [
  'strapi::errors',

  // start of updated code
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'zwelinux-strapi-bucket-testing.s3.ap-southeast-1.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'zwelinux-strapi-bucket-testing.s3.ap-southeast-1.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // end of updated code

  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
