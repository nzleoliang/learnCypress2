describe('login testing by using xpath locator', () => {
  it('failed login with incorrect credentials', () => {
    cy.visit('https://demoqa.com/login');
    cy.xpath('//input[@id="userName"]')
      .clear()
      .type('123456@gmail.com');
    // cy.get('#userName').clear().type('helloworld@outlook.com');
    cy.xpath('//input[@id="password"]').type('abcpassword');
    cy.xpath('//button[@id="login"]').click();
  });
});
