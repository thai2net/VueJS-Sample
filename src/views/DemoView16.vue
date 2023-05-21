<template>
  <div app="DemoView16">
    <h1>{{ title }}</h1>
    <h3>{{ capitalizedMessage }}</h3>
  </div>
</template>

<script>

export default {
  name: "DemoView16",
  data() {
    return {
      title: "#Filter using a Computed property in Vue 3",
      message: "vue",
    };
  },
  // using a computed property in Vue 3 instead of a filter in Vue 2
  computed: {
    //Local filter capitalized message
    capitalizedMessage() {
      if (!this.message) return '';
      return this.message.toString().charAt(0).toUpperCase() + this.message.slice(1);
    },
  }
};
</script>
<style></style>
