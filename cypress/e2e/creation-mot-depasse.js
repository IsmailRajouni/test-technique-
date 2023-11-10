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

  // Teste la création d'un compte avec vérification de la robustesse du mot de passe
it("Vérifie que le mot de passe est suffisamment robuste", () => {
  // Visite la page d'accueil
  cy.visit('/');

  // Clique sur "Create an Account" dans la barre de navigation
  cy.get('.header').contains('Create an Account').click();

  // Vérifie que l'URL contient "/account/create/"
  cy.url().should('contain', '/account/create/');

  // Génère des valeurs aléatoires pour le nom, le prénom, l'e-mail et le mot de passe
  const nom = 'user_' + Math.random().toFixed(5).split('.')[1];
  const prenom  = Math.random().toString(36).substring(2, 7);
  const email = prenom + '.' + nom + '@yopmail.com';
  const password = Math.random().toString(36).substring(2, 15).replace(/^\w/, (c) => c.toUpperCase());

  // Remplit les champs du formulaire avec les valeurs générées
  cy.get('#firstname').type(prenom);
  cy.get('#lastname').type(nom);
  cy.get('#email_address').type(email);
  cy.get('#password').type(password);
  cy.get('#password-confirmation').type(password);

  // Soumet le formulaire en cliquant sur le bouton "Submit"
  cy.get('.actions-toolbar').get('.submit').click();

  // Vérifie que l'URL contient "/account/" après la soumission du formulaire
  cy.url().should('contain', '/account/');

  // Vérifie la présence du message de succès après la création du compte
  cy.get('.message-success').contains('Thank you for registering with Main Website Store.').should('exist');
});
  
  
  
  
  
  
  

