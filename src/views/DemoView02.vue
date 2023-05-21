<template>
  <div app="DemoView02">
    <h1>{{ title }}</h1>
    <button v-on:click="onClickMe">Button1</button>
    <button v-on:click="onClickMe2('Button2')">Button2</button>
    <button @click="onClickMe2('Button3')">Button3</button>
    <h2>{{ getDateTime() }}</h2>
  </div>
</template>

<script>
export default {
    name: "DemoView02",
    data() {
    return {
      title: "#methods",  
    }
  },
  methods: {
    onClickMe(){
      alert("Button1");
    },
    onClickMe2(message){
      alert(message);
    },
    getDateTime(){
        return Date();
    },
  },
}
</script>

<style>

</style>