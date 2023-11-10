// Décris le scénario lié à la vérification de la robustesse du mot de passe
describe("Vérifie que le mot de passe est suffisamment robuste", () => {
    // Avant chaque test, visite la page d'accueil ( paramétré dans config.js)
    beforeEach(() => {
      cy.visit('/');
    });
  
    // Teste le processus de création de compte
    it("Processus de création de compte", () => {
      // Clique sur "Create an Account" dans la barre de navigation
      cy.get('.header').contains('Create an Account').click();
      // Vérifie que l'URL contient "/account/create/"
      cy.url().should('contain', '/account/create/');
  
      // Définit différentes valeurs de mot de passe avec leurs niveaux de robustesse attendus
      const passwords = [
        { value: '1234567', strength: 'Weak' },
        { value: 'Ismail11', strength: 'Medium' },
        { value: 'Ismail111', strength: 'Strong' }
      ];
  
      // Pour chaque paire de mot de passe et de niveau de robustesse attendu
      passwords.forEach(password => {
        // Efface le champ de mot de passe
        cy.get("#password").clear();
        // Saisit la valeur du mot de passe actuel
        cy.get('#password').type(password.value);
        // Vérifie que l'étiquette de niveau de robustesse affiche le niveau attendu
        cy.get('#password-strength-meter-label').contains(password.strength).should('exist');
  
        // Si le niveau de robustesse est 'Weak', vérifie également le message d'erreur spécifique
        if (password.strength === 'Weak'){
          cy.get('#password-error').contains('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.').should('exist');
        }
  
        // Attends 1 seconde entre chaque test
        cy.wait(1000);
      });
    });
  });
  
  
  
  
  
  
  

