/// <reference types="Cypress" />

describe('basic testing cases', () => {
  it('GET-list user', () => {
    cy.request('GET', '/users?page=2').then((response) => {
      expect(response.status).equal(200)
      expect(response.body.data[0].first_name).equal('Michael')
      expect(response.body).to.not.be.null
      expect(response.body.data).to.have.length(6)

      /* handle json array in a loop */
      // option 1
      // response.body.data.forEach(person => {
      //   cy.log('person is:' + JSON.stringify(person))
      //   cy.log('name of this person is:' + person.first_name + ' ' + person.last_name)
      // });

      // option 2
      // for (let i = 0; i < response.body.data.length; i++) {
      //   cy.log('person is:' + JSON.stringify(response.body.data[i]))
      //   cy.log('name of this person is:' + response.body.data[i].first_name + ' ' + response.body.data[i].last_name)
      // }
    })
  })

  it('POST-Create user', () => {
    const user = {
      "name": "James",
      "job": "QA"
    }

    cy.request('POST', '/users', user).then((response) => {
      expect(response.status).equal(201)
      expect(response.body.name).equal(user.name)
      expect(response.body.job).equal(user.job)
    })
    cy.request('POST', '/users', user).its('body').should('include', { name: 'James' })
  })

  it('Ùpdate user', () => {
    const user = {
      "name": "Samantha",
      "job": "DevOps"
    }

    cy.request('PUT', '/users/2', user).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.name).equal(user.name)
      expect(response.body.job).equal(user.job)
    })
  })

  it('Delete user', () => {
    cy.request('DELETE', '/users/2').then((response) => {
      expect(response.status).equal(204)
    })
  })
})