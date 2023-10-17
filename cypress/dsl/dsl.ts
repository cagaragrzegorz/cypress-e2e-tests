type assertionLambda = (...args) => void
class Dsl {
  veriify(assertions: assertionLambda | assertionLambda[]) {
    if (assertions instanceof Array) {
      assertions.forEach((assertion) => assertion())
    } else {
      assertions()
    }
    return this
  }

  openToDoApp() {
    cy.visit('https://example.cypress.io')
    return this
  }
}

export default new Dsl()
