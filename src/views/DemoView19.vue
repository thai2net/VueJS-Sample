<template>
    <div app="DemoView19">
        <h1>{{ title }}</h1>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
    </div>
  </template>
  
  <script>

  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
    //https://vue-chartjs.org

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'DemoView19',
    components: { Bar },
    data() {
      return {
        title: '#vue-chartjs in Vue 3',
        chartData: {
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 20, 12] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>