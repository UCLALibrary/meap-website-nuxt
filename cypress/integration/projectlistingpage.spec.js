describe("Project Detail page", () => {
    it("Visit a Project Detail Page", () => {
        cy.visit("/projects")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Funded Projects")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
