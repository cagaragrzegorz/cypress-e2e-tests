export const checkIfUserLandsOnProperUrl = (url: string) => () => {
  cy.url().should('contain', url)
}

export const checkIfTitleIsDisplayed = () => {
  cy.get('header h1').should('have.text', 'TODO')
}
