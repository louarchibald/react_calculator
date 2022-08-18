describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract');
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '6')
  })

  it('should update the display when using arithmetic operators', () => {
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '10')
  })

  it('should handle decimal numbers', () => {
    cy.get('#number7').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '751.3')
  })

  it('should error when number divided by 0', () => {
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERROR')
  })
})

