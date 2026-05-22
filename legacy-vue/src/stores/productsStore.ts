import { defineStore } from "pinia";
import { ref } from "vue";

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([
    { id: 1, name: "Notebook Gamer", price: 4500, stock: 10 },
    { id: 2, name: "Smartphone", price: 2500, stock: 25 },
  ]);

  const addProduct = (product: Product) => {
    products.value.push(product);
  };

  const updateProduct = (id: number, updatedProduct: Partial<Product>) => {
    const index = products.value.findIndex((product) => product.id === id);
    if (index !== -1) {
      products.value[index] = { ...products.value[index], ...updatedProduct };
    }
  };

  const removeProduct = (id: number) => {
    products.value = products.value.filter((product) => product.id !== id);
  };

  return { products, addProduct, updateProduct, removeProduct };
});
