import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('<Header />', () => {
  it('відображає логотип BeautyShelf та пункти меню навігації', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    cy.contains('BeautyShelf').should('be.visible');
    cy.contains('Головна').should('be.visible');
    cy.contains('Косметичка').should('be.visible');
    cy.contains('Догляд').should('be.visible');
  });
});