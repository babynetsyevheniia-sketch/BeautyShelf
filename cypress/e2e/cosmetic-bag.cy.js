describe('E2E: Керування косметичкою', () => {
    it('авторизується, додає новий косметичний засіб та видаляє його', () => {
      cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', {
        statusCode: 201,
        body: { id: 101, email: 'user@beautyshelf.com' },
      }).as('loginRequest');
  
      cy.intercept('GET', 'http://localhost:5000/api/cosmetics', {
        statusCode: 200,
        body: [],
      }).as('getCosmetics');
  
      cy.intercept('POST', 'http://localhost:5000/api/cosmetics', {
        statusCode: 201,
        body: {
          id: 1,
          name: 'La Roche-Posay Cicaplast',
          category: 'Крем',
          expiryDate: '2027-05-01',
        },
      }).as('addCosmetic');
  
      cy.intercept('DELETE', 'http://localhost:5000/api/cosmetics/*', {
        statusCode: 200,
        body: { message: 'Deleted' },
      }).as('deleteCosmetic');
  
      cy.visit('/');
      cy.get('input[placeholder="Email"], input[type="email"]').type('user@beautyshelf.com');
      cy.get('input[placeholder="Пароль"], input[type="password"]').type('123456');
      cy.contains('button', 'Увійти').click();
      cy.wait('@loginRequest');
  
      cy.contains('Косметичка').click();
      cy.url().should('include', '/bag');
 
      cy.get('input[placeholder="Назва засобу"]').type('La Roche-Posay Cicaplast');
      cy.get('select').last().select(1);
      cy.get('input[placeholder="Дата"]').type('2027-05-01');
      cy.contains('button', 'Додати').click();
 
      cy.contains('La Roche-Posay Cicaplast').should('be.visible');

      cy.contains('button', /видалити/i).first().click();
      cy.contains('La Roche-Posay Cicaplast').should('not.exist');
    });
  });