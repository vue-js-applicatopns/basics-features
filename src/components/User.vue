<template>
  <p>{{ item.name }}</p>
  <button @click="getConsole(item.id)">click</button>
</template>

<script>
export default {
  name: "UserView",
  props: {
    item: Object,
    getConsole: Function,
  },
};
</script>
