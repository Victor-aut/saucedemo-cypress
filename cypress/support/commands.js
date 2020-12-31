// -- This is a parent command --
Cypress.Commands.add('login', (user, password) => {
  cy.get('#user-name').type(user);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
