module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://dunder-mifflin:asdf@localhost/spaced-rep',
  JWT_SECRET:  process.env.JWT_SECRET || 'spaced-rep-jwt-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
}
