<template>
  <div id="header">
    <ul>
      <li><router-link to="/"><button>HOME</button></router-link></li>
      <li><router-link to="/DemoView01"><button>Demo01</button></router-link></li>
      <li><router-link to="/DemoView02"><button>Demo02</button></router-link></li>
      <li><router-link to="/DemoView03"><button>Demo03</button></router-link></li>
      <li><router-link to="/DemoView04"><button>Demo04</button></router-link></li>
      <li><router-link to="/DemoView05"><button>Demo05</button></router-link></li>
      <li><router-link to="/DemoView06"><button>Demo06</button></router-link></li>
      <li><router-link to="/DemoView07"><button>Demo07</button></router-link></li>
      <li><router-link to="/DemoView08"><button>Demo08</button></router-link></li>
      <li><router-link to="/DemoView09"><button>Demo09</button></router-link></li>
      <li><router-link to="/DemoView10"><button>Demo10</button></router-link></li>
      <li><router-link to="/DemoView11"><button>Demo11</button></router-link></li>
      <li><router-link to="/DemoView12"><button>Demo12</button></router-link></li>
      <li><router-link to="/DemoView13"><button>Demo13</button></router-link></li>
      <li><router-link to="/DemoView14"><button>Demo14</button></router-link></li>
      <li><router-link to="/DemoView15"><button>Demo15</button></router-link></li>
      <li><router-link to="/DemoView16"><button>Demo16</button></router-link></li>
      <li><router-link to="/DemoView17"><button>Demo17</button></router-link></li>
      <li><router-link to="/DemoView18"><button>Demo18</button></router-link></li>
      <li><router-link to="/DemoView19"><button>Demo19</button></router-link></li>
      <li><router-link to="/DemoView20"><button>Demo20</button></router-link></li>
      <li><router-link to="/DemoCRUDResfulAPI"><button>CRUD RESful API</button></router-link></li>
      <li><router-link to="/DemoImportExcel"><button>Excel to JSON</button></router-link></li>
      <li><router-link to="/DemoImportExcel2"><button>Excel to JSON v.2</button></router-link></li>
      <li><router-link to="/DemoJsPDF"><button>JsPDF</button></router-link></li>
      <li><router-link to="/DemoPayinSlip"><button>Pay-in Slip</button></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"AppHeader"
}
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    padding-bottom:16px;
  }
  li {
    display: inline;
    margin-right: 8px;
  }
</style>