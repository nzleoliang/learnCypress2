// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
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

// Logs in from the web page
Cypress.Commands.add('webLogin', (username, password) => {
  cy.visit('/');
  Cypress.log({
    name: 'webLogin',
    message: username + ' | ' + password
  });

  //login with valid username and password
  cy.get('#user-name')
    .clear()
    .type(username);
  cy.get('#password')
    .clear()
    .type(password + '{enter}');
});
