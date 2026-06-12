<div align="center">
  <img src="public/favicon.svg" alt="VortexAdmin Logo" width="100">
  
  # VortexAdmin V2
  
  **Arquitetura Enterprise Frontend com Angular 18 e Web Workers**

  [![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![NgRx](https://img.shields.io/badge/NgRx-BA2BD2?style=for-the-badge&logo=ngrx&logoColor=white)](https://ngrx.io/)
  [![PrimeNG](https://img.shields.io/badge/PrimeNG-20232A?style=for-the-badge&logo=primereact&logoColor=FF424D)](https://primeng.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

  [Live Demo](https://vortexadmin.netlify.app/) • [Reportar Bug](https://github.com/isaacnasreis/vortexadmin/issues) • [Solicitar Feature](https://github.com/isaacnasreis/vortexadmin/issues)

</div>

<br />

## 📌 Sobre o Projeto

O **VortexAdmin** nasceu como um dashboard moderno desenvolvido em Vue 3. No entanto, para alinhar o projeto com as demandas reais e rigorosas de aplicações corporativas de alto nível (Bancos, Fintechs e SaaS B2B Enterprise), foi necessária uma evolução arquitetural severa.

A **V2** foi reescrita do zero utilizando o ecossistema mais moderno do **Angular 18**. O objetivo deste projeto é demonstrar o domínio sobre arquiteturas escaláveis, reatividade avançada sem *boilerplate*, e performance assíncrona robusta no front-end.

*(Nota: O código original em Vue 3 foi arquivado e mantido na pasta `legacy-vue/` para fins de histórico e comparação de arquiteturas).*

---

## 🎯 Arquitetura & Decisões Técnicas

*   **Standalone Components:** O projeto foi construído **100% sem `NgModules`**. Utilizar a arquitetura *Standalone* garante bundles menores, árvores de dependência mais claras e extrema facilidade na implementação de *Lazy Loading*.
*   **Reatividade com Angular Signals & NgRx SignalStore:** O uso tradicional e denso do `RxJS` foi substituído pelo novo padrão de reatividade do Angular: os **Signals**. O gerenciamento de estado global (como `AuthStore`, `MetricsStore`, e `SettingsStore`) é feito através do **NgRx SignalStore**, oferecendo um estado altamente performático, previsível e com DX (Developer Experience) excepcional.
*   **Web Workers (Multithreading):** Desenvolver interfaces fluidas é um requisito *Enterprise*. Para provar a resiliência do sistema em processamento pesado de dados no Client-Side, o dashboard conta com um Web Worker (`data-parser.worker.ts`) que gera e processa **500 mil registros mockados** simultaneamente, sem congelar a *Main Thread*.
*   **Interface Glassmorphism & Theming Dinâmico:** Utilizando o poder do **PrimeNG** para componentes de alta complexidade (DataTables, Charts) combinado com o design utilitário do **Tailwind CSS**. A aplicação possui suporte nativo para alternância reativa entre **Dark Mode** e **Light Mode**, além de sistema de **i18n** dinâmico, tudo reagindo em milissegundos através do Store local.

---

## 🚀 Principais Features

- ⚡ **Dashboard em Tempo Real:** Gráficos renderizados via `Chart.js` alimentados por dados processados assincronamente (Web Workers).
- 🌓 **Tematização Dinâmica:** Suporte completo e customizável para modo Claro e Escuro através de CSS customizado integrando perfeitamente os temas do PrimeNG.
- 🌐 **Internacionalização (i18n):** Troca de idioma nativa (Português/Inglês) reagindo via Signals na árvore de componentes.
- 👥 **Gerenciamento de Usuários:** Interface pronta e estruturada para manipulação de CRUD e exibições em Data Tables padronizadas.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** Angular 18 (Standalone)
- **Linguagem:** TypeScript
- **Gerenciamento de Estado:** NgRx SignalStore (Angular Signals)
- **Performance:** Web Workers API
- **UI Components:** PrimeNG v18+
- **Estilização:** Tailwind CSS & SCSS
- **Gráficos:** Chart.js

---

## 📂 Estrutura de Diretórios (Clean Architecture)

A estrutura de pastas foi pensada para crescimento horizontal e isolamento de responsabilidades:

```text
src/app/
├── core/             # Layouts, guards, interceptors (Singletons)
├── features/         # Módulos de domínio da aplicação (Dashboard, Auth, Users)
├── shared/           # Componentes reutilizáveis, pipes, directives e Web Workers
└── store/            # Lógica de gerenciamento de estado (SignalStores)
```

---

## 💻 Como rodar o projeto localmente

Siga os passos abaixo para rodar o VortexAdmin V2 em seu ambiente de desenvolvimento.

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) (v18.19.0 ou superior recomendado)
- Angular CLI global (Opcional, mas recomendado: `npm install -g @angular/cli`)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/isaacnasreis/vortexadmin.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd vortexadmin
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run start
   ```

5. Acesse no seu navegador:
   ```text
   http://localhost:4200/
   ```

---

<div align="center">
  Desenvolvido com dedicação por <strong>Isaac Reis</strong>. <br />
  Sinta-se à vontade para se conectar no <a href="https://github.com/isaacnasreis">GitHub</a>!
</div>
