<template>
  <div id="slotclock">
    <slot><span style="color:darkgreen">TIME:</span></slot> {{ time }}
  </div>
</template>

<script>

import moment from 'moment';

export default {
  name: "SlotClock",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
        this.time = moment(Date()).format("YYYY-MM-DD HH:mm:ss");
    }, 100);
  },
};
</script>

<style></style>
