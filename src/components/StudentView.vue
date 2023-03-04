<template>
  <h1 v-bind="$attrs">StudentView</h1>
  <button @click="getName(userName)">get users</button>
</template>

<script>
export default {
  name: "StudentView",
  inheritAttrs: false,
  data() {
    return {
      userName: "peter",
    };
  },
  props: {
    getName: Function,
  },
};
</script>
