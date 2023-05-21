<template>
  <div id="app">
    <h1>VueJS Demo</h1>


    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/DemoView01">DemoView01</router-link></li>
    </ul>
    
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:"app",
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
