<template>
  <h1>loops</h1>
  <h2>technology</h2>
  <ul>
    <li v-for="item in technology" v-bind:key="item">
      {{ item }}
    </li>
  </ul>
  <h2>users</h2>
  <ul>
    <li v-for="item in users" v-bind:key="item.id">
      name: {{ item.name }} email: {{ item.email }}
    </li>
  </ul>
  <p v-html="tag"></p>
</template>

<script>
export default {
  name: "LoolView",
  data() {
    return {
      tag: "<h1>hello world!</h1>",
      technology: ["node", "java"],
      users: [
        {
          id: 1,
          name: "rohit",
          email: "rohit@gmail.coms",
        },
        {
          id: 2,
          name: "virat",
          email: "virat@gmail.coms",
        },
      ],
    };
  },
};
</script>
