describe('Vérification de la présence du logo et du titre "LUMA"', () => {
    it('Ouvre le site web et vérifie la présence du logo et du titre "LUMA"', () => {
      // Ouvre le site web
      cy.visit('/');
  
      // Vérifie la présence du logo avec la classe "logo"
      cy.get('.logo').should('be.visible');
  
    });
  });