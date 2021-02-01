require("dotenv").config();
module.exports = {
  db: process.env.DB_URL,
  port: parseInt(process.env.PORT) || 5000,
};
