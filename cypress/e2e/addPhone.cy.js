

describe("c2a_phone_select", () => {
  it("Selecting the ceapest phone from the phone category", () => {
    cy.viewport(2543, 791);
    cy.visit("https://www.demoblaze.com/");
    cy.get("#login2").click();
    cy.get("#loginusername").click();
    cy.wait(1000)
    cy.get("#loginusername").type("automatedUser26@example.com");
    cy.get("#loginpassword").click();
    cy.get("#loginpassword").type("4r4nd0mp4ssw0rd");
    cy.get("#logInModal button.btn-primary").click();
    cy.wait(1000)

    cy.window().then((win) => {
       win.byCat('phone');
    });

    cy.get("#tbodyid").within(() => {
        let minElement = null;
        let cheapPhone = "";
        let minValue = Number.MAX_SAFE_INTEGER;

        cy.get('[class^="col-lg-4"]').each(($element) => {
            cy.wrap($element).find("h5").invoke("text").then((text) => {
              const price = parseInt(text.replace("$", ""), 10);;
              if (price < minValue) {
                  minValue = price;
                  minElement = $element;
                  cheapPhone = $element.find("a").first().attr("href");
              }             
            });
        }).then(() => {
    //      cy.log(cheapPhone);
            cy.visit("https://www.demoblaze.com/" + cheapPhone)

        });   
    });

   cy.get(".btn-success").click();

    cy.wait(1000)
    cy.visit(`https://www.demoblaze.com/cart.html`)


  });
});
