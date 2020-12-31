/// <reference types="Cypress" />

class Products {
  constructor() {
    this.addToCartButton = '.btn_primary.btn_inventory';
    this.cartIcon = '.shopping_cart_link.fa-layers.fa-fw';
    this.removeButton = '.btn_secondary.cart_button';
  }

  addProductToCart(n) {
    cy.get(this.addToCartButton).eq(n).click();
    cy.wait(500);
    return this;
  }

  goToMyCart() {
    cy.get(this.cartIcon).click();
    return this;
  }

  removeProduct(n) {
    cy.get(this.removeButton).eq(n).click();
    return this;
  }
}

export default Products;
