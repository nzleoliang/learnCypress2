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
