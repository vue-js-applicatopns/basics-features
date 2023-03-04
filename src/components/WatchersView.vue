<template>
  <div><h1>Watchers</h1></div>
  <h2>Increment & Decrement</h2>
  <button @click="count = count + 1">+</button>
  <button @click="count = count - 1">-</button>
  <p>count: {{ count }}</p>
</template>
<script>
export default {
  name: "WatchersView",
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(curr, pre) {
      if (curr >= 0) {
        this.count = curr;
      } else {
        this.count = pre;
      }
    },
  },
};
</script>
