<template>
  <div app="DemoView05">
    <h1>{{ title }}</h1>
    <h3>{{ firstname }}</h3>
    <h3>{{ lastname }}</h3>
    <h3>{{ getFullname }}</h3>
    <h3>call Method: {{ getRandomMethod() }}</h3>
    <h3>call Method: {{ getRandomMethod() }}</h3>
    <h3>call Method: {{ getRandomMethod() }}</h3>

    <h3>call Compute: {{ getRandomCompute }}</h3>
    <h3>call Compute: {{ getRandomCompute }}</h3>
    <h3>call Compute: {{ getRandomCompute }}</h3>
  </div>
</template>

<script>
export default {
  name: "DemoView05",
  data() {
    return {
      title: "#Computed vs Methods",
      firstname: "Peter",
      lastname: "Parker",
    };
  },
  methods: {
    getRandomMethod: function () {
      return Math.random();
    },
  },
  computed: {
    getRandomCompute: function () {
      return Math.random();
    },
    getFullname: function () {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script>

<style></style>
