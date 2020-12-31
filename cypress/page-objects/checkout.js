class Checkout {
  constructor() {
    this.checkoutButton = '.btn_action';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.zipCode = '#postal-code';
    this.continueButton = '[type="submit"]';
    this.totalLabel = '.summary_total_label';
    this.header = '.complete-header';
    this.finishButton = '.btn_action';
  }
  goToCheckoutPage() {
    cy.get(this.checkoutButton).click();
    return this;
  }

  fillForm(obj) {
    cy.get(this.firstName).type(obj.firstName);
    cy.get(this.lastName).type(obj.lastName);
    cy.get(this.zipCode).type(obj.zipCode);
    return this;
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    return this;
  }

  clickFinishButton() {
    cy.get(this.finishButton).click();
    return this;
  }
}

export default Checkout;
