import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runProjectListingTests({ withSnapshot = false } = {}) {
    it("Visit Project Listing Page", () => {
        cy.visit("")
        cy.intercept('/projects').as('getProjectsRoutes')
        cy.visit('/projects')

        cy.wait('@getProjectsRoutes').then(() => {
            // UCLA Library brand
            cy.get(".logo-ucla").should("be.visible")
            cy.get("h1.title").should("contain", "Funded Projects")
          cy.get('[data-test="project-results-es"]').scrollIntoView()

            // projects open in same tab
            cy.get("li.block-highlight a.smart-link:first-child").should("not.have.attr", "target", "_blank")
        })

        if (withSnapshot) cy.visualSnapshot('Project Listing Page')
    })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Project Listing page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runProjectListingTests({ withSnapshot: true })
    })
  })
} else {
  describe('Project Listing page', () => {
    runProjectListingTests({ withSnapshot: false })
  })
}

