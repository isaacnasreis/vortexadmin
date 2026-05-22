<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore, type User } from "../stores/usersStore";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const usersStore = useUsersStore();

const editingUser = ref(null as User | null); // Armazena o usuário que está sendo editado

// Função para abrir o modal e preencher os dados do usuário selecionado
const startEditing = (user: User) => {
  editingUser.value = { ...user };
};

// Função para salvar as edições
const saveUser = () => {
  if (!editingUser.value) return;
  usersStore.updateUser(editingUser.value.id, { ...editingUser.value });
  editingUser.value = null; // Fecha o modal
};
</script>

<template>
  <DashboardLayout>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Gerenciar Usuários</h1>

      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-800 text-white">
            <th class="border border-gray-300 p-2">ID</th>
            <th class="border border-gray-300 p-2">Nome</th>
            <th class="border border-gray-300 p-2">E-mail</th>
            <th class="border border-gray-300 p-2">Função</th>
            <th class="border border-gray-300 p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in usersStore.users"
            :key="user.id"
            class="hover:bg-gray-100"
          >
            <td class="border border-gray-300 p-2">{{ user.id }}</td>
            <td class="border border-gray-300 p-2">{{ user.name }}</td>
            <td class="border border-gray-300 p-2">{{ user.email }}</td>
            <td class="border border-gray-300 p-2">{{ user.role }}</td>
            <td class="border border-gray-300 p-2">
              <button
                class="bg-blue-500 text-white px-3 py-1 mr-2"
                @click="startEditing(user)"
              >
                ✏️ Editar
              </button>
              <button
                class="bg-red-500 text-white px-3 py-1"
                @click="usersStore.removeUser(user.id)"
              >
                🗑️ Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal de Edição -->
      <div
        v-if="editingUser"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3 dark:bg-gray-900">
          <h2 class="text-2xl font-bold mb-4">Editar Usuário</h2>

          <div class="mb-4">
            <label class="block font-semibold">Nome:</label>
            <input
              v-model="editingUser.name"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="mb-4">
            <label class="block font-semibold">E-mail:</label>
            <input
              v-model="editingUser.email"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="mb-4">
            <label class="block font-semibold">Função:</label>
            <select
              v-model="editingUser.role"
              class="w-full p-2 border rounded dark:bg-gray-900"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <div class="flex justify-end">
            <button
              class="bg-gray-500 text-white px-4 py-2 mr-2"
              @click="editingUser = null"
            >
              ❌ Cancelar
            </button>
            <button class="bg-green-500 text-white px-4 py-2" @click="saveUser">
              💾 Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
