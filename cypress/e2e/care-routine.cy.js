describe('E2E: Навігація та чекліст догляду', () => {
    it('переходить у розділ Догляд через меню та відмічає процедури', () => {
      cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', {
        statusCode: 201,
        body: { id: 101, email: 'user@beautyshelf.com' },
      }).as('loginRequest');
  
      cy.visit('/');
      cy.get('input[placeholder="Email"], input[type="email"]').type('user@beautyshelf.com');
      cy.get('input[placeholder="Пароль"], input[type="password"]').type('123456');
      cy.contains('button', 'Увійти').click();
      cy.wait('@loginRequest');

      cy.contains('Догляд').click();
      cy.url().should('include', '/care');

      cy.get('input[type="checkbox"]').first().then(($checkbox) => {
        const initialState = $checkbox.prop('checked');
        cy.wrap($checkbox).click();
        cy.wrap($checkbox).should('have.prop', 'checked', !initialState);
      });
    });
  });