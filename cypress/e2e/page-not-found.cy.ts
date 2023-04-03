describe("When route doesn't", () => {
  it("Should have error message", () => {
    cy.visit("http://localhost:5173/qqqqqq");
    cy.get("h2").should("contain", "Oops!");
    cy.get("p").should("contain", "404: Page Not Found");
    cy.get(".empty-closet-image").should("be.visible");
  });
});
