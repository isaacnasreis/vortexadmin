<script setup lang="ts">
import { ref } from "vue";
import { useDarkMode } from "../composables/useDarkMode";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const { isDark, toggleDark } = useDarkMode();
const email = ref("seuemail@exemplo.com");
const notificacoes = ref(true);
</script>

<template>
  <DashboardLayout>
    <div
      class="p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md"
    >
      <h1 class="text-2xl font-bold">Configurações</h1>

      <!-- Alternar Tema -->
      <div class="mt-4 flex items-center justify-between">
        <span class="text-lg">Modo Escuro</span>
        <button
          @click="toggleDark()"
          class="px-4 py-2 bg-gray-700 dark:bg-gray-500 text-white rounded"
        >
          {{ isDark ? "Desativar" : "Ativar" }}
        </button>
      </div>

      <!-- Configuração de Notificações -->
      <div class="mt-4 flex items-center justify-between">
        <span class="text-lg">Receber Notificações</span>
        <input type="checkbox" v-model="notificacoes" class="w-5 h-5" />
      </div>

      <!-- Atualização de Email -->
      <div class="mt-4">
        <label class="block text-lg">Alterar Email</label>
        <input
          v-model="email"
          type="email"
          class="w-full p-2 border rounded mt-2 dark:bg-gray-800"
        />
        <button
          class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Atualizar Email
        </button>
      </div>
    </div>
  </DashboardLayout>
</template>
