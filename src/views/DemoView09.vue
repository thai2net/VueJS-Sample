<template>
  <div app="DemoView09">
    <h1>{{ title }}</h1>
    <SlotClock/> <!--fallback (default) slot-->
    <SlotClock> <!--slot1-->
        <span style="color:greenyellow">TIME:</span>
    </SlotClock>
    <SlotClock> <!--slot2-->
        <span style="color:yellowgreen">TIME:</span>
    </SlotClock>
  </div>
</template>

<script>
import SlotClock from "@/components/SlotClock";

export default {
    name: "DemoView09",
    data() {
    return {
      title: "#Slot",  
    }
  },
  components: {
    SlotClock
  },
}
</script>

<style>

</style>