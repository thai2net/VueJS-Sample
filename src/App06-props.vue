<template>
  <div id="app">
    <h1>VueJS Demo</h1>
    <AppHeader/>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <AppFooter align="center"/>

    <DemoProps title="Web App with VueJS" color="lightblue" align="center"/>
    <DemoProps @onClock="onClock" title="Web App with VueJS" color="lightblue" align="center"/>
    <!--Props-->
    <div class="footer" align="center">{{ time }}</div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
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
    AppFooter,
    DemoProps
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
.footer {
    font-size: 12px;
}
</style>
