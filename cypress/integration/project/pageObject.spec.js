// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { TodoPage, todoPage } from '../../support/pageObjects/todo.page';

describe('Use Page Object', function () {
  context('Mark all as completed', function () {
    beforeEach(function () {
      todoPage.visit()
      todoPage.createTodos()
    })

    it('should allow me to mark all items as completed', function () {
      // complete all todos
      todoPage.selectAll()

      // get each todo li and ensure its class is 'completed'
      todoPage.validateCompleteStatus(0)
      todoPage.validateCompleteStatus(1)
      todoPage.validateCompleteStatus(2)
    })

    it('should allow me to clear the complete state of all items', function () {
      // unselect all todos
      todoPage.unselectAll()

      // get each todo li and ensure its class is not 'completed'
      todoPage.validateNotCompleteStatus(0)
      todoPage.validateNotCompleteStatus(1)
      todoPage.validateNotCompleteStatus(2)
    })
  })
})
