<template>
  <div id="props" class="footer">
    <span :style="{color:color}">{{title}}</span>
  </div>
</template>

<script>
export default {
  name:"DemoProps",
  mounted() {
  setInterval(() =>{
    this.$emit("onClock",Date())
  },100)
},
  props: [
    "title",
    "color"
  ]
}
</script>

<style scoped>
.footer {
    font-size: 12px;
}
</style>