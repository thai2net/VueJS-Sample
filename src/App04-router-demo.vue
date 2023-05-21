<template>
  <div id="app">
    <h1>VueJS Demo</h1>

    <ul>
      <li><router-link to="/"><button>HOME</button></router-link></li>
      <li><router-link to="/DemoView01"><button>DemoView01</button></router-link></li>
      <li><router-link to="/DemoView02"><button>DemoView02</button></router-link></li>
      <li><router-link to="/DemoView03"><button>DemoView03</button></router-link></li>
      <li><router-link to="/DemoView04"><button>DemoView04</button></router-link></li>
      <li><router-link to="/DemoView05"><button>DemoView05</button></router-link></li>
      <li><router-link to="/DemoView06"><button>DemoView06</button></router-link></li>
      <li><router-link to="/DemoView07"><button>DemoView07</button></router-link></li>
      <li><router-link to="/DemoView08"><button>DemoView08</button></router-link></li>
    </ul>

    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 8px;
}
.content-wrapper{
  margin: 24px;
  padding: 24px;
  border-width: 1px;
  border-color: gray;
  border-style: dashed;
}
</style>
