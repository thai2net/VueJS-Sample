<template>
  <div id="app" class="content-wrapper">
    <h1>v-model</h1>
    <input v-model="message" type="text" placeholder="Enter Your Message">
    <span>{{ message }}</span>
    <button @click="onClickReset">Reset</button>
  </div>
</template>

<script>
export default {
  name:"app",
  data() {
    return {
      message:"DEMO",
    }
  },
  methods: {
    onClickReset(){
      this.message="DEMO";
    }
  },
};
</script>

<style>
.content-wrapper{
    margin: 24px;
    padding: 24px;
    border-width: 1px;
    border-color: gray;
    border-style: dashed;
  }
</style>
