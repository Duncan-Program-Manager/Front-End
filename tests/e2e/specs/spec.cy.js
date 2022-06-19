describe("Test if correct root page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains(
      '[style="padding-bottom: 0px; margin-bottom: 0%;"]',
      "Welcome To:"
    );
    cy.contains(
      '[style="padding-top: 0px; margin-top: 0%; margin-bottom: 2%;"]',
      "The Duncan Program Manager!"
    );
  });
});

describe("Test typing", () => {
  it("typing in email box", () => {
    cy.visit("/");
    cy.get("#input-7")
      .type("agdsaewrasdfawdeqgtfdxgxcvdshew")
      .should("have.value", "agdsaewrasdfawdeqgtfdxgxcvdshew");
  });
  it("typing in password box", () => {
    cy.visit("/");
    cy.get("#input-10")
      .type("agdsaewrasdfawdeqgtfdxgxcvdshew")
      .should("have.value", "agdsaewrasdfawdeqgtfdxgxcvdshew");
  });
});

describe("Test incorrect login", () => {
  it("login with wrong credentials", () => {
    cy.visit("/");
    cy.get("#input-7").type("agdsaewrasdfawdeqgtfdxgxcvdshew");
    cy.get("#input-10").type("agdsaewrasdfawdeqgtfdxgxcvdshew");
    cy.get(".v-btn").click();
    cy.get(".v-alert__content").should(
      "contain",
      "This combination is not found!"
    );
    cy.url().should("eq", "http://localhost:8080/");
  });
});

describe("Test correct login", () => {
  it("login with correct credentials", () => {
    cy.visit("/");
    cy.get("#input-7").type("test@email.com");
    cy.get("#input-10").type("test");
    cy.get(".v-btn").click();
    cy.url().should("eq", "http://localhost:8080/home");
  });
});

describe("Test template page", () => {
  it("verify template page with standard data", () => {
    cy.visit("/");
    cy.get("#input-7").type("test@email.com");
    cy.get("#input-10").type("test");
    cy.get(".v-btn").click();
    cy.url().should("eq", "http://localhost:8080/home");
    cy.get(
      ":nth-child(1) > .v-card > :nth-child(1) > .col-sm-12 > .v-card__title"
    ).should("contain", "test1");
  });
});

describe("Test correct loading of programs", () => {
  it("go to market place and verify", () => {
    cy.visit("/");
    cy.get("#input-7").type("test@email.com");
    cy.get("#input-10").type("test");
    cy.get(".v-btn").click();
    cy.url().should("eq", "http://localhost:8080/home");
    cy.get(":nth-child(3) > .v-list-item__icon > .v-icon").click();
    cy.url().should("eq", "http://localhost:8080/market");
    cy.get(
      ":nth-child(1) > .v-card > :nth-child(1) > .col-sm-12 > .v-card__title"
    ).should("contain", "Winrar,");
  });
});

describe("test register page errors", () => {
  it("go to register page", () => {
    cy.visit("/");
    cy.get('div[style="padding: 0px; margin-top: 0%;"] > a').click();
    cy.url().should("eq", "http://localhost:8080/register");
  });
  it("not filling everything in", () => {
    cy.get(".v-btn").click();
    cy.get(".v-alert__content").should(
      "contain",
      "You didnt fill everything in!"
    );
  });
  it("non equal email", () => {
    cy.get("#input-14").type("username");
    cy.get("#input-15").type("email");
    cy.get("#input-16").type("email different");
    cy.get("#input-17").type("password");
    cy.get("#input-18").type("password");
    cy.get(".v-btn").click();
    cy.get(".v-alert__content").should("contain", "emails are not the same!");
  });
  it("non equal password", () => {
    cy.get("#input-14").clear().type("username");
    cy.get("#input-15").clear().type("email");
    cy.get("#input-16").clear().type("email");
    cy.get("#input-17").clear().type("password");
    cy.get("#input-18").clear().type("password different");
    cy.get(".v-btn").click();
    cy.get(".v-alert__content").should(
      "contain",
      "passwords are not the same!"
    );
  });
});
