<script setup lang="ts">
import { defineProps, computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps<{
  products: { name: string; stock: number }[];
}>();

// Gerar os dados do gráfico dinamicamente
const chartData = computed(() => ({
  labels: props.products.map((p) => p.name), // Nomes dos produtos
  datasets: [
    {
      label: "Quantidade em Estoque",
      data: props.products.map((p) => p.stock), // Estoque dos produtos
      backgroundColor: "#4CAF50",
    },
  ],
}));

const chartOptions: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h2 class="text-xl text-gray-900 font-semibold mb-2">
      Estoque de Produtos
    </h2>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
