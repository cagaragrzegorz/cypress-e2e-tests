type assertionLambda = () => void
class Dsl {
  verify(assertions: assertionLambda | assertionLambda[]) {
    if (assertions instanceof Array) {
      assertions.forEach((assertion) => assertion())
    } else {
      assertions()
    }
    return this
  }

  openToDoApp() {
    cy.visit('/')
    return this
  }
}

export default new Dsl()
