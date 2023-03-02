<template>
  <h2>Parent info into child components</h2>
  <p>Player Name: {{ player }}</p>
  <p>user Name: {{ info.name }}</p>
  <p>collage Name: {{ info.collage }}</p>
  <button @click="getConsole()">click</button>
</template>

<script>
export default {
  name: "InfoView",
  props: {
    player: String,
    info: Object,
    getConsole: Function,
  },
};
</script>
