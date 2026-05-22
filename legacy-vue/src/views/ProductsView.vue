<script setup lang="ts">
import { ref } from "vue";
import { useProductsStore, type Product } from "../stores/productsStore";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const productsStore = useProductsStore();

// Novo produto temporário para adicionar na lista
const newProduct = ref<Product>({ id: 0, name: "", price: 0, stock: 0 });

// Estado para edição
const editingProduct = ref<null | Product>(null);

const addProduct = () => {
  if (newProduct.value.name && newProduct.value.price > 0) {
    newProduct.value.id = Date.now();
    productsStore.addProduct({ ...newProduct.value });
    newProduct.value = { id: 0, name: "", price: 0, stock: 0 };
  } else {
    alert("Preencha os campos corretamente!");
  }
};

// Ativa o modo de edição para um produto
const startEditing = (product: Product) => {
  editingProduct.value = { ...product }; // Copia o produto para evitar modificar diretamente no store
};

// Salva as edições no produto
const saveEdit = () => {
  if (editingProduct.value) {
    productsStore.updateProduct(editingProduct.value.id, editingProduct.value);
    editingProduct.value = null;
  }
};

// Remove um produto
const deleteProduct = (id: number) => {
  productsStore.removeProduct(id);
};
</script>

<template>
  <DashboardLayout>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Gerenciar Produtos</h1>

      <div class="mb-6 p-4 bg-gray-100 rounded-lg dark:bg-gray-900">
        <h2 class="font-semibold mb-2">Adicionar Novo Produto</h2>
        <input
          v-model="newProduct.name"
          placeholder="Nome"
          class="border p-2 w-full mb-2"
        />
        <input
          v-model="newProduct.price"
          type="number"
          placeholder="Preço"
          class="border p-2 w-full mb-2"
        />
        <input
          v-model="newProduct.stock"
          type="number"
          placeholder="Estoque"
          class="border p-2 w-full mb-2"
        />
        <button @click="addProduct" class="bg-green-500 text-white px-4 py-2">
          Adicionar
        </button>
      </div>

      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200 dark:bg-gray-700">
            <th class="border border-gray-300 p-2">ID</th>
            <th class="border border-gray-300 p-2">Nome</th>
            <th class="border border-gray-300 p-2">Preço</th>
            <th class="border border-gray-300 p-2">Estoque</th>
            <th class="border border-gray-300 p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsStore.products" :key="product.id">
            <td class="border border-gray-300 p-2">{{ product.id }}</td>

            <!-- Se está em edição, exibe inputs -->
            <td class="border border-gray-300 p-2">
              <input
                v-if="editingProduct?.id === product.id"
                v-model="editingProduct.name"
                class="border p-1"
              />
              <span v-else>{{ product.name }}</span>
            </td>

            <td class="border border-gray-300 p-2">
              <input
                v-if="editingProduct?.id === product.id"
                v-model="editingProduct.price"
                type="number"
                class="border p-1"
              />
              <span v-else>R$ {{ product.price.toFixed(2) }}</span>
            </td>

            <td class="border border-gray-300 p-2">
              <input
                v-if="editingProduct?.id === product.id"
                v-model="editingProduct.stock"
                type="number"
                class="border p-1"
              />
              <span v-else>{{ product.stock }}</span>
            </td>

            <td class="border border-gray-300 p-2">
              <button
                v-if="editingProduct?.id === product.id"
                @click="saveEdit"
                class="bg-blue-500 text-white px-2 py-1 mr-2"
              >
                💾 Salvar
              </button>
              <button
                v-else
                @click="startEditing(product)"
                class="bg-yellow-500 text-white px-2 py-1 mr-2"
              >
                ✏️ Editar
              </button>
              <button
                @click="deleteProduct(product.id)"
                class="bg-red-500 text-white px-2 py-1"
              >
                🗑️ Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>
