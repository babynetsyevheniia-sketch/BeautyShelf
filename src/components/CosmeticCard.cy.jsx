import React from 'react';
import { CosmeticCard } from './CosmeticCard';

describe('<CosmeticCard />', () => {
  it('відображає інформацію про косметичний засіб', () => {
    cy.mount(
      <CosmeticCard
        name="Skin 1004 Centella Cream"
        category="Крем"
        date="15.10.2026"
        onDelete={cy.stub()}
      />
    );

    cy.contains('Skin 1004 Centella Cream').should('be.visible');
    cy.contains('Крем').should('be.visible');
    cy.contains('15.10.2026').should('be.visible');
  });

  it('викликає функцію onDelete при кліку на кнопку видалення', () => {
    const onDeleteSpy = cy.spy().as('deleteSpy');
    cy.mount(
      <CosmeticCard
        name="Skin 1004 Centella Cream"
        category="Крем"
        date="15.10.2026"
        onDelete={onDeleteSpy}
      />
    );

    cy.contains('button', 'Видалити').click();
    cy.get('@deleteSpy').should('have.been.calledOnce');
  });
});