describe("AddList Page", () => {
  it("should render correctly", () => {
    cy.visit("http://localhost:5173/addlist");
    //have logo
    //have navbar
    //have input box with placeholder
    //have button for submit

    cy.get(".logo-img").should("be.visible");
    cy.get("#nav-bar").should("be.visible");
    cy.get(".form--list").should("be.visible");
    cy.get(".form-button").should("be.visible");
    cy.get("#root > main > div > form > label > input[type=text]").should(
      "have.attr",
      "placeholder"
    );
    cy.get('[placeholder="Add Custom List Name"]').should("be.visible");
  });

  describe("form submission", () => {
    it("should display the form with the correct input", () => {
      cy.visit("http://localhost:5173/addlist");
      cy.get("#root > main > div > form > label > input[type=text]")
        .type("Hawaii Trip")
        .should("have.value", "Hawaii Trip");
    });
    it("should submit the form correctly", () => {
      cy.visit("http://localhost:5173/addlist");
      //intercept and fixture
      cy.intercept(
        {
          method: "POST",
          url: "https://closet-manager-be.herokuapp.com/api/v1/users/1/lists",
        },
        { name: "Random place to visit" }
      );
      cy.get("#root > main > div > form > label > input[type=text]").type(
        "Random place to visit"
      );
      cy.get("#root > main > div > form > button").click();
      cy.get(".alert-msg").should("contain", "YOUR CUSTOM LIST IS CREATED");
    });
  });
});
