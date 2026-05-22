import { describe, it, expect } from "vitest";
import { useDarkMode } from "../composables/useDarkMode.ts";

describe("useDarkMode composable", () => {
  it("deve alternar entre modo claro e escuro", () => {
    const { isDark, toggleDark } = useDarkMode();

    // Estado inicial (falso)
    expect(isDark.value).toBe(false);

    // Alterna para escuro
    toggleDark();
    expect(isDark.value).toBe(true);

    // Alterna de volta para claro
    toggleDark();
    expect(isDark.value).toBe(false);
  });
});
