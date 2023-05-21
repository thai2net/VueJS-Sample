<template>
    <div id="multislot">
      <slot name="template_header"></slot>
      <slot><span style="color:darkgreen">TIME:</span></slot> {{ time }}
      <slot name="template_footer"></slot>
    </div>
</template>

<script>

import moment from 'moment';

export default {
  name: "MultiSlot",
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
