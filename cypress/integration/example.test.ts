// @ts-ignore
const BASE_URL = Cypress.config('baseUrl');

describe('Example', () => {
  it('should fail w/ cypress v3.8.x', () => {
    cy.visit(BASE_URL!);
    cy.contains('Learn React');
  })
});
