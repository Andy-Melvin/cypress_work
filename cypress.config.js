const { defineConfig } = require("cypress");
require('dotenv').config(); // Load environment variables from .env

module.exports = defineConfig({
  env: {
    PERCY_TOKEN: process.env.PERCY_TOKEN, // Make PERCY_TOKEN available in Cypress
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.PERCY_TOKEN = process.env.PERCY_TOKEN;
      return config;
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});