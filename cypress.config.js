const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://licenciamento-ambiental-homol.terracap.df.gov.br/login',
    // defaultCommandTimeout: 60000,
    //pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
