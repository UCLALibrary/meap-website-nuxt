describe('News Listing Page', () => {
  it('Visit the News Listing Page', () => {
    cy.visit('/about/news')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should('contain', 'MEAP News')
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })
  it('Search Found', () => {
    cy.visit('/about/news?q=kids&filters=')
    cy.get('.logo-ucla').should('be.visible')
    cy.get('input[type=search]').should(
      'have.value',
      'kids'
    )
    cy.get('h2.about-results').invoke('text').should('not.be.empty')
  })
})
