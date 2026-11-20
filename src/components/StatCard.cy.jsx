import React from 'react';
import { StatCard } from './StatCard';

describe('<StatCard />', () => {
  it('коректно відображає значення, підпис та стандартну іконку', () => {
    cy.mount(<StatCard value="12" label="Всього засобів" type="cosmetics" />);

    cy.contains('12').should('be.visible');
    cy.contains('Всього засобів').should('be.visible');
    cy.contains('💄').should('be.visible');
  });

  it('відображає іконку галочки при передачі type="check"', () => {
    cy.mount(<StatCard value={5} label="Виконано процедур" type="check" />);

    cy.contains('5').should('be.visible');
    cy.contains('Виконано процедур').should('be.visible');
    cy.contains('✓').should('be.visible');
  });
});