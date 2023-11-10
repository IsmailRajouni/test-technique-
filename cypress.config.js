const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout : 3000,
    pageLoadTimeout: 10000,
    reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
        reportDir: "cypress/results/json",
        overwrite: false,
        html: false,
        json: true
    }
  },
}
});
    


