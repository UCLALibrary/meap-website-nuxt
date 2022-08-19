describe("Website Homepage", () => {
    it("Visit the Homepage", () => {
        cy.visit("/")
        cy.viewport(1200, 1200)

        // UCLA brand
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".visually-hidden").should("contain", "UCLA Home")
        cy.get(".ucla-logo")
            .parent()
            .should("have.attr", "href", "https://www.ucla.edu")

        // NavSecondary
        // cy.get(".nav-secondary")
        //     .should("contain", "Modern Endangered Archives Program")
        //     .and("contain", "Who we are")
        //     .and("contain", "For applicants")
        //     .and("contain", "Funded projects")
        //     .and("contain", "Browse collections")

        // NavPrimary
        cy.get(".nav-primary").then(elem => {
            if(elem[0].textContent.startsWith('Modern Endangered Archives Program Get help with')) {
                cy.get(".nav-primary").should("contain", "Get help with...")
                    .and("contain", "Visit")
                    .and("contain", "About")
            }
            else {
                cy.get(".nav-primary").should("contain", "Get help with...")
                    .and("contain", "Visit")
                    .and("contain", "About")
                    .and("contain", "Support us")
            }
        })

        cy.get("h2.visually-hidden").should(
            "contain",
            "Featured Projects"
        )

        cy.get("h2.section-heading").should(
            "contain",
            "Program Resources"
        )

        cy.get("h2.section-heading").should(
            "contain",
            "News"
        )

        // MastheadPrimary
        // cy.get(".masthead-primary").find(".logo").should("be.visible")
        // cy.get(".masthead-primary")
        //     .find(".search-home")
        //     .should("be.visible")
        //     .and("contain", "Search the Library Site")
        //     .and("contain", "Search Materials")
        // cy.get(".masthead-primary")
        //     .find("input.input-search")
        //     .should("have.attr", "placeholder", "Search by keyword")
        // cy.get(".masthead-primary")
        //     .contains("a", "Course Reserves")
        //     .should(
        //         "have.attr",
        //         "href",
        //         "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do"
        //    )
        // cy.get(".masthead-primary")
        //     .contains("a", "UCLA Research Guides")
        //     .should("have.attr", "href", "https://guides.library.ucla.edu/")
        // cy.get(".masthead-primary")
        //     .contains("a", "Databases A-Z")
        //     .should(
        //         "have.attr",
        //         "href",
        //         "https://guides.library.ucla.edu/az.php"
        //     )

        // get help with
        // cy.get(".section-cards-with-illustrations").should(
        //     "contain",
        //     "Get Help With"
        // )

        // cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
