import React from 'react';
import { CareChecklist } from './CareChecklist';

describe('<CareChecklist />', () => {
  const mockItems = [
    { text: 'Очищення шкіри', completed: false },
    { text: 'Зволожувальний крем', completed: true },
  ];

  it('рендерить пункти догляду та змінює стан при кліку', () => {
    cy.mount(
      <CareChecklist
        title="Ранковий догляд"
        icon="☀️"
        items={mockItems}
      />
    );

    cy.contains('Ранковий догляд').should('be.visible');
    cy.contains('Очищення шкіри').should('be.visible');

    cy.get('input[type="checkbox"]').first().as('firstCheckbox');
    cy.get('@firstCheckbox').should('not.be.checked');
    cy.get('@firstCheckbox').click().should('be.checked');
  });
});