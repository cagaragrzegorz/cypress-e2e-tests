import dsl from '../../dsl/dsl'
import { checkIfTitleIsDisplayed, checkIfUserLandsOnProperUrl } from '../checks/common'

describe('app has basic functionality', () => {
  it('should load', () => {
    dsl
      .openToDoApp()
      .verify(checkIfUserLandsOnProperUrl(Cypress.config('baseUrl')))
      .verify(checkIfTitleIsDisplayed)
  })
})
