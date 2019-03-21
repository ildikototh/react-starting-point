describe('Not Found (404) page', () => {
  before(() => {
    cy.visit('/404');
  });
  
  it('Displays relevant heading and paragraphs on the 404 page', () => {
    cy.get('h2').should($el => expect($el).to.have.text('Page not found'));
    cy.get('p').should($el => expect($el).to.have.text(
      'Sorry, the page you\'re looking for can\'t be found',
    ));
  });
});
