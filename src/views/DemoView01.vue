<template>
  <div app="DemoView01">
    <h1>{{ title }}</h1>
    <input v-model="message" type="text" placeholder="Enter Your Message">
    <h1><span>{{ message }}</span></h1>
    <button @click="onClickReset">Reset</button>
  </div>
</template>

<script>
export default {
    name: "DemoView01",
    data() {
    return {
      title: "#v-model 2ways-message update",  
      message:"",
    }
  },
  methods: {
    onClickReset(){
      this.message="";
    }
  },
}
</script>

<style>

</style>