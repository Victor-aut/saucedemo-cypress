import { locked_out_user, password } from '../fixtures/config';

describe('Blocked user', () => {
  it('should try to login with a blocked user', () => {
    cy.visit('/').login(locked_out_user, password);

    cy.get('[data-test=error]').should(
      'have.text',
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });
});
