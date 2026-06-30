import { a11yIt } from '../support/a11y'
const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'


function runMobileHomepageTests({ withSnapshot = false } = {}) {
   it("Visit the Mobile Homepage", () => {
        cy.visit("/")
        cy.viewport(900, 900)
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".header-main-responsive").should("be.visible")

        cy.get(".svg__icon-menu").click({ force: true })
        if (withSnapshot) cy.visualSnapshot('mobilehomepage')

    })
}

  describe("Mobile Homepage", () => {
    runMobileHomepageTests({ withSnapshot: false })
    if (!isChromatic) {
      // pass null selector so that header and footer are checked on the mobile homepage
      a11yIt('/', { selector: null })
    }
  })


