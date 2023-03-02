<template>
  <h1>Condition rendaring</h1>
  <h3>if else conditions</h3>
  <p v-if="isShow">if condition</p>
  <p v-else>else condition</p>
  <button @click="handleToggle()">toggle</button>
</template>

<script>
export default {
  name: "ConditionView",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleToggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
