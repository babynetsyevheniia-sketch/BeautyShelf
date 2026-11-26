describe('E2E: Авторизація користувача', () => {
    it('успішно входить у систему та перенаправляє на головну сторінку', () => {
      cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', {
        statusCode: 201,
        body: { id: 101, email: 'user@beautyshelf.com' },
      }).as('loginRequest');
  
      cy.visit('/login');
  
      cy.get('input[type="email"], input[name="email"]').type('user@beautyshelf.com');
      cy.get('input[type="password"], input[name="password"]').type('password123');
      cy.get('button[type="submit"], button').first().click();
  
      cy.wait('@loginRequest');
      cy.url().should('not.include', '/login');
    });
  });