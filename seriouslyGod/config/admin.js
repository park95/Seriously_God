module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '49fe7580eb47ef2aa934f2dff00f9c3a'),
  },
});
