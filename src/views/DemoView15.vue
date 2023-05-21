<template>
  <div app="DemoView15">
    <h1>{{ title }}</h1>
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>
    <div>Timestamp:{{ timestamp }}</div>
    <div><button @click="onUpdateTimestamp()">Update Timestamp:{{ timestamp }}</button></div>
    <div><button @click="count++">Counter</button></div>
  </div>
</template>

<script>
import moment from 'moment';
export default {

    name: "DemoView15",
    data() {
    return {
      title: "#State variable & Local variable",
      count: 0,  
    }
  },
  created() {
    this.timestamp=moment(Date()).format("YYYY-MM-DD HH:mm:ss");
  },
  //##check Value with Interval Loop##
  //mounted(){
  //  setInterval(() =>{
  //      this.count++
  //      console.log("Timestamp:"+moment(this.timestamp).format("YYYY-MM-DD HH:mm:ss"));
  //  }, 2000);
  //},
  methods: {
    onUpdateTimestamp(){
        this.timestamp=moment(Date()).format("YYYY-MM-DD HH:mm:ss");
    }
  },
};
</script>

<style>
</style>