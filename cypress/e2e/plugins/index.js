const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = async (on, config) => {
  const environment = config.env.ENVIRONMENT || 'development'; // Default to 'development'

  // Allow JSON reports to be produced
  await addCucumberPreprocessorPlugin(on, config);

  // Use esBuild as the bundler for preprocessing
  on(
    'file:preprocessor',
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  );

  // Set baseUrl based on the environment
  switch (environment) {
    case 'development':
      config.baseUrl = 'https://example.cypress.io'; // Local development URL
      break;
    case 'staging':
      config.baseUrl = 'https://example.cypress.io/commands/querying'; // Staging URL
      break;
    case 'production':
      config.baseUrl = 'https://example.cypress.io/cypress-api'; // Production URL
      break;
    default:
      console.warn(`Unknown environment: ${environment}`);
      config.baseUrl = 'https://example.cypress.io'; // Fallback URL
  }

  console.log(`Using baseUrl: ${config.baseUrl}`);
  return config;
};