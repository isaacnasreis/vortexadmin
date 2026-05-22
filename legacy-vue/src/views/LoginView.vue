<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const { loginFailure } = storeToRefs(authStore);

const handleLogin = () => {
  authStore.login(email.value, password.value);
};

const handleGoogleLogin = () => {
  authStore.loginWithGoogle();
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-xl font-semibold mb-4">Login</h2>

      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="Email"
        class="w-full p-2 mb-2 border"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="Senha"
        class="w-full p-2 mb-2 border"
      />

      <button
        @click="handleLogin"
        class="w-full bg-blue-500 text-white p-2"
        type="submit"
      >
        Entrar
      </button>

      <div class="text-center my-4 text-gray-500">ou</div>

      <button
        @click="handleGoogleLogin"
        class="w-full bg-red-500 text-white p-2"
      >
        Entrar com Google
      </button>

      <div
        v-if="loginFailure"
        class="error-message mt-2 text-sm text-red-700 bg-gray-100 border-l-4 border-red-500 p-3"
      >
        ⚠️ Credenciais inválida.
      </div>
    </div>
  </div>
</template>
