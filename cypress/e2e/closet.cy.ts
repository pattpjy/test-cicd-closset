describe("Closet View", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://closet-manager-be.herokuapp.com/api/v1/users/1/items", {fixture: "closet"})
    cy.visit("http://localhost:5173/");
  })
  it("Should be able to navigate to the closet from the landing page", () => {
    cy.get('.home-container > [href="/myCloset"]').click();
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/myCloset");
    });
  });
  it("Should contain cards of images with a banner that says 'Delete'", () => {
    cy.get('.home-container > [href="/myCloset"]').click();
    cy.get(".card-image").should("have.length", 3).should("be.visible");
    cy.get(".banner-container").should("have.length", 3).should("be.visible");
    cy.get(':nth-child(1) > a > .card-image').should("be.visible");
  });
  it("Should be able to delete an item from the closet", () => {
    cy.get(".banner-container").first().click();
    cy.get(".card-image").should("have.length", 2).should("be.visible");
  })
});