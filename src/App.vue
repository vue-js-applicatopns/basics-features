<template>
  <SlotView />
</template>

<script>
import SlotView from "./components/SlotView.vue";

export default {
  name: "App",
  components: {
    SlotView,
  },
};
</script>
