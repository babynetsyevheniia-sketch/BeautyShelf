import React from 'react';
import { CosmeticBagPage } from '../pages/CosmeticBagPage';

describe('<CosmeticBagPage />', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:5000/api/cosmetics', {
      statusCode: 200,
      body: [
        { id: 1, name: 'Test Cream', category: 'Крем', date: '15.10.2026' },
        { id: 2, name: 'Test SPF', category: 'Сонцезахист', date: '26.12.2026' },
      ],
    }).as('getCosmetics');
  });

  it('завантажує та відображає список косметики', () => {
    cy.mount(<CosmeticBagPage />);
    cy.wait('@getCosmetics');
    cy.contains('Test Cream').should('be.visible');
    cy.contains('Test SPF').should('be.visible');
  });

  it('фільтрує засоби за категорією', () => {
    cy.mount(<CosmeticBagPage />);
    cy.wait('@getCosmetics');
    cy.get('select').first().select('Крем');
    cy.contains('Test Cream').should('be.visible');
    cy.contains('Test SPF').should('not.exist');
  });
});