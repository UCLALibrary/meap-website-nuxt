describe("Resource Detail page", () => {
    it("Visit a Resource Detail Page", () => {
        cy.visit("/projects/kids-play-project")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Kids Play Project")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
