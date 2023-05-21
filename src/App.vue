<template>
  <div id="app">
    <h1>VueJS Demo</h1>
    <!--router-link-->
    <AppHeader/>
    <!--Demo-->
    <AppContent/>
    <!--footer-->
    <AppFooter align="center"/>
    <DemoProps title="Web App with VueJS" color="lightblue" align="center"/>
    <DemoProps @onClock="onClock" title="Web App with VueJS" color="lightblue" align="center"/>
    <!--Props-->
    <div class="footer" align="center">{{ time }}</div>
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppContent from "@/components/AppContent";
import AppFooter from "@/components/AppFooter";
import DemoProps from "@/components/DemoProps";
import moment from "moment" //--npx yarn add moment

export default {
  name: "app",
  methods:{
    onClock(value){
      this.time = moment(value).format("YYYY-MM-DD HH:mm:ss")
    }
  },
  data(){
    return{
      time: ""
    }
  },
  components: { 
    AppHeader, 
    AppContent,
    AppFooter,
    DemoProps
  }
};
</script>

<style>
.footer {
    font-size: 12px;
}
</style>
