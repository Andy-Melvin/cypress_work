const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
require('dotenv').config();

module.exports = defineConfig({
  env: {
    PERCY_TOKEN: process.env.PERCY_TOKEN,
    ENVIRONMENT: process.env.ENVIRONMENT, // Define the environment variable
  },
  e2e: {
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    stepDefinitions: "cypress/e2e/cucumber-test/step-definitions/**/*.{js,ts}", 
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});