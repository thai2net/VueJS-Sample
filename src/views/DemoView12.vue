<template>
  <div app="DemoView12">
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="(item, index) in ['Angular', 'React','Vue']" :key="index">{{ item }}</li>
    </ul>

    <ul>
        <li v-for="(item, index) in arrayData" :key="index">{{ item }}</li>
    </ul>

    <!--object Structure-->
    <ul>
        <li v-for="(item, index) in objData" :key="index">{{ item.name }} {{ item.type }}</li>
    </ul>

    <!--object de-Structure-->
    <ul>
        <li v-for="({name, type}, index) in objData" :key="index">{{ name }} {{ type }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "DemoView12",
    data() {
    return {
      title: "#Loop: v-for",  
      arrayData: ['Ionic', 'React-Native','Flutter'],
      objData: [
        {name:'Angular', type:'JS'},
        {name:'React', type:'JS'},
        {name:'Vue', type:'JS'}
      ]
    }
  },
}
</script>

<style>

</style>