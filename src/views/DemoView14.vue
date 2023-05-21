<template>
  <div app="DemoView14">
    <h1>{{ title }}</h1>
    <button @click="onCount" value="{{ counter }}">Click {{ counter }}</button>
  </div>
</template>

<script>
export default {
    name: "DemoView14",
    data() {
    return {
      title: "#Lifecycle Hooks",
      counter: 0,  
    }
  },
  methods: {
    onCount(){
      this.counter++;
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
</style>