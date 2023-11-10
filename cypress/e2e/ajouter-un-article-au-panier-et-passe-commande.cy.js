describe("Achat d'un produit", () => {
    it("Ajouter un article au panier et passer commande", () => {
      // Visite la page d'accueil
      cy.visit('/');
  
      // Clique sur le deuxième produit dans la liste de produits
      cy.get('.product-items > :nth-child(2)').click();
  
      // Sélectionne la taille et la couleur du produit
      cy.get('#option-label-size-143-item-166').click();
      cy.get('#option-label-color-93-item-59').click();
  
      // Ajoute le produit au panier
      cy.get('#product-addtocart-button').click();
  
      // Vérifie que le panier affiche un article et clique sur le panier
      cy.get('.showcart > .counter').contains('1').should('exist');
      cy.get('.showcart').click();
  
      // Attends 2 secondes et ferme le mini-panier
      cy.wait(2000);
      cy.get('[data-bind*="click: closeMinicart"]').click();
  
      // Attend 20 secondes et vérifie que l'URL correspond à la page de livraison
      cy.wait(20000);
      cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping');
  
      // Clique sur le bouton d'authentification
      cy.get('.authentication-wrapper > .action').click();
  
      // Remplit les informations d'identification
      cy.get('#login-email').type('rajouniismail3@gmail.com');
      cy.get('#login-password').type('Ismail111');
      cy.get('.block-content > form > .actions-toolbar > .primary > .action').click();
  
      // Attend 10 secondes et vérifie que l'URL correspond toujours à la page de livraison
      cy.wait(10000);
      cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping');
  
      // Remplit les informations d'adresse de livraison
      cy.get('input[name="street[0]"]').type('testtestestestetsetsetste');
      cy.get('input[name="city"]').type('California');
      cy.get('input[name="shippingAddress.region_id"]').eq(2).click();
      cy.get('input[name="postcode"]').type('20220');
      cy.get('input[name="telephone"]').type('0625444555');
  
      // Coche la case des conditions générales de vente
      cy.get('#ko_unique_2').check();
    });
  });