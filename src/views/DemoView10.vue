<template>
  <div app="DemoView10">
    <h1>{{ title }}</h1>
    <MultiSlot/> <!--fallback (default) slot-->
    <MultiSlot> <!--v-slots-->
        <span style="color:darkblue">TIME:</span>
        <template v-slot:template_header>
            <h2>template-header</h2>
        </template>
        <template v-slot:template_footer>
            <h2>template-footer</h2>
        </template>
    </MultiSlot>
  </div>
</template>

<script>
import MultiSlot from "@/components/MultiSlot";

export default {
    name: "DemoView10",
    data() {
    return {
      title: "#MultiSlot with v-slots",  
    }
  },
  components: {
    MultiSlot
  },
}
</script>

<style>
</style>