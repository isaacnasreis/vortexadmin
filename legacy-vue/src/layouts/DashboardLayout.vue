<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore";
import { useDarkMode } from "../composables/useDarkMode";
import { SunIcon, MoonIcon } from "lucide-vue-next";

const { isDark, toggleDark } = useDarkMode();

const isSidebarOpen = ref(true);

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
};
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside
      class="bg-gray-900 text-white w-64 p-5 transition-all"
      v-if="isSidebarOpen"
    >
      <h2 class="text-xl font-bold">
        <router-link to="/">VortexAdmin</router-link>
      </h2>
      <nav class="mt-5">
        <ul>
          <li><router-link to="/dashboard">🏠 Dashboard</router-link></li>
          <li><router-link to="/users">👥 Usuários</router-link></li>
          <li><router-link to="/products">📦 Produtos</router-link></li>
          <li><router-link to="/settings">⚙️ Configurações</router-link></li>
        </ul>
      </nav>

      <button
        @click="toggleDark()"
        class="mt-6 flex items-center gap-2 bg-gray-700 hover:bg-gray-600 p-2 rounded"
      >
        <SunIcon v-if="isDark" class="w-5 h-5 text-yellow-300" />
        <MoonIcon v-else class="w-5 h-5 text-white" />
        <span>Alternar Tema</span>
      </button>

      <button
        @click="handleLogout"
        class="logout mt-6 w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded"
      >
        Sair
      </button>
    </aside>

    <!-- Main Content -->
    <div class="flex-1">
      <header class="bg-gray-800 text-white p-4">
        <button @click="isSidebarOpen = !isSidebarOpen">🔀</button>
      </header>
      <main
        class="flex-1 p-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <slot />
        <!-- Aqui vai o conteúdo das páginas -->
      </main>
    </div>
  </div>
</template>

<style scoped>
a {
  display: block;
  padding: 8px;
  margin: 4px 0;
  border-radius: 4px;
  transition: background 0.2s;
}
a:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
