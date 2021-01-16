const helper = require('../../helper');

describe('login testing', () => {
  it('failed login with incorrect credentials', () => {
    cy.visit('https://demoqa.com/login');
    cy.get('#userName')
      .clear()
      .type('123456@gmail.com');
    // cy.get('#userName').clear().type('helloworld@outlook.com');
    cy.get('#password').type('abcpassword');
    cy.get('button#login').click();
  });
});

describe('using alias in login testing', () => {
  beforeEach(function() {
    cy.visit('https://demoqa.com/login');
    cy.get('#userName').as('user');
    cy.get('#password').as('pass');
  });

  it('failed login with not supported characters', () => {
    cy.get('@user').type('1234;{}$%^&*()');
    cy.get('@pass').type('abcpassword');
    cy.get('button#login').click();
  });

  it('successful login with correct credentials', () => {
    cy.get('@user').type('realuser@gmail.com');
    cy.get('@pass').type('correctpassword');
    cy.get('button#login').click();
  });
});

describe.skip('using alias in login testing', () => {
  beforeEach(function() {
    cy.visit('https://demoqa.com/login');
    helper.assignAliases();
  });

  it('get alias definition from other file', () => {
    cy.get('@user').type('realuser@gmail.com');
    cy.get('@pass').type('correctpassword');
    cy.get('button#login').click();
  });
});

describe.only('using fixture in login testing', () => {
  it('successful login', () => {
    cy.visit('/');
    cy.fixture('login').then(loginInfo => {
      //login with valid username and password
      cy.get('#user-name')
        .clear()
        .type(loginInfo.correct_credentials.user);
      cy.get('#password')
        .clear()
        .type(loginInfo.correct_credentials.password);
      cy.get('input[type="submit"]')
        .should('be.visible')
        .click();

      //Check login success
      cy.url().should('contain', 'inventory');
    });
  });

  it('successful login by pressing the enter key', () => {
    cy.visit('/');
    cy.fixture('login').then(loginInfo => {
      //login with valid username and password
      cy.get('#user-name')
        .clear()
        .type(loginInfo.correct_credentials.user);
      cy.get('#password')
        .clear()
        .type(loginInfo.correct_credentials.password + '{enter}');
      //Check login success
      cy.url().should('contain', 'inventory');
    });
  });

  it.only('successful login by calling customised login command', () => {
    cy.visit('/');
    cy.fixture('login').then(loginInfo => {
      cy.webLogin(
        loginInfo.correct_credentials.user,
        loginInfo.correct_credentials.password
      );
      //Check login success
      cy.url().should('contain', 'inventory');
    });
  });
});
