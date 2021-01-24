/// <reference types="cypress" />

export class TodoPage {
  static TODO_ITEM_ONE = 'buy some cheese'
  static TODO_ITEM_TWO = 'feed the cat'
  static TODO_ITEM_THREE = 'book a doctors appointment'

  visit() {
    cy.visit('http://localhost:8888')
  }

  createTodos() {
    cy.get('.new-todo', { log: false })
      .type(`${TodoPage.TODO_ITEM_ONE}{enter}`, { log: false })
      .type(`${TodoPage.TODO_ITEM_TWO}{enter}`, { log: false })
      .type(`${TodoPage.TODO_ITEM_THREE}{enter}`, { log: false })

    cy.log('TodoPage: created todos')

    cy.get('.todo-list li', { log: false }).as('todos')
  }

  createTodo(todo) {
    cy.get('.new-todo', { log: false }).type(`${todo}{enter}`, { log: false })
    cy.log(`Created todo "${todo}"`)
    return cy
      .get('.todo-list', { log: false })
      .contains('li', todo.trim(), { log: false })
  }

  selectAll() {
    // we use 'check' instead of 'click'
    // because that indicates our intention much clearer    
    cy.get('.toggle-all').check()
  }

  unselectAll() {
    cy.get('.toggle-all').uncheck()
  }

  toggle(k) {
    cy.get('.todo-list li', { log: false })
      .eq(k)
      .find('.toggle')
      .check()
  }

  /**
   * Returns either all todo items on the page,
   * or just a given one (zero index)
   */
  todos(k) {
    if (k !== undefined) {
      return cy.get('.todo-list li').eq(k)
    }

    return cy.get('.todo-list li')
  }

  filter(label) {
    cy.get('.filters')
      .contains(label)
      .click()
  }

  clearCompleted() {
    cy.get('.clear-completed').click()
  }

  validateCompleteStatus(k) {
    cy.get('@todos')
      .eq(k)
      .should('have.class', 'completed')
  }

  validateNotCompleteStatus(k) {
    cy.get('@todos')
      .eq(k)
      .should('not.have.class', 'completed')
  }

}

export const todoPage = new TodoPage()
