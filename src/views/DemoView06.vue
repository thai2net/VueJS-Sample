<template>
  <div app="DemoView06">
    <h1>{{ title }}</h1>
    <img v-bind:src="imageURL" v-bind:height="height" alt=""/><br />
    <a v-bind:href="imageURL" target="_blank">Image Link</a><br />
    <a :href="imageURL" target="_blank">Image Link</a>
    <div :class="[isCheck ? txtColor1:txtColor2]">Binding to CSS class</div>
    <div :style="{color, fontSize}">Binding to CSS Style</div>
  </div>
</template>

<script>
export default {
  name: "DemoView06",
  data() {
    return {
      title: "#binding with attribute and style",
      imageURL:
        "http://whatpixel.com/images/2016/vuejs-learning-resources/00-featured-vuejs-logo-simple.jpg",
      height: 100,
      isCheck:false,
      color: "red",
      fontSize: "50px",
      txtColor1: "txtColor1",
      txtColor2: "txtColor2"
    };
  },
};
</script>

<style>
.txtColor1 { 
    background-color:aquamarine;
    color:aqua;
}
.txtColor2 { 
    background-color:azure;
    color:bisque;
}
</style>
