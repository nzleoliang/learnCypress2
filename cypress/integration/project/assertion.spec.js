describe('assertion example', () => {
  it('assertion true should be equal to true', () => {
    expect(true).to.equal(true);
  });

  it('chained assertion', () => {
    cy.visit('zero.webappsecurity.com/login.html');
    cy.contains('Sign in').click();
    cy.get('.alert-error')
      .should('be.visible')
      .and('contain', 'Login and/or password are wrong');
  });
});
