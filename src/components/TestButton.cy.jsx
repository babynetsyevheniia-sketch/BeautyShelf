import TestButton from './TestButton';

describe('<TestButton />', () => {
  it('displays BeautyShelf text', () => {
    cy.mount(<TestButton />);
    cy.contains('BeautyShelf').should('be.visible');
  });
});
