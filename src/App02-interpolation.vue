<template>
  <div id="app" class="content-wrapper">
    <h1>{{title}}</h1>
    <h1>{{count}}</h1>
    <button @click="onClickAdd">Add</button>
  </div>
</template>

<script>
export default {
  name:"app",
  data() {
    return {
      title:"DEMO",
      count: 1,
    }
  },
  methods: {
    onClickAdd(){
      this.count=this.count+1;
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
