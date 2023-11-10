describe('se déconnecté ', () => {
    it.only('se déconnecté ', () => {
      // Ouvre le site web
      cy.visit('/');
      
      
      cy.get('.page-wrapper .customer-welcome .action').click();
  
    });
  });