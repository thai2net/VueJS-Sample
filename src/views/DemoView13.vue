<template>
  <div app="DemoView12">
    <h1>{{ title }}</h1>

    <!--object de-Structure-->
    <ul>
        <li v-for="({name, price}, index) in objData" :key="index">{{ name }} {{ price }}</li>
    </ul>

    <!--v-model-->
    <input type="text" placeholder="Product Name" v-model="product.name">
    <input type="text" placeholder="Price" v-model.number="product.price">
    <button @click="addProduct">Submit</button>

    <!--dynamic object-->
    <table border="1" width="100%">
        <tr v-for="(product, index) in listProduct" :key="index">
            <td width="50%">{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td width="10"><button @click="deleteProduct(index)">Delete</button></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    name: "DemoView12",
    methods: {
        addProduct(){
            this.listProduct.push(this.product)
            this.product = {name:"N/A",price:0}
        },
        deleteProduct(index){
            this.listProduct.splice(index,1)
        }
    },
    data() {
    return {
      title: "#v-for & v-model update to array", 
      product: {name:"N/A",price:0}, 
      listProduct:[],
      objData: [
        {name:'Angular', price:100},
        {name:'React', price:200},
        {name:'Vue', price:300}
      ]
    }
  },
}
</script>

<style>

</style>