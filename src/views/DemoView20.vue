<template>
    <div app="DemoView20">
        <h1>{{ title }}</h1>
        <DoughnutChart :chartData="testData" />
    </div>
  </template>
  
  
  <script>
  import { defineComponent } from 'vue';
  import { DoughnutChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";
  // https://vue-chart-3.netlify.app

  Chart.register(...registerables);
  
  export default defineComponent({
    name: 'DemoView20',
    components: { DoughnutChart },
    data() {
      return {
        title: '#vue-chartjs in Vue 3'
      }
    },
    setup() {
      const testData = {
        labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
        datasets: [
          {
            data: [30, 40, 60, 70, 5],
            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
          },
        ],
      };
  
      return { testData };
    },
  });
  </script>