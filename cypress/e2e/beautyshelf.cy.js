describe('BeautyShelf', () => {
  it('opens the application', () => {
    cy.visit('http://localhost:5173');
    cy.contains('BeautyShelf').should('be.visible');
  });
});
