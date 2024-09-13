const config = {
  secret: process.env.JWT_SECRET || 'blackcat',
  signOptions: {
    expiresIn: process.env.JWT_EXPIRESIN || '7d',
  },
};

export default config;
