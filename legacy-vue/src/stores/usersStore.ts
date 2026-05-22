import { defineStore } from "pinia";
import { ref } from "vue";

export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

export const useUsersStore = defineStore("users", () => {
  const users = ref<User[]>([
    { id: 1, name: "Alice Souza", email: "alice@example.com", role: "admin" },
    { id: 2, name: "Carlos Lima", email: "carlos@example.com", role: "user" },
  ]);

  // Criar Usuário
  const addUser = (user: Omit<User, "id">) => {
    users.value.push({ id: Date.now(), ...user });
  };

  // Atualizar Usuário
  const updateUser = (id: number, updatedUser: Partial<User>) => {
    const index = users.value.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...updatedUser };
    }
  };

  // Remover Usuário
  const removeUser = (id: number) => {
    users.value = users.value.filter((user) => user.id !== id);
  };

  return { users, addUser, updateUser, removeUser };
});
