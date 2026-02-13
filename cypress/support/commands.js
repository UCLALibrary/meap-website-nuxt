Cypress.Commands.add('visualSnapshot', (name) => {
  const provider = Cypress.env('VISUAL_PROVIDER') // "chromatic" | "percy" | undefined

  if (provider === 'chromatic') {
    // Chromatic snapshot at the CURRENT test viewport (set by describe/it config)
    const w = Cypress.config('viewportWidth')
    const h = Cypress.config('viewportHeight')
    cy.takeSnapshot(`${name} - ${w}x${h}`)
    return
  }

  if (provider === 'percy') {
    cy.percySnapshot(name)
  }
  // else: do nothing locally
})
