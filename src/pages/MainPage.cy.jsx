import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MainPage } from './MainPage';

describe('<MainPage />', () => {
  it('рендерить головну сторінку застосунку', () => {
    cy.mount(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    cy.get('div').should('exist');
  });
});