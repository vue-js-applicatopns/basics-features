<template>
  <SlotView />
</template>

<script>
import SlotView from "./components/Slots/SlotView.vue";

export default {
  name: "App",
  components: {
    SlotView,
  },
};
</script>
