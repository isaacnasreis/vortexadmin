<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogin = () => {
  router.push("/dashboard");
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
  >
    <h1 class="text-4xl font-bold mb-4">Bem-vindo ao VortexAdmin</h1>
    <p class="text-lg mb-6">
      Gerencie seus usuários e produtos de forma eficiente.
    </p>

    <button
      @click="handleLogin"
      class="access bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
    >
      Acessar Dashboard
    </button>
  </div>
</template>
