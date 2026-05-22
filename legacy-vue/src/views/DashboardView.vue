<script setup lang="ts">
import ProductsChart from "../components/Charts/ProductsChart.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import { useProductsStore } from "../stores/productsStore";

const productsStore = useProductsStore();
</script>

<template>
  <DashboardLayout>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductsChart :products="productsStore.products" />
      </div>
    </div>
  </DashboardLayout>
</template>
