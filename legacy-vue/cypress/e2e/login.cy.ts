describe("Login do VortexAdmin", () => {
  beforeEach(() => {
    cy.visit("/"); // Visita a página inicial (Login)
  });

  it("Deve exibir o formulário de login", () => {
    cy.get("input[name='email']").should("be.visible");
    cy.get("input[name='password']").should("be.visible");
    cy.get("button[type='submit']").should("contain", "Entrar");
  });

  it("Deve falhar no login com credenciais inválidas", () => {
    cy.get("input[name='email']").type("email@invalido.com");
    cy.get("input[name='password']").type("senhaerrada");
    cy.get("button[type='submit']").click();

    cy.get(".error-message").should("contain", "⚠️ Credenciais inválida.");
  });

  it("Deve fazer login com sucesso e redirecionar para o painel", () => {
    cy.get("input[name='email']").type("teste@email.com.br");
    cy.get("input[name='password']").type("123456789");
    cy.get("button[type='submit']").click();

    cy.url().should("include", "/home");
    cy.get("h1").should("contain", "Bem-vindo ao VortexAdmin");
  });

  it("Deve fazer logout corretamente", () => {
    cy.get("input[name='email']").type("teste@email.com.br");
    cy.get("input[name='password']").type("123456789");
    cy.get("button[type='submit']").click();

    cy.get("button.access").click();

    cy.get("button.logout").click();

    cy.url().should("include", "/");
    cy.get("button[type='submit']").should("be.visible");
  });
});
