describe('read and write files', () => {
  it('save data into text file', () => {
    for (let i = 0; i < 10; i++) {
      const latency = (Math.random() * 100).toString();
      cy.writeFile(
        'testResult/data.txt',
        `testing result for round ${i} is ${latency}\n`,
        { flag: 'a+' }
      );
    }
  });

  it('save data into json file and read', () => {
    const filePath = 'testResult/people.json';
    cy.writeFile(filePath, {
      firstname: 'Ming',
      lastname: 'Li'
    });

    cy.readFile(filePath).then(json => {
      expect(json).to.be.an('object');
    });

    cy.readFile(filePath)
      .its('firstname')
      .should('eq', 'Ming');

    cy.readFile(filePath)
      .its('firstname')
      .should('contain', 'Ming');
  });
});
