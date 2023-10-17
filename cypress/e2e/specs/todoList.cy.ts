import dsl from '../../dsl/dsl'
import { checkIfTitleIsDisplayed, checkIfUserLandsOnProperUrl } from '../checks/common'

describe('template spec', () => {
  it('passes', () => {
    dsl
      .openToDoApp()
      .verify(checkIfUserLandsOnProperUrl(Cypress.config('baseUrl')))
      .verify(checkIfTitleIsDisplayed)
  })
})
