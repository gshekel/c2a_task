const chai = require("chai");
const expect = chai.expect;

const pdfFilePath1 = Cypress.env("pdfFolder") + "/pdf1.pdf";
const pdfFilePath2 = Cypress.env("pdfFolder") + "/pdf2.pdf";
const pdfFilePath3 = Cypress.env("pdfFolder") + "/pdf3.pdf";

// PDF1 and PDF2 are the same 
describe("Compare PDFs", () => {
    it("should compare the text of PDF1 & PDF2 files", () => {
        cy.readFile(pdfFilePath1, "binary").then((pdfData1) => {
            cy.readFile(pdfFilePath2, "binary").then((pdfData2) => {
                try {
                    expect(pdfData1).to.equal(pdfData2, "PDFs do not match");
                } catch (error) {
                    cy.log("Error: " + error.message);
                    throw error; 
                }
            });
        });
    });

// PDF1 and PDF3 are NOT the same. test should fail 
    it("should compare the text of PDF1 & PDF3 files", () => {
        cy.readFile(pdfFilePath1, "binary").then((pdfData1) => {
            cy.readFile(pdfFilePath3, "binary").then((pdfData3) => {
                try {
                    expect(pdfData1).to.equal(pdfData3, "PDFs do not match");
                } catch (error) {
                    cy.log("Error: " + error.message);
                    throw error; 
                }
            });
        });
    });    
});
