<template>
  <div>
    <h1>{{title}}</h1>
    <table border="1">
        <tr>
            <td>YEAR</td>
            <td>REGION</td>
            <td>Budget</td>
            <td>N of Project</td>
            <td>Action</td>
        </tr>       
        <tr v-for="item in items.data" :key="item.id">
            <td>{{ item.FundYear}}</td>
            <td>{{ item.FundRegion }}</td>
            <td>{{ item.FundButget3 }}</td>
            <td>{{ item.CountProject }}</td>
        <td><button @click="deleteItem(item.id)">Delete</button></td>
      </tr>
    </table>
    <form @submit.prevent="addItem">
      <input
        type="text"
        v-model="FundYear"
        placeholder="FundYear"
        required
      />
      <input
        type="text"
        v-model="FundRegion"
        placeholder="FundRegion"
        required
      />
      <input
        type="text"
        v-model="FundButget3"
        placeholder="FundButget3"
        required
      />
      <input
        type="text"
        v-model="CountProject"
        placeholder="CountProject"
        required
      />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
//https://axios-http.com

export default {
  data() {
    return {
      title: "#axios with Vue 3 & Joget API",
      getURL:"",
      items: [],
      newItemName: [],
      id: ""
    };
  },
  mounted() {
    this.getURL = "http://127.0.0.1:8080/jw/web/json/data/list/eFundCenter/listDashboard97_3S01/?j_username=admin&j_password=admin&d-4760934-fn_FundYear=2563";
    // https://www.joget.org for LOW code Joget platform **this URL is Joget local server

    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios
        .get(this.getURL) // Replace with your API endpoint
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addItem() {
        alert("Add Item: " + "FundYear="+this.FundYear 
        +"FundRegion="+ this.FundRegion 
        +"FundButget3="+ this.FundButget3 
        +"CountProject="+ this.CountProject);
        this.newItemName = '';
        this.fetchItems();
    },
    editItem(id) {
        alert("Edit Item: " + id);
    },
    deleteItem(id) {
        alert("Delete Item: " + id);
    },
  },
};
</script>
