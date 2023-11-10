describe('Récupérer les éléments d’une liste qui s’affiche', () => {
    it('Survol et récupération des éléments', () => {
      // Visite la page d'accueil
      cy.visit('/');
  
      // Utilise un sélecteur pour l'élément déclenchant la liste
      cy.get('#ui-id-2').get('#ui-id-6')
        // Déclenche l'événement de survol pour afficher la liste
        .invoke('mouseover')
        // Attends que la liste soit affichée
        .next('.ui-corner-all')
        .find('li')  
        .each((listItem) => {
          // Logue le texte de chaque élément de la liste
          cy.log(listItem.text());
        });
    });
  });