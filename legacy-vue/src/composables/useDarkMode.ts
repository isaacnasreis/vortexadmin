import { useDark, useToggle } from "@vueuse/core";

export function useDarkMode() {
  const isDark = useDark({
    selector: "html", // Define a classe no <html>
    attribute: "class", // Adiciona "dark" na tag <html>
    valueDark: "dark", // Classe para o modo escuro
    valueLight: "light", // Classe para o modo claro
    storageKey: "theme", // Salva a preferência no localStorage
  });

  const toggleDark = useToggle(isDark);

  return { isDark, toggleDark };
}
