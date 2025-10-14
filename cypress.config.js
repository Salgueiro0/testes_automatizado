const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    baseUrl:'https://licenciamento-ambiental-homol.terracap.df.gov.br',
    //baseUrl:'https://gla-homol/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
