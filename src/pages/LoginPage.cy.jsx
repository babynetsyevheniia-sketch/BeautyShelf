import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LoginPage } from './LoginPage';

describe('<LoginPage />', () => {
  it('відображає форму входу з полями email, паролем та кнопкою', () => {
    cy.mount(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    cy.get('input[type="email"], input[name="email"]').should('be.visible');
    cy.get('input[type="password"], input[name="password"]').should('be.visible');
    cy.get('button[type="submit"], button').should('be.visible');
  });

  it('виконує запит авторизації при заповненні форми та сабміті', () => {
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', {
      statusCode: 201,
      body: {
        id: 101,
        email: 'test@example.com',
      },
    }).as('loginRequest');

    cy.mount(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    cy.get('input[type="email"], input[name="email"]').type('test@example.com');
    cy.get('input[type="password"], input[name="password"]').type('123456');
    cy.get('button[type="submit"], button').first().click();

    cy.wait('@loginRequest').its('request.body').should('deep.include', {
      email: 'test@example.com',
    });
  });
});