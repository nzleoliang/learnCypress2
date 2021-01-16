describe('logged in user', () => {
  before(() => {
    cy.log('!before() function performed!');
  });

  after(() => {
    cy.log('!after() function performed!');
  });

  beforeEach(() => {
    cy.log('!beforeEach() function performed!');
  });

  afterEach(() => {
    cy.log('!afterEach() function performed!');
  });

  it('tests1', () => {
    cy.log('!!!!!!Test 1!!!!!!');
  });
  it.skip('tests2', () => {
    cy.log('!!!!!!Test 2!!!!!!');
  });
  it('tests3', () => {
    cy.log('!!!!!!Test 3!!!!!!');
  });
  it('tests4', () => {
    cy.log('!!!!!!Test 4!!!!!!');
  });
});

describe('another describe block', () => {
  it('testsA', () => {
    cy.log('!!!!!!Test A!!!!!!');
  });
});
