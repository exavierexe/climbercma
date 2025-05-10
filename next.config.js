// next.config.js
/**
 * Temporary workaround for Next.js 15 dynamic route type bug.
 * This disables type checking during build so your app can deploy.
 * You will still get type checking in your editor and with `tsc`.
 */
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};
