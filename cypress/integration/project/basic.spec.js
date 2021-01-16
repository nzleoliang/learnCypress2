/// <reference types="Cypress" />

describe('basic testing cases', () => {
  it('should be able to access the website', () => {
    cy.visit('http://example.com');
    cy.url().should('include', 'example');
    cy.wait(3000);
    // cy.pause();
    cy.contains('This domain is for use');
    cy.get('a[href]').should('be.visible');
  });

  it('interact with buttons', () => {
    cy.visit('https://demoqa.com/buttons');
    cy.url().should('include', 'buttons');

    cy.get('button:contains("Click Me")').should('have.length', 3);

    cy.get('button:contains("Click Me")')
      .its('length')
      .should('eq', 3);

    // not working, why?
    // cy.get('button')
    //   .contains('Click Me')
    //   .click();

    // still doesn't work
    // cy.contains('Click Me')
    //   .last()
    //   .click();

    // this is working
    // cy.get('button:contains("Click Me")')
    //   .last()
    //   .click();
    // cy.contains('You have done a dynamic click').should('be.visible');

    // either of next three line works
    // cy.get('button:contains("Double Click Me")')
    // cy.contains('Double Click Me')
    // cy.get('button')
    //   .contains('Double Click Me')
    //   .dblclick();
    // cy.contains('You have done a double click').should('be.visible');
  });

  it('click hidden elements', () => {
    cy.visit('https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp');
    cy.get('button')
      .contains('Toggle Hide and Show')
      .click();
    cy.wait(1000);

    // test case failed at this step
    // cy.get('div')
    //   .contains('Click the button!')
    //   .click();

    // let's add a {force: true} parameter
    cy.get('div')
      .contains('Click the button!')
      .click({ force: true });
  });

  it('click hidden elements', () => {
    cy.visit('https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp');
    for (let i = 0; i < 9; i++) {
      cy.log('click the button:' + i.toString());
      console.log('click the button now!!');
      cy.get('button')
        .contains('Toggle Hide and Show')
        .click();
      cy.wait(1000);
    }

    // test case failed at this step
    // cy.get('div')
    //   .contains('Click the button!')
    //   .click();

    // let's add a {force: true} parameter
    cy.get('div')
      .contains('Click the button!')
      .click({ force: true });
  });

  it('checkbox interactions', () => {
    cy.visit('https://demoqa.com/checkbox');
    cy.get('button[title = "Expand all"]').click();
    cy.wait(1000);
    cy.get('input#tree-node-notes').click({ force: true });
    cy.wait(1000);
    cy.get('input#tree-node-documents').click({ force: true });
  });

  it('dropdown and radio box interactions', () => {
    cy.visit(
      'http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
    );
    cy.get('#dropdowm-menu-1').select('Python');
    cy.get('#dropdowm-menu-1').should('have.value', 'python');

    cy.wait(1000);

    cy.get('#checkboxes input[value="option-2"]').click();
    cy.get('#checkboxes input[value="option-2"]').should('be.checked');

    cy.wait(1000);

    cy.get('#radio-buttons input[value="yellow"]').click();

    cy.wait(1000);

    cy.get('#radio-buttons-selected-disabled input[value="cabbage"]').should(
      'be.disabled'
    );
  });

  it('scrolling on the page ', () => {
    cy.visit('https://docs.cypress.io/api/commands/screenshot.html#Assertions');
    // if you click an element which is invisible you don't need to scroll it into view beforehand. Cypress do it for you.
    cy.contains('See It In Action').click();
    cy.go('back');
    cy.wait(1000);
    cy.scrollTo('top');
    cy.wait(1000);
    cy.contains('Command Log').scrollIntoView();
  });
});
