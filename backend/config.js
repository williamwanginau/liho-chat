export const config = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",

  // Database config (for future use)
  database: {
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/liho-chat",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || "liho_chat",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
  },

  // JWT config (for future use)
  jwt: {
    secret: process.env.JWT_SECRET || "default-secret-change-in-production",
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  },
};
