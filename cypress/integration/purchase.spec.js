import { standard_user, password } from '../fixtures/config';
import Products from '../page-objects/products';
import Checkout from '../page-objects/checkout';
import { shippingInformation } from '../fixtures/data';

const product = new Products();
const checkout = new Checkout();

describe('Buy a product ', () => {
  beforeEach(() => {
    cy.visit('/').login(standard_user, password);
  });

  it('should add two items to my shopping cart', () => {
    product.addProductToCart(0).addProductToCart(1);
    cy.url().should('match', /inventory/);
  });

  it('should remove an item from my shopping cart', () => {
    product.goToMyCart().removeProduct(1);
    cy.get(product.removeButton).should('have.length', 1);

    cy.url().should('match', /cart/);
  });

  it('should complete the purchase', () => {
    product.goToMyCart();

    checkout.goToCheckoutPage().fillForm(shippingInformation).clickContinueButton();
    cy.get(checkout.totalLabel).should('contain.text', 'Total: $32.39');

    checkout.clickFinishButton();
    cy.get(checkout.header).should('contain.text', 'THANK YOU FOR YOUR ORDER');

    cy.url().should('match', /checkout-complete/);
  });
});
