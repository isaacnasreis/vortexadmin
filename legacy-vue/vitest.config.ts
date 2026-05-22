import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Permite usar funções como "describe" e "it" sem importar.
    environment: "jsdom", // Simula um navegador para testar componentes Vue.
    coverage: {
      // Configuração opcional para relatórios de cobertura de código.
      provider: "istanbul",
      reporter: ["text", "lcov"],
    },
  },
});
