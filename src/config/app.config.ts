export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongodb: process.env.MONGODB,
  default_limit: +process.env.DEFAULT_LIMIT || 10,
});
