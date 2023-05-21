<template>
  <div app="DemoView11">
    <h1>{{ title }}</h1>
    <div v-if="category==='A'">
        <span>A</span>
    </div>
    <div v-else-if="category==='B'">
        <span>B</span>
    </div>
    <div v-else-if="category==='C'">
        <span>C</span>
    </div>
    <div v-else>
        <span>not in A,B,C</span>
    </div>

    <div v-if="isActive">
        <span>Active #v-if</span>
    </div>

    <div v-if="isBlink">
        <span>Blink 1 #v-if</span>
    </div>
    <div v-else>
        <span>Blink 2 #v-else</span>
    </div>

    <div v-show="isShow">
        <span>v-show</span>
    </div>
    
  </div>
</template>

<script>
export default {
    name: "DemoView11",
    mounted(){
        setInterval(() => {
            this.isBlink=!this.isBlink;
        }, 1000);
    },
    data() {
    return {
      title: "#Condition: v-if, v-else-if & v-else, v-show",  
      category:"A",
      isActive: true,
      isBlink: true,
      isShow:true,
    }
  },
}
</script>

<style>

</style>