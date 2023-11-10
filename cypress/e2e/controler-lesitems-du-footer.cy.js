describe('Tests du Footer', () => {
// Teste le contrôle des items du footer
it('Contrôler les items du footer', () => {
    // Visite la page d'accueil
    cy.visit('/');
  
    // Définit une liste d'items du footer
    const items = [
      'Write for us',
      'Subscribe to our mailing list',
      'Contact us',
      'Hire a Sofware Testing/QA Company',
      'Search Terms',
      'Privacy and Cookie Policy',
      'Advanced Search',
      'Orders and Returns'
    ];
  
    // Utilise une boucle pour itérer sur la liste des éléments
    items.forEach((item) => {
      // Vérifie la présence de chaque item dans le footer
      cy.get('.footer').contains(item).should('exist');
    });
  });
});