const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3zqvy4",
  "fileServerFolder": "./cypress",
  "env": {
    "pdfFolder": "./cypress/fixtures/pdf-files"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


