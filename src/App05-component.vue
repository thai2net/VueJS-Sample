<template>
  <div id="app">
    <h1>VueJS Demo</h1>
    <AppHeader/>

    <div class="content-wrapper">
      <router-view></router-view>
    </div>

    <AppFooter align="center"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: "app",
  components: { 
    AppHeader, 
    AppFooter
  }
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
