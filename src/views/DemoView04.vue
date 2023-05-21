<template>
  <div app="DemoView04">
    <h1>{{ title }}</h1>
    <div>{{ user }}</div>
    <div>{{ user.username }}</div>
    <div>{{ topic1 }}</div>
    <div>{{ topic1[0] }}</div>
    <ul>
      <li v-for="item in topic1" :key="item">{{ item }}</li>
    </ul>
    <div>{{ topic2[0] }}</div>
    <div v-for="(item, index) in topic2" :key="index">
      {{ index + 1 }}. {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoView04",
  data() {
    return {
      title: "#Data in Array",
      user: {
        username: "admin",
        password: "admin",
      },
      topic1: ["Angular", "ReactJS", "VueJS"],
      topic2: [
        { name: "Ionic" },
        { name: "React-Native" },
        { name: "Flutter" },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
