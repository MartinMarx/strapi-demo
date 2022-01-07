module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '160d47a7cc1511ed8212a758ec6cd2de'),
  },
});
