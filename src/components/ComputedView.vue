<template>
  <h1>Computed Properties</h1>
  <p>calculation for discout</p>
  <span>{{ hanldeCal }}</span>
</template>

<script>
export default {
  name: "ComputedView",
  data() {
    return {
      doller: 100,
      price: 10,
      discout: 30,
    };
  },
  computed: {
    hanldeCal() {
      return this.doller * this.price - this.discout;
    },
  },
};
</script>
