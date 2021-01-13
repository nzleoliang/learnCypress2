/// <reference types="cypress" />

export function assignAliases() {
  cy.get('#userName').as('user');
  cy.get('#password').as('pass');
}
