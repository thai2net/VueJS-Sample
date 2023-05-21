<template>
  <div app="DemoView03">
    <h1>{{ title }}</h1>
    <button @click="onClickAdd()">Add</button>
    <button @click="onClickAgree()">Agree</button>
    <button @click="onClickReject()">Reject</button>
    <div><input type="text" placeholder="Enter Paper Title" v-model="message"></div>
    <div><h3><span>{{ count }}</span></h3></div>
    <h3>{{ message }}</h3>
    <h3>{{ isApprove }}</h3>
    <h2 v-if="isApprove">Approvement !!</h2>
  </div>
</template>

<script>
export default {
    name: "DemoView03",
    mounted(){
        this.message="Title1";
    },
    data() {
    return {
      title: "#methods, mounted and v-model",     
      message:"",
      count:1,
      isApprove:false
    }
  },
  methods: {
    onClickAdd(){
      this.count=this.count + 1;
    },
    onClickAgree(){
      this.isApprove=true
    }
    ,
    onClickReject(){
      this.isApprove=false
    }
  },
}
</script>

<style>

</style>